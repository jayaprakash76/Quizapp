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
  selector: 'app-quiz7',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz7.component.html',
  styleUrl: './quiz7.component.css'
})
export class Quiz7Component {
  questions: Question[] = [
    {
        question: "The diversity that exists among different geographies is",
        options: [
            "alpha biodiversity",
            "beta biodiversity",
            "gamma biodiversity",
            "delta biodiversity"
        ],
        answer: "gamma biodiversity"
    },
    {
        question: "Thermal stresses can lead to",
        options: [
            "chemical weathering",
            "physical weathering",
            "biological weathering",
            "none of the above"
        ],
        answer: "physical weathering"
    },
    {
        question: "Vertical arrangement of soil horizons is called",
        options: [
            "soil texture",
            "soil structure",
            "soil profile",
            "soil science"
        ],
        answer: "soil profile"
    },
    {
        question: "A climax caused by wildfires is an example of",
        options: [
            "climatic climax",
            "edaphic climax",
            "disclimax",
            "catastrophic climax"
        ],
        answer: "catastrophic climax"
    },
    {
        question: "Khadar is a type of",
        options: [
            "black cotton soil",
            "alluvial soil",
            "saline soil",
            "red and yellow soil"
        ],
        answer: "alluvial soil"
    },
    {
        question: "The term laterite soil is derived from Latin later which means",
        options: [
            "red",
            "brick",
            "fertile",
            "infertile"
        ],
        answer: "brick"
    },
    {
        question: "Which of these has the highest organic matter content?",
        options: [
            "peaty soil",
            "alluvial soil",
            "saline soil",
            "red and yellow soil"
        ],
        answer: "peaty soil"
    },
    {
        question: "\"Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such groups\" is a definition of",
        options: [
            "cells",
            "species",
            "ecosystems",
            "biomes"
        ],
        answer: "species"
    },
    {
        question: "Which of these is not a characteristic of pioneer species?",
        options: [
            "ability to grow on bare rocks",
            "ability to tolerate extreme temperatures",
            "large size",
            "short life span"
        ],
        answer: "large size"
    },
    {
        question: "Which of these depicts correctly the lithosere primary succession?",
        options: [
            "rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
            "rock --> foliose lichen --> crustose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax",
            "moss --> crustose lichen --> foliose lichen --> rock --> herbaceous stage --> shrub --> woodland --> climax",
            "rock --> crustose lichen --> foliose lichen --> shrub --> moss --> woodland --> climax"
        ],
        answer: "rock --> crustose lichen --> foliose lichen --> moss --> herbaceous stage --> shrub --> woodland --> climax"
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
