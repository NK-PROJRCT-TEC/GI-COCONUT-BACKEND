import { TestBed } from '@angular/core/testing';

import { ReportGiCoconutService } from './report-gi-coconut.service';

describe('ReportGiCoconutService', () => {
  let service: ReportGiCoconutService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportGiCoconutService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
