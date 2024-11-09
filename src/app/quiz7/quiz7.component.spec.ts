import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz7Component } from './quiz7.component';

describe('Quiz7Component', () => {
  let component: Quiz7Component;
  let fixture: ComponentFixture<Quiz7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz7Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Quiz7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
