import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportInflorescenceAndFlowerMorphologyComponent } from './report-inflorescence-and-flower-morphology.component';

describe('ReportInflorescenceAndFlowerMorphologyComponent', () => {
  let component: ReportInflorescenceAndFlowerMorphologyComponent;
  let fixture: ComponentFixture<ReportInflorescenceAndFlowerMorphologyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportInflorescenceAndFlowerMorphologyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportInflorescenceAndFlowerMorphologyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
