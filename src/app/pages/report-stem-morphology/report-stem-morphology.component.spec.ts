import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportStemMorphologyComponent } from './report-stem-morphology.component';

describe('ReportStemMorphologyComponent', () => {
  let component: ReportStemMorphologyComponent;
  let fixture: ComponentFixture<ReportStemMorphologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportStemMorphologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportStemMorphologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
