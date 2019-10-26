import { Component, EventEmitter, Input, Output, OnInit , OnDestroy} from '@angular/core';
import { SelectedModulesService } from '../../services/selected-modules.service';


@Component({
  selector: 'app-available-modules',
  templateUrl: './available-modules.component.html',
  styleUrls: ['./available-modules.component.scss']

})
export class AvailableModulesComponent {

  courses: string[] = ['Laravel', 'Django', 'Flask'];

  constructor(private tempuser: SelectedModulesService) { }

  frameworksTaken(e) {
    console.log(e.target.textContent);
    this.tempuser.user.addCourses(e.target.textContent);
  }

}
