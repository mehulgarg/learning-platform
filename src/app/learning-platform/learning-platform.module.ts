import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningPlatformRoutingModule, routingComponents } from './learning-platform-routing.module';
import { DemoMaterialModule } from '../core/material-module';
@NgModule({
  declarations: [routingComponents],
  imports: [
    CommonModule,
    LearningPlatformRoutingModule,
    DemoMaterialModule
  ]
})
export class LearningPlatformModule { }
