import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportLeafMorphologyComponent } from './report-leaf-morphology.component';

describe('ReportLeafMorphologyComponent', () => {
  let component: ReportLeafMorphologyComponent;
  let fixture: ComponentFixture<ReportLeafMorphologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportLeafMorphologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportLeafMorphologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
