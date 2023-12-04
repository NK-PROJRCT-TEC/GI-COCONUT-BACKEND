import { TestBed } from '@angular/core/testing';

import { ReportFruitAppearanceService } from './report-fruit-appearance.service';

describe('ReportFruitAppearanceService', () => {
  let service: ReportFruitAppearanceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportFruitAppearanceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
