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
  selector: 'app-quiz10',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz10.component.html',
  styleUrl: './quiz10.component.css'
})
export class Quiz10Component {
  questions: Question[] = [
    {
        question: "Which of these is the largest source of sulphur oxides in the atmosphere?",
        options: [
            "electricity generation",
            "mobile sources",
            "industrial processes",
            "residential fuel"
        ],
        answer: "electricity generation"
    },
    {
        question: "\"Those resources that are currently being used after surveying, quantification and qualification\" is a definition of",
        options: [
            "potential resources",
            "actual resources",
            "reserve resources",
            "stock resources"
        ],
        answer: "actual resources"
    },
    {
        question: "Rain gardens are primarily meant to",
        options: [
            "reduce water usage",
            "increase recharge to groundwater",
            "protect existing water sources",
            "increase water flow to streams"
        ],
        answer: "increase recharge to groundwater"
    },
    {
        question: "Oil that has not been drilled can be categorised under",
        options: [
            "potential resources",
            "actual resources",
            "reserve resources",
            "stock resources"
        ],
        answer: "potential resources"
    },
    {
        question: "Timber from forests that is being harvested can be categorised under",
        options: [
            "potential resources",
            "actual resources",
            "reserve resources",
            "stock resources"
        ],
        answer: "actual resources"
    },
    {
        question: "Which of these is the largest source of ammonia (NH3) in the atmosphere?",
        options: [
            "animal manure",
            "mineral fertilizer",
            "crops and their deposition",
            "human waste"
        ],
        answer: "animal manure"
    },
    {
        question: "\"Those resources that have been surveyed but we lack the technology to use them\" is a definition of",
        options: [
            "potential resources",
            "actual resources",
            "reserve resources",
            "stock resources"
        ],
        answer: "stock resources"
    },
    {
        question: "Hydrogen from nuclear fusion comes under the category of",
        options: [
            "potential resources",
            "actual resources",
            "reserve resources",
            "stock resources"
        ],
        answer: "stock resources"
    },
    {
        question: "\"Those resources that may be used in the future\" is a definition of",
        options: [
            "potential resources",
            "actual resources",
            "reserve resources",
            "stock resources"
        ],
        answer: "potential resources"
    },
    {
        question: "\"The part of actual resources that can be developed profitably in the future\" is a definition of",
        options: [
            "potential resources",
            "actual resources",
            "reserve resources",
            "stock resources"
        ],
        answer: "reserve resources"
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
