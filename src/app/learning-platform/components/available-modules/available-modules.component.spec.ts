import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvailableModulesComponent } from './available-modules.component';

describe('AvailableModulesComponent', () => {
  let component: AvailableModulesComponent;
  let fixture: ComponentFixture<AvailableModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvailableModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvailableModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
