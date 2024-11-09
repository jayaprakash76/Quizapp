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
  selector: 'app-quiz9',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz9.component.html',
  styleUrl: './quiz9.component.css'
})
export class Quiz9Component {
  questions: Question[] = [
    {
        question: "Which of these is a pillar of sustainability?",
        options: [
            "social sustainability",
            "industrial sustainability",
            "agricultural sustainability",
            "trans-boundary sustainability"
        ],
        answer: "social sustainability"
    },
    {
        question: "Which of these is commonly observed in primitive societies?",
        options: [
            "environmental determinism",
            "possibilism",
            "neodeterminism",
            "stop and go determinism"
        ],
        answer: "environmental determinism"
    },
    {
        question: "Which of these is a preventive check according to Malthus?",
        options: [
            "foresight",
            "vice",
            "misery",
            "flood"
        ],
        answer: "foresight"
    },
    {
        question: "Which of these is a positive check according to Malthus?",
        options: [
            "late marriage",
            "war",
            "celibacy",
            "moral restraint"
        ],
        answer: "war"
    },
    {
        question: "Which of these is commonly observed during humanising of nature?",
        options: [
            "environmental determinism",
            "possibilism",
            "neodeterminism",
            "stop and go determinism"
        ],
        answer: "possibilism"
    },
    {
        question: "The logistic growth equation curve is",
        options: [
            "I shaped",
            "J shaped",
            "S shaped",
            "U shaped"
        ],
        answer: "S shaped"
    },
    {
        question: "Which of these is not a pillar of sustainability?",
        options: [
            "environmental sustainability",
            "economic sustainability",
            "trans-boundary sustainability",
            "social sustainability"
        ],
        answer: "trans-boundary sustainability"
    },
    {
        question: "The book 'An Essay on the Principle of Population' was written by",
        options: [
            "Darwin",
            "Malthus",
            "Spencer",
            "Owens"
        ],
        answer: "Malthus"
    },
    {
        question: "According to the Malthusian model",
        options: [
            "population grows in geometric progression, food supply increases in arithmetic progression",
            "population grows in geometric progression, food supply increases in geometric progression",
            "population grows in arithmetic progression, food supply increases in arithmetic progression",
            "population grows in arithmetic progression, food supply increases in geometric progression"
        ],
        answer: "population grows in geometric progression, food supply increases in arithmetic progression"
    },
    {
        question: "The demographic transition sees a society move from",
        options: [
            "high birth rate, low death rate to low birth rate, high death rate",
            "low birth rate, high death rate to low birth rate, low death rate",
            "high birth rate, high death rate to low birth rate, low death rate",
            "high birth rate, high death rate to low birth rate, high death rate"
        ],
        answer: "high birth rate, high death rate to low birth rate, low death rate"
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
