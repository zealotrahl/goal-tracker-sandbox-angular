import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionsGroupComponent } from './actions-group.component';

describe('ActionsGroupComponent', () => {
  let component: ActionsGroupComponent;
  let fixture: ComponentFixture<ActionsGroupComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ActionsGroupComponent]
    });
    fixture = TestBed.createComponent(ActionsGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
