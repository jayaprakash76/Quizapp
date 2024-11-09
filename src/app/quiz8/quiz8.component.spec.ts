import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz8Component } from './quiz8.component';

describe('Quiz8Component', () => {
  let component: Quiz8Component;
  let fixture: ComponentFixture<Quiz8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz8Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Quiz8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
