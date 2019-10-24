import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TakenModulesComponent } from './taken-modules.component';

describe('TakenModulesComponent', () => {
  let component: TakenModulesComponent;
  let fixture: ComponentFixture<TakenModulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TakenModulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TakenModulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
