import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { IndividualFramework } from '../../models/individual-framework';

@Component({
  selector: 'app-individual-framework',
  templateUrl: './individual-framework.component.html',
  styleUrls: ['./individual-framework.component.scss']
})
export class IndividualFrameworkComponent implements OnInit {

  frameworkId: number;
  frameworkName: string;
  individualFramework: IndividualFramework;
  individualModules;


  constructor(private route: ActivatedRoute, private http: HttpClient) {
    this.route.params.subscribe(params => { this.frameworkId = params.frameworkId, this.frameworkName = params.frameworkName; });
    this.individualModules = [];
  }
  ngOnInit() {
    console.log(this.frameworkId);
    this.http.get<any>('http://127.0.0.1:5000/frameworkContents', {
      params: {
        frameworkId: this.frameworkId.toString(),
      }
    }).subscribe(
      data => {
        this.individualFramework = JSON.parse(data);
        console.log(this.individualFramework);
        console.log(this.individualFramework.modules);
        this.individualModules = this.individualFramework.modules;
        console.log(this.individualModules);
      }
    );
  }

}
