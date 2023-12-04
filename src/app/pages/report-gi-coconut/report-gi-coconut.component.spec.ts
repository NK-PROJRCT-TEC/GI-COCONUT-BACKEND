import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportGiCoconutComponent } from './report-gi-coconut.component';

describe('ReportGiCoconutComponent', () => {
  let component: ReportGiCoconutComponent;
  let fixture: ComponentFixture<ReportGiCoconutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportGiCoconutComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportGiCoconutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
