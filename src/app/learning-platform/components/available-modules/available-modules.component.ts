import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-available-modules',
  templateUrl: './available-modules.component.html',
  styleUrls: ['./available-modules.component.scss']

})
/*
export class AvailableModulesComponent{
  @Input()  name: string;
  @Output() chosen = new EventEmitter<string>();

  frameworksTaken(modules: string) {
    this.chosen.emit(modules);

  }
}
*/

export class AvailableModulesComponent implements OnInit {

  bodyDiv = false;
  inputName = '';
  @Output() buttonClicked = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  frameworksTaken() {
    console.log('frameworksTaken clicked.');
    this.bodyDiv = true;
    this.inputName = document.getElementById('userInput').innerHTML;
    console.log(this.inputName);
    console.log(this.bodyDiv);
    this.buttonClicked.emit(this.inputName);
  }
}
