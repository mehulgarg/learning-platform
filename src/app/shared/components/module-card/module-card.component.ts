import { Component, OnInit, Input } from '@angular/core';
import { IndividualModule } from 'src/app/learning-platform/models/individual-module';

@Component({
  selector: 'app-module-card',
  templateUrl: './module-card.component.html',
  styleUrls: ['./module-card.component.scss']
})
export class ModuleCardComponent implements OnInit {

  @Input() module: IndividualModule;
  @Input() moduleNumber: number;
  constructor() {
    console.log('Module details ', this.module);
  }

  ngOnInit() {
    console.log('Module details ', this.module);
  }

}
