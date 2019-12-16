import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InspiredToPage } from './inspired-to.page';

describe('InspiredToPage', () => {
  let component: InspiredToPage;
  let fixture: ComponentFixture<InspiredToPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InspiredToPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InspiredToPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
