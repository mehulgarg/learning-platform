import { TestBed } from '@angular/core/testing';

import { ChosenModulesService } from './chosen-modules.service';

describe('ChosenModulesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChosenModulesService = TestBed.get(ChosenModulesService);
    expect(service).toBeTruthy();
  });
});
