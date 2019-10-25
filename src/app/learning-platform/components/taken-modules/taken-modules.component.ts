import { Component} from '@angular/core';
import { SelectedModulesService } from '../../services/selected-modules.service';


@Component({
  selector: 'app-taken-modules',
  templateUrl: './taken-modules.component.html',
  styleUrls: ['./taken-modules.component.scss'],
})

export class TakenModulesComponent{
  constructor(private tempUser:SelectedModulesService){
    
  }

  ngOnInit(){

  }
}
/*
export class TakenModulesComponent {
    name:string
    showNextComponent(value:string) {
    this.name = value;
  }
}
*/






/*
export class TakenModulesComponent implements OnInit {
  constructor() { }
  ngOnInit() {
  }
}
*/