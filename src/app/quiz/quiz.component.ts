import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.css']
})
export class QuizComponent implements OnInit {
  week: string | null = null;
  userAnswers: string[] = [];
  score: number = 0;
  submitted: boolean = false;

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.week = this.route.snapshot.paramMap.get('week');
    this.initializeUserAnswers();
  }

  initializeUserAnswers(): void {
    const questionCounts: { [key: string]: number } = {
      week1: 2, // Adjust this based on the number of questions for week 1
      week2: 2  // Adjust this based on the number of questions for week 2
    };
    
    const count = questionCounts[this.week!] || 0;
    this.userAnswers = new Array(count).fill('');
  }

  onSelect(event: Event, index: number): void {
    const target = event.target as HTMLInputElement; // Cast to HTMLInputElement
    this.userAnswers[index] = target.value; // Store the user's answer
  }

  onSubmit(): void {
    const correctAnswers: { [key: string]: string[] } = {
      week1: [
        'broadleaved forests', // Q1
        'existence value'      // Q2
      ],
      week2: [
        'micronutrient',       // Q1
        'silviculture'         // Q2
      ]
    };

    this.score = this.userAnswers.reduce((total, answer, index) => {
      const weekCorrectAnswers = correctAnswers[this.week!] || [];
      return total + (answer === weekCorrectAnswers[index] ? 1 : 0);
    }, 0);

    this.submitted = true; // Set submitted to true to display the score
  }
}
