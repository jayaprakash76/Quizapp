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
  selector: 'app-quiz12',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz12.component.html',
  styleUrl: './quiz12.component.css'
})
export class Quiz12Component {
  questions: Question[] = [
    {
        question: "\"The conditions determined by physical, social, economic and environmental factors or processes which increase the susceptibility of an individual, a community, assets or systems to the impacts of hazards\" is a definition for",
        options: [
            "hazard",
            "exposure",
            "vulnerability",
            "disaster"
        ],
        answer: "vulnerability"
    },
    {
        question: "\"The combination of all the strengths, attributes and resources available within an organisation, community or society to manage and reduce disaster risks and strengthen resilience\" is a definition for",
        options: [
            "contingency",
            "disaster management",
            "vulnerability",
            "capacity"
        ],
        answer: "capacity"
    },
    {
        question: "The value derived from the knowledge of use of resources by others in the current generation is called",
        options: [
            "altruistic value",
            "bequest value",
            "existence value",
            "option value"
        ],
        answer: "altruistic value"
    },
    {
        question: "IMU stands for",
        options: [
            "imperial metering unit",
            "inertial metering unit",
            "imperial measurement unit",
            "inertial measurement unit"
        ],
        answer: "inertial measurement unit"
    },
    {
        question: "The frequency of flyovers is an indicator of",
        options: [
            "spatial resolution",
            "temporal resolution",
            "spectral resolution",
            "radiometric resolution"
        ],
        answer: "temporal resolution"
    },
    {
        question: "\"The situation of people, infrastructure, housing, production capacities and other tangible human assets located in hazard-prone areas\" is a definition for",
        options: [
            "hazard",
            "exposure",
            "vulnerability",
            "disaster"
        ],
        answer: "exposure"
    },
    {
        question: "\"A process, phenomenon or human activity that may cause loss of life, injury or other health impacts, property damage, social and economic disruption or environmental degradation\" is a definition for",
        options: [
            "hazard",
            "exposure",
            "vulnerability",
            "disaster"
        ],
        answer: "hazard"
    },
    {
        question: "Which of these uses imputed willingness to pay?",
        options: [
            "market price method",
            "replacement cost method",
            "travel cost method",
            "contingent valuation method"
        ],
        answer: "replacement cost method"
    },
    {
        question: "The time of flight of LiDAR is 0.00001 sec. Find the distance of the object from the instrument",
        options: [
            "500m",
            "1000m",
            "1500m",
            "2000m"
        ],
        answer: "1500m"
    },
    {
        question: "\"A serious disruption of the functioning of a community or a society at any scale due to hazardous events interacting with conditions of exposure, vulnerability and capacity, leading to one or more of the following: human, material, economic and environmental losses and impacts\" is a definition for",
        options: [
            "hazard",
            "exposure",
            "vulnerability",
            "disaster"
        ],
        answer: "disaster"
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
