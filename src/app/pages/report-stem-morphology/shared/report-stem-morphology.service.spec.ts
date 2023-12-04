import { TestBed } from '@angular/core/testing';

import { ReportStemMorphologyService } from './report-stem-morphology.service';

describe('ReportStemMorphologyService', () => {
  let service: ReportStemMorphologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportStemMorphologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
