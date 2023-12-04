import { TestBed } from '@angular/core/testing';

import { ReportLeafMorphologyService } from './report-leaf-morphology.service';

describe('ReportLeafMorphologyService', () => {
  let service: ReportLeafMorphologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportLeafMorphologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
