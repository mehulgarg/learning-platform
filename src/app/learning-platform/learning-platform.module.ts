import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningPlatformRoutingModule, routingComponents } from './learning-platform-routing.module';
import { DemoMaterialModule } from '../core/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations:
  [
    routingComponents,
  ],
  imports: [
    LearningPlatformRoutingModule,
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class LearningPlatformModule { }
