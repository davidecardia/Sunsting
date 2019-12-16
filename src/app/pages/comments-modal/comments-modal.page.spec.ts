import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentsModalPage } from './comments-modal.page';

describe('CommentsModalPage', () => {
  let component: CommentsModalPage;
  let fixture: ComponentFixture<CommentsModalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentsModalPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentsModalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
