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
  selector: 'app-quiz2',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz2.component.html',
  styleUrl: './quiz2.component.css'
})
export class Quiz2Component {
  questions: Question[] = [
    {
        question: "Which of these is true about P waves?",
        options: [
            "these are longitudinal waves",
            "these are transverse in nature",
            "they cannot move through gases",
            "they cannot move through liquids"
        ],
        answer: "these are longitudinal waves"
    },
    {
        question: "Inclusions are older than the host rock. This is known as",
        options: [
            "principle of superposition",
            "principle of original horizontality",
            "principle of lateral continuity",
            "principle of inclusions"
        ],
        answer: "principle of inclusions"
    },
    {
        question: "Mount Fuji is an example of",
        options: [
            "shield volcano",
            "stratovolcano",
            "caldera",
            "flood basalt province"
        ],
        answer: "stratovolcano"
    },
    {
        question: "Layers of rocks deposited from above (e.g. sediments and lava flows) are originally laid down horizontally. This is known as",
        options: [
            "principle of superposition",
            "principle of original horizontality",
            "principle of lateral continuity",
            "principle of inclusions"
        ],
        answer: "principle of original horizontality"
    },
    {
        question: "Which of these is not a method of absolute dating?",
        options: [
            "radioisotope dating",
            "thermoluminescence dating",
            "inclusion study",
            "fission track dating"
        ],
        answer: "inclusion study"
    },
    {
        question: "Which of these is true about S waves?",
        options: [
            "they are longitudinal in nature",
            "they are transverse in nature",
            "they cannot move through solids, liquids and gases",
            "they are the first to reach the surface of the Earth"
        ],
        answer: "they are transverse in nature"
    },
    {
        question: "Which of these is an example of a direct source of information about Earth?",
        options: [
            "earthquake",
            "volcanic eruption",
            "magnetic survey",
            "gravity anomaly"
        ],
        answer: "volcanic eruption"
    },
    {
        question: "Assemblage of fossils are unique to the time that they lived in, and so can be used to age rocks across a wide geographic distribution. This is known as",
        options: [
            "principle of fossil succession",
            "principle of original horizontality",
            "principle of superposition",
            "principle of cross-cutting relationships"
        ],
        answer: "principle of fossil succession"
    },
    {
        question: "Within a depositional basin, strata are laterally continuous in all directions till the edge of the basin. This is known as",
        options: [
            "principle of superposition",
            "principle of original horizontality",
            "principle of lateral continuity",
            "principle of inclusions"
        ],
        answer: "principle of lateral continuity"
    },
    {
        question: "Krakatoa eruptions resulted in the formation of",
        options: [
            "shield volcano",
            "stratovolcano",
            "caldera",
            "flood basalt province"
        ],
        answer: "caldera"
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

