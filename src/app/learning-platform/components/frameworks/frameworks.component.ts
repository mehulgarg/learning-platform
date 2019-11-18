import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AllFrameworks } from '../../models/allFrameworks';
import { FrameworkDetails } from '../../models/frameworkDetails';
import { AppConstants } from 'src/assets/app_constants';

@Component({
  selector: 'app-frameworks',
  templateUrl: './frameworks.component.html',
  styleUrls: ['./frameworks.component.scss']
})
export class FrameworksComponent implements OnInit {

  allFrameworkDetails: AllFrameworks;
  frameworks;
  tempMap;
  constructor(private http: HttpClient, ) {
    this.frameworks = [];
    this.tempMap = new Map<number, string>();
  }

  ngOnInit() {
    this.http.get<any>('http://127.0.0.1:5000/frameworkdetails').subscribe(
      data => {
        console.log(data, typeof (data));
        this.allFrameworkDetails = JSON.parse(data);
        console.log(this.allFrameworkDetails.frameworkDetails);
        let i: number;
        let k: number;
        const elementsPerSubArray = 3;

        for (i = 0, k = -1; i < this.allFrameworkDetails.numberOfFrameworks; i++) {
          if (i % elementsPerSubArray === 0) {
            k++;
            this.frameworks[k] = [];
          }

          this.frameworks[k].push(this.allFrameworkDetails.frameworkDetails[i]);
          console.log(this.allFrameworkDetails.frameworkDetails[i].frameworkId, this.allFrameworkDetails.frameworkDetails[i].frameworkName);
          this.tempMap.set(
            this.allFrameworkDetails.frameworkDetails[i].frameworkId, this.allFrameworkDetails.frameworkDetails[i].frameworkName);
        }
        console.log(this.frameworks);
      }
    );
  }

}
