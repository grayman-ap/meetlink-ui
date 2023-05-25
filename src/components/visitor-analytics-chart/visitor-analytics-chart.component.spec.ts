import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisitorAnalyticsChartComponent } from './visitor-analytics-chart.component';

describe('VisitorAnalyticsChartComponent', () => {
  let component: VisitorAnalyticsChartComponent;
  let fixture: ComponentFixture<VisitorAnalyticsChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisitorAnalyticsChartComponent]
    });
    fixture = TestBed.createComponent(VisitorAnalyticsChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
