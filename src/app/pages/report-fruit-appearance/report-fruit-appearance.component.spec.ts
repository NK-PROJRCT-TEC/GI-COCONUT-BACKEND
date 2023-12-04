import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportFruitAppearanceComponent } from './report-fruit-appearance.component';

describe('ReportFruitAppearanceComponent', () => {
  let component: ReportFruitAppearanceComponent;
  let fixture: ComponentFixture<ReportFruitAppearanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReportFruitAppearanceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReportFruitAppearanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
