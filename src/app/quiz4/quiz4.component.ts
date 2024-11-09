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
  selector: 'app-quiz4',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz4.component.html',
  styleUrl: './quiz4.component.css'
})
export class Quiz4Component {
  questions: Question[] = [
    {
        question: "Which of these is the densest layer?",
        options: [
            "troposphere",
            "stratosphere",
            "mesosphere",
            "thermosphere"
        ],
        answer: "troposphere"
    },
    {
        question: "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called:",
        options: [
            "adaptation",
            "mitigation",
            "deceleration",
            "maladaptation"
        ],
        answer: "mitigation"
    },
    {
        question: "Which of these is not a climatic forcing for Earth?",
        options: [
            "changes in plate tectonics",
            "changes in Earth's orbit",
            "changes in Sun's orbit",
            "changes in sun's strength"
        ],
        answer: "changes in Sun's orbit"
    },
    {
        question: "Which of these contains the most water vapour and aerosols?",
        options: [
            "troposphere",
            "stratosphere",
            "mesosphere",
            "thermosphere"
        ],
        answer: "troposphere"
    },
    {
        question: "Which of these is true about Coriolis force on the Earth?",
        options: [
            "it is maximum at pole and zero equator at Earth",
            "it is zero at poles and maximum at equator",
            "in the Northern hemisphere, it deflects winds towards left",
            "in the Southern hemisphere, it deflects winds towards right"
        ],
        answer: "it is maximum at pole and zero equator at Earth"
    },
    {
        question: "From the surface of the Earth to upwards, which of these is the correct sequence of atmospheric layers?",
        options: [
            "troposphere, stratosphere, mesosphere, thermosphere, exosphere",
            "troposphere, mesosphere, stratosphere, thermosphere, exosphere",
            "troposphere, thermosphere, mesosphere, stratosphere, exosphere",
            "troposphere, exosphere, thermosphere, mesosphere, stratosphere"
        ],
        answer: "troposphere, stratosphere, mesosphere, thermosphere, exosphere"
    },
    {
        question: "\"The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences\" is a definition of:",
        options: [
            "adaptive response",
            "adaptive capacity",
            "mitigative response",
            "mitigative capacity"
        ],
        answer: "adaptive capacity"
    },
    {
        question: "Flights of jet planes typically occur in:",
        options: [
            "troposphere",
            "stratosphere",
            "mesosphere",
            "thermosphere"
        ],
        answer: "stratosphere"
    },
    {
        question: "Noctilucent clouds are present in which layer?",
        options: [
            "troposphere",
            "stratosphere",
            "mesosphere",
            "thermosphere"
        ],
        answer: "mesosphere"
    },
    {
        question: "Lonosphere is part of which layer?",
        options: [
            "troposphere",
            "stratosphere",
            "mesosphere",
            "thermosphere"
        ],
        answer: "thermosphere"
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
