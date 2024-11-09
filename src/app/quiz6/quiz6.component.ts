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
  selector: 'app-quiz6',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz6.component.html',
  styleUrl: './quiz6.component.css'
})
export class Quiz6Component {

  questions: Question[] = [
    {
        question: "In Koeppen classification, which is cold arid temperature?",
        options: [
            "h",
            "k",
            "a",
            "b"
        ],
        answer: "k"
    },
    {
        question: "Which of these are broad groups of peninsular plateau of India?",
        options: [
            "the Deccan plateau",
            "the central highlands",
            "the north-eastern plateau",
            "all of these"
        ],
        answer: "all of these"
    },
    {
        question: "In Koeppen classification, which is steppe precipitation?",
        options: [
            "W",
            "S",
            "f",
            "s"
        ],
        answer: "S"
    },
    {
        question: "In Koeppen classification, which is warm summer temperature?",
        options: [
            "h",
            "k",
            "a",
            "b"
        ],
        answer: "b"
    },
    {
        question: "In Koeppen classification, which is hot summer temperature?",
        options: [
            "h",
            "k",
            "a",
            "b"
        ],
        answer: "a"
    },
    {
        question: "In Koeppen classification, which is cool summer temperature?",
        options: [
            "c",
            "d",
            "F",
            "T"
        ],
        answer: "c"
    },
    {
        question: "In Koeppen classification, which is summer dry precipitation?",
        options: [
            "W",
            "S",
            "f",
            "s"
        ],
        answer: "s"
    },
    {
        question: "In Koeppen classification, which is monsoonal precipitation?",
        options: [
            "W",
            "S",
            "m",
            "s"
        ],
        answer: "m"
    },
    {
        question: "In Koeppen classification, which is polar tundra temperature?",
        options: [
            "c",
            "d",
            "F",
            "T"
        ],
        answer: "T"
    },
    {
        question: "In Koeppen classification, which is polar climate?",
        options: [
            "A",
            "E",
            "C",
            "B"
        ],
        answer: "E"
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
