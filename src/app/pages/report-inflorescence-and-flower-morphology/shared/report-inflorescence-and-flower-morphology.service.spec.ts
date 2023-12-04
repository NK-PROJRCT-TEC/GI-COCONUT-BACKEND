import { TestBed } from '@angular/core/testing';

import { ReportInflorescenceAndFlowerMorphologyService } from './report-inflorescence-and-flower-morphology.service';

describe('ReportInflorescenceAndFlowerMorphologyService', () => {
  let service: ReportInflorescenceAndFlowerMorphologyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReportInflorescenceAndFlowerMorphologyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
