import { Component, OnInit } from '@angular/core';
//import { ChosenModulesService } from '../../services/chosen-modules.service';

@Component({
  selector: 'app-available-modules',
  templateUrl: './available-modules.component.html',
  styleUrls: ['./available-modules.component.scss']
  
})
export class AvailableModulesComponent implements OnInit {

  public modules = ["Laravel","Flask","Django","Spring"]

  take(module:any){ 
    console.log(module.target.textContent)
    
  }

  constructor() { }

  ngOnInit() {
    
  }

}
