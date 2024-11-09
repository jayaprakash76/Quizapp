import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz9Component } from './quiz9.component';

describe('Quiz9Component', () => {
  let component: Quiz9Component;
  let fixture: ComponentFixture<Quiz9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz9Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Quiz9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
