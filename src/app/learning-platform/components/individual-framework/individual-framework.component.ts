import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IndividualFramework } from '../../models/individual-framework';
import { AppConstants } from 'src/assets/app_constants';

@Component({
  selector: 'app-individual-framework',
  templateUrl: './individual-framework.component.html',
  styleUrls: ['./individual-framework.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IndividualFrameworkComponent implements OnInit {

  frameworkId: number;
  frameworkName: string;
  individualFramework: IndividualFramework;
  individualModules;
  startTextEditorClicked: boolean;
  textEditorButton: boolean;
  success: boolean;
  textEditorUrl: string;

  contentsUrl = 'http://127.0.0.1:5000/frameworkContents';
  startTextEditorUrl = 'http://127.0.0.1:5000/start-text-editor';

  constructor(private route: ActivatedRoute, private http: HttpClient, private changeDectector: ChangeDetectorRef) {
    this.route.params.subscribe(params => { this.frameworkId = params.frameworkId, this.frameworkName = params.frameworkName; });
  }


  ngOnInit() {
    this.startTextEditorClicked = false;
    this.individualModules = [];
    this.textEditorButton = true;
    this.success = sessionStorage.getItem(AppConstants.TEXT_EDITOR_STARTED) === 'true';
    this.changeDectector.detectChanges();
    console.log(this.frameworkId);
    this.http.get<any>(this.contentsUrl, {
      params: {
        frameworkId: this.frameworkId.toString(),
      }
    }).subscribe(
      data => {
        // this.individualFramework = data;
        console.log(JSON.stringify(data));
        this.individualFramework = JSON.parse(JSON.parse(JSON.stringify(data)));
        console.log(this.individualFramework, typeof(this.individualFramework));
        console.log(this.individualFramework.modules);
        this.individualModules = this.individualFramework.modules;
        this.changeDectector.detectChanges();
        console.log(this.individualModules);
      }
    );
  }

  startTextEditor() {
    this.success = sessionStorage.getItem(AppConstants.TEXT_EDITOR_STARTED) === 'true';
    if (!this.success) {
      this.startTextEditorClicked = true;
      this.changeDectector.detectChanges();
      this.http.get<any>(this.startTextEditorUrl).subscribe(
        data => {
          this.textEditorButton = true;
          this.startTextEditorClicked = false;
          sessionStorage.setItem(AppConstants.TEXT_EDITOR_STARTED, 'true');
          this.success = sessionStorage.getItem(AppConstants.TEXT_EDITOR_STARTED) === 'true';
          this.changeDectector.detectChanges();
          this.textEditorUrl = data;
          this.openTextEditorWindow();
        },
        error => {
          this.textEditorButton = false;
          this.startTextEditorClicked = false;
          this.changeDectector.detectChanges();
        });
    } else {
      this.openTextEditorWindow();
    }
  }

  openTextEditorWindow() {
    window.open(this.textEditorUrl);
  }
  tryAgain() {

  }

}
