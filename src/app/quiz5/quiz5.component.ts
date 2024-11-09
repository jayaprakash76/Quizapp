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
  selector: 'app-quiz5',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz5.component.html',
  styleUrl: './quiz5.component.css'
})
export class Quiz5Component {
  questions: Question[] = [
    {
        question: "Continental slope has a gradient of:",
        options: [
            "0-1 degree",
            "1-2 degree",
            "2-5 degree",
            "5-10 degree"
        ],
        answer: "2-5 degree"
    },
    {
        question: "\"Low islands consisting of coral reefs surrounding a central depression\" is a definition of:",
        options: [
            "oceanic deep/ trench",
            "mid-oceanic ridge",
            "seamount",
            "atoll"
        ],
        answer: "atoll"
    },
    {
        question: "\"Deep valleys, often cutting across continental shelves and slopes\" is a description of:",
        options: [
            "oceanic deep/ trench",
            "mid-oceanic ridge",
            "guyot",
            "submarine canyon"
        ],
        answer: "submarine canyon"
    },
    {
        question: "Equal density curves are called:",
        options: [
            "isopycnal curves",
            "isohaline curves",
            "isotherm curves",
            "isobuoyant curves"
        ],
        answer: "isopycnal curves"
    },
    {
        question: "Equal salinity curves are called:",
        options: [
            "isopycnal curves",
            "isohaline curves",
            "isotherm curves",
            "isobuoyant curves"
        ],
        answer: "isohaline curves"
    },
    {
        question: "Which of these is a major feature of the ocean floor?",
        options: [
            "oceanic deep/ trench",
            "mid-oceanic ridge",
            "seamount",
            "atoll"
        ],
        answer: "oceanic deep/ trench"
    },
    {
        question: "Equal temperature curves are called:",
        options: [
            "isopycnal curves",
            "isohaline curves",
            "isotherm curves",
            "isobuoyant curves"
        ],
        answer: "isotherm curves"
    },
    {
        question: "Which of these is not a primary force initiating and governing movement of ocean currents?",
        options: [
            "phase separation",
            "gravity",
            "coriolis force",
            "arrangement of coasts"
        ],
        answer: "arrangement of coasts"
    },
    {
        question: "\"Relatively steep-sided, narrow, deep basins\" is a description of:",
        options: [
            "oceanic deep/ trench",
            "mid-oceanic ridge",
            "seamount",
            "atoll"
        ],
        answer: "oceanic deep/ trench"
    },
    {
        question: "Which of these is a minor feature of ocean floor?",
        options: [
            "continental shelf",
            "continental slope",
            "guyot",
            "abyssal plain"
        ],
        answer: "guyot"
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
