import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoticiaSoloDarkPage } from './noticia-solo-dark.page';

describe('NoticiaSoloDarkPage', () => {
  let component: NoticiaSoloDarkPage;
  let fixture: ComponentFixture<NoticiaSoloDarkPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoticiaSoloDarkPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoticiaSoloDarkPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
