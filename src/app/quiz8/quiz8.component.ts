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
  selector: 'app-quiz8',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz8.component.html',
  styleUrl: './quiz8.component.css'
})
export class Quiz8Component {

  questions: Question[] = [
    {
        question: "Soil formation is an example of",
        options: [
            "provisioning service",
            "regulating service",
            "supporting service",
            "cultural service"
        ],
        answer: "supporting service"
    },
    {
        question: "The acronym HIPPO does not include",
        options: [
            "habitat loss",
            "habitat enhancement",
            "invasive species",
            "human over-population"
        ],
        answer: "habitat enhancement"
    },
    {
        question: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as",
        options: [
            "umbrella species",
            "keystone species",
            "flagship species",
            "all of the above"
        ],
        answer: "all of the above"
    },
    {
        question: "Religious benefits are an example of",
        options: [
            "provisioning service",
            "regulating service",
            "supporting service",
            "cultural service"
        ],
        answer: "cultural service"
    },
    {
        question: "Which of these is a deterministic factor?",
        options: [
            "environmental variation",
            "forest fire",
            "death rate",
            "diseases"
        ],
        answer: "death rate"
    },
    {
        question: "Biological control of pest populations is an example of",
        options: [
            "provisioning service",
            "regulating service",
            "supporting service",
            "cultural service"
        ],
        answer: "regulating service"
    },
    {
        question: "According to Leopold, which of these is not a tool of habitat management?",
        options: [
            "fire",
            "gun",
            "cattle",
            "sickle"
        ],
        answer: "sickle"
    },
    {
        question: "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
        options: [
            "umbrella species",
            "keystone species",
            "flagship species",
            "extinct species"
        ],
        answer: "flagship species"
    },
    {
        question: "Captive breeding is an example of",
        options: [
            "in-situ conservation",
            "ex-situ conservation",
            "in-situ preservation",
            "ex-situ preservation"
        ],
        answer: "ex-situ conservation"
    },
    {
        question: "\"Subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce\" is the definition of",
        options: [
            "habitat",
            "ecosystem",
            "biome",
            "biosphere"
        ],
        answer: "habitat"
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
