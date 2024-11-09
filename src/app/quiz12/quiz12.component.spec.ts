import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz12Component } from './quiz12.component';

describe('Quiz12Component', () => {
  let component: Quiz12Component;
  let fixture: ComponentFixture<Quiz12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz12Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Quiz12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
