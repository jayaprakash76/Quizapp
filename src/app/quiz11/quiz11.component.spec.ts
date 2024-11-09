import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz11Component } from './quiz11.component';

describe('Quiz11Component', () => {
  let component: Quiz11Component;
  let fixture: ComponentFixture<Quiz11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz11Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Quiz11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
