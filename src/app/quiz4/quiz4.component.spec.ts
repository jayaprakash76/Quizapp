import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Quiz4Component } from './quiz4.component';

describe('Quiz4Component', () => {
  let component: Quiz4Component;
  let fixture: ComponentFixture<Quiz4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Quiz4Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Quiz4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
