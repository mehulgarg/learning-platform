import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LearningPlatformRoutingModule, routingComponents} from './learning-platform-routing.module';
@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    LearningPlatformRoutingModule,
  ]
})
export class LearningPlatformModule { }
