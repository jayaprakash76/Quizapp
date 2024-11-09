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
  selector: 'app-quiz3',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz3.component.html',
  styleUrl: './quiz3.component.css'
})
export class Quiz3Component {
  questions: Question[] = [
    {
        question: "\"Waxy\" is an example of:",
        options: [
            "cleavage",
            "structure",
            "lustre",
            "streak"
        ],
        answer: "lustre"
    },
    {
        question: "\"Ease of passage of light through mineral\" is known as:",
        options: [
            "transparency",
            "fracture",
            "structure",
            "streak"
        ],
        answer: "transparency"
    },
    {
        question: "\"Unassorted coarse and fine debris left by melting glaciers, often with angular to sub-angular rock fragments\" is the definition of:",
        options: [
            "glacial tilt",
            "outwash deposit",
            "esker",
            "drumlin"
        ],
        answer: "glacial tilt"
    },
    {
        question: "\"Green or black-coloured inosilicates forming 10% of the Earth's crust\" is a description of:",
        options: [
            "amphiboles",
            "quartz",
            "feldspar",
            "pyroxene"
        ],
        answer: "pyroxene"
    },
    {
        question: "\"The ridge edge where two cirques meet\" is the definition of:",
        options: [
            "glacier",
            "arete",
            "horn",
            "hanging valley"
        ],
        answer: "arete"
    },
    {
        question: "Mechanical action of ocean waves is an example of:",
        options: [
            "chemical weathering",
            "physical weathering",
            "biological weathering",
            "none of the above"
        ],
        answer: "physical weathering"
    },
    {
        question: "Sudden cooling of magma results in:",
        options: [
            "smooth grained sedimentary rocks",
            "coarse grained sedimentary rocks",
            "smooth grained igneous rocks",
            "coarse grained igneous rocks"
        ],
        answer: "smooth grained igneous rocks"
    },
    {
        question: "Gypsum is an example of:",
        options: [
            "siliciclastic rock",
            "carbonate rock",
            "evaporite rock",
            "phosphatic rock"
        ],
        answer: "evaporite rock"
    },
    {
        question: "Thermal stresses lead to:",
        options: [
            "chemical weathering",
            "physical weathering",
            "biological weathering",
            "none of the above"
        ],
        answer: "physical weathering"
    },
    {
        question: "Which of these are correctly arranged as per Moh's scale from softest to hardest?",
        options: [
            "talc, apatite, fluorite, diamond",
            "talc, calcite, feldspar, diamond",
            "talc, fluorite, apatite, diamond",
            "diamond, feldspar, calcite, talc"
        ],
        answer: "talc, calcite, feldspar, diamond"
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
