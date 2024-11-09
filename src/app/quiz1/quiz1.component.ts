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
  selector: 'app-quiz1',
  standalone: true,
  templateUrl: './quiz1.component.html',
  styleUrls: ['./quiz1.component.css'],
  imports: [CommonModule, FormsModule]
})
export class Quiz1Component {
  questions: Question[] = [
    {
      question: "Scarcity of food is a",
      options: [
        "chemical factor",
        "demographic factor",
        "push factor",
        "pull factor"
      ],
      answer: "push factor"
    },
    {
      question: "The geographical discipline of climatology is most closely related to:",
      options: [
        "geology",
        "meteorology",
        "hydrology",
        "pedology"
      ],
      answer: "meteorology"
    },
    {
      question: "The Trinity explosion of 1945 is taken as the beginning of the",
      options: [
        "Holocene",
        "Canocene",
        "Anthropocene",
        "Eocene"
      ],
      answer: "Anthropocene"
    },
    {
      question: "In the word root for conservation, 'con' stands for",
      options: [
        "together",
        "to keep",
        "house",
        "manage"
      ],
      answer: "together"
    },
    {
      question: "In the word root for conservation, 'servare' stands for",
      options: [
        "together",
        "to keep",
        "house",
        "manage"
      ],
      answer: "to keep"
    },
    {
      question: "Good climate is a",
      options: [
        "chemical factor",
        "demographic factor",
        "push factor",
        "pull factor"
      ],
      answer: "pull factor"
    },
    {
      question: `"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor." This is the statement for`,
      options: [
        "Liebig’s law of the minimum",
        "Liebig’s law of the maximum",
        "Shelford’s law of tolerance",
        "Shelford’s law of intolerance"
      ],
      answer: "Liebig’s law of the minimum"
    },
    {
      question: "The discipline of demography is most closely related to:",
      options: [
        "Phytogeography",
        "Zoogeography",
        "population geography",
        "economic geography"
      ],
      answer: "population geography"
    },
    {
      question: `"Allowing some places and some creatures to exist without significant human interference" is the definition of:`,
      options: [
        "conservation",
        "preservation",
        "environmentalism",
        "ecology"
      ],
      answer: "preservation"
    },
    {
      question: "The movement of lions across the Gir landscape is an example of",
      options: [
        "diffusion",
        "secular dispersal",
        "jump dispersal",
        "drifting"
      ],
      answer: "diffusion"
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
