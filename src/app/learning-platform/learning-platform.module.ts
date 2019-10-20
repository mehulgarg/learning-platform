import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningPlatformRoutingModule, routingComponents } from './learning-platform-routing.module';
import { DemoMaterialModule } from '../core/material-module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [routingComponents],
  imports: [
    LearningPlatformRoutingModule,
    CommonModule,
    DemoMaterialModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class LearningPlatformModule { }
