import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Question {
  question: string;
  options: string[];
  selectedOption?: string;
  answer: string;
}
@Component({
  selector: 'app-quiz11',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz11.component.html',
  styleUrl: './quiz11.component.css'
})
export class Quiz11Component {
  questions: Question[] = [
    {
        question: "Oxford can best be categorised as",
        options: [
            "mining town",
            "garrison town",
            "educational town",
            "religious town"
        ],
        answer: "educational town"
    },
    {
        question: "New Delhi can be best categorised as",
        options: [
            "administrative town",
            "industrial town",
            "transport town",
            "commercial town"
        ],
        answer: "administrative town"
    },
    {
        question: "Vishakapatnam can best be categorised as",
        options: [
            "administrative town",
            "industrial town",
            "transport town",
            "commercial town"
        ],
        answer: "transport town"
    },
    {
        question: "Varanasi can best be categorised as",
        options: [
            "mining town",
            "garrison town",
            "educational town",
            "religious town"
        ],
        answer: "religious town"
    },
    {
        question: "Which of these is a factor governing barrier effect of roads?",
        options: [
            "traffic intensity",
            "speed of vehicles",
            "driver sensitivity",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        question: "\"The ability to produce a good using fewer inputs than another producer\" is",
        options: [
            "comparative advantage",
            "absolute advantage",
            "production advantage",
            "resource advantage"
        ],
        answer: "absolute advantage"
    },
    {
        question: "Which of these is/are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?",
        options: [
            "bridge underpass",
            "box culverts",
            "pipe culverts",
            "all of these"
        ],
        answer: "all of these"
    },
    {
        question: "Bhilai can be best categorised as",
        options: [
            "administrative town",
            "industrial town",
            "transport town",
            "commercial town"
        ],
        answer: "industrial town"
    },
    {
        question: "Singrauli can be best categorised as",
        options: [
            "mining town",
            "garrison town",
            "educational town",
            "religious town"
        ],
        answer: "mining town"
    },
    {
        question: "\"The price of a good that prevails in the world market for that good\" is the definition of",
        options: [
            "export price",
            "import price",
            "world price",
            "domestic price"
        ],
        answer: "world price"
    }
];


  isSubmitted = false;
  score = 0;

  calculateScore() {
    this.score = 0;
    for (let question of this.questions) {
      if (question.selectedOption === question.answer) {
        this.score++;
      }
    }
    this.isSubmitted = true;
  }
}
