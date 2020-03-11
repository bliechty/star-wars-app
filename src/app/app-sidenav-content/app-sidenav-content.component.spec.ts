import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppSidenavContentComponent } from './app-sidenav-content.component';

describe('AppSidenavContentComponent', () => {
  let component: AppSidenavContentComponent;
  let fixture: ComponentFixture<AppSidenavContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppSidenavContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppSidenavContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
