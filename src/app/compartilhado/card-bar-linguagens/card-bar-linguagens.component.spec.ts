import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardBarLinguagensComponent } from './card-bar-linguagens.component';

describe('CardBarLinguagensComponent', () => {
  let component: CardBarLinguagensComponent;
  let fixture: ComponentFixture<CardBarLinguagensComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardBarLinguagensComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardBarLinguagensComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
