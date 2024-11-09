import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuizAllComponent } from './quiz-all.component';

describe('QuizAllComponent', () => {
  let component: QuizAllComponent;
  let fixture: ComponentFixture<QuizAllComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuizAllComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(QuizAllComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
