import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choice',
  standalone: true,
  imports: [],
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.css']
})
export class ChoiceComponent {
  constructor(private router: Router) {}

  navigateToChoice() {
    this.router.navigate(['/quiz1']);
  }

  navigateToQuiz2() {
    this.router.navigate(['/quiz2']);
  }

  navigateToQuiz3() {
    this.router.navigate(['/quiz3']);
  }

  navigateToQuiz4() {
    this.router.navigate(['/quiz4']);
  }

  navigateToQuiz5() {
    this.router.navigate(['/quiz5']);
  }

  navigateToQuiz6() {
    this.router.navigate(['/quiz6']);
  }

  navigateToQuiz7() {
    this.router.navigate(['/quiz7']);
  }

  navigateToQuiz8() {
    this.router.navigate(['/quiz8']);
  }

  navigateToQuiz9() {
    this.router.navigate(['/quiz9']);
  }

  navigateToQuiz10() {
    this.router.navigate(['/quiz10']);
  }

  navigateToQuiz11() {
    this.router.navigate(['/quiz11']);
  }

  navigateToQuiz12() {
    this.router.navigate(['/quiz12']);
  }
  navigateToQuizAll(){
    this.router.navigate(['/quizAll']);
  }
}
