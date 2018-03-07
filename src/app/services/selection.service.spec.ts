/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { SelectionService } from './selection.service';

describe('Service: Selection', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SelectionService]
    });
  });

  it('should ...', inject([SelectionService], (service: SelectionService) => {
    expect(service).toBeTruthy();
  }));
});