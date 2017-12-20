import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChosenBookComponent } from './chosen-book.component';

describe('ChosenBookComponent', () => {
  let component: ChosenBookComponent;
  let fixture: ComponentFixture<ChosenBookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChosenBookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChosenBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
