import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FindGoalerComponent } from './find-goaler.component';

describe('FindGoalerComponent', () => {
  let component: FindGoalerComponent;
  let fixture: ComponentFixture<FindGoalerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FindGoalerComponent]
    });
    fixture = TestBed.createComponent(FindGoalerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
