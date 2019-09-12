import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaSoloPage } from './noticia-solo.page';

describe('NoticiaSoloPage', () => {
  let component: NoticiaSoloPage;
  let fixture: ComponentFixture<NoticiaSoloPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaSoloPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaSoloPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
