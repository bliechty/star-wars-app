import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCharacterListComponent } from './app-character-list.component';

describe('AppCharacterListComponent', () => {
  let component: AppCharacterListComponent;
  let fixture: ComponentFixture<AppCharacterListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppCharacterListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppCharacterListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
