import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestNg2chartsInstallationComponent } from './test-ng2charts-installation.component';

describe('TestNg2chartsInstallationComponent', () => {
  let component: TestNg2chartsInstallationComponent;
  let fixture: ComponentFixture<TestNg2chartsInstallationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestNg2chartsInstallationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestNg2chartsInstallationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
