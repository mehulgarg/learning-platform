import { Component} from '@angular/core';

@Component({
  selector: 'app-taken-modules',
  templateUrl: './taken-modules.component.html',
  styleUrls: ['./taken-modules.component.scss']
})

export class TakenModulesComponent {

    name:string
    showNextComponent(value:string) {
    this.name = value;
  }
}

/*
export class TakenModulesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
*/