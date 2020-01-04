import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClasamentPage } from './clasament.page';

describe('ClasamentPage', () => {
  let component: ClasamentPage;
  let fixture: ComponentFixture<ClasamentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClasamentPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClasamentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
