// import { QuizComponent } from "./quiz.component";

// interface Question {
//     question: string;
//     options: string[];
//     answer: string;
//   }
  
//   type QuizData = {
//     [key: string]: Question[]; // This allows any string as a key
//   };


// const quizData: QuizData= {
//     week1: [
//       {
//         question: "Tropical moist forests do not include",
//         options: [
//           "broadleaved forests",
//           "wet evergreen forests",
//           "semi-evergreen forests",
//           "moist deciduous forests",
//         ],
//         answer: "broadleaved forests",
//       },
//       {
//         question: "Which of these is not a use value?",
//         options: [
//           "direct value",
//           "indirect value",
//           "option value",
//           "existence value",
//         ],
//         answer: "existence value",
//       },
//       {
//         question: "The value derived from the knowledge of use of resources by others in the current generation is called",
//         options: [
//           "altruistic value",
//           "bequest value",
//           "existence value",
//           "option value",
//         ],
//         answer: "altruistic value",
//       },
//       {
//         question: "Montane sub-tropical forests do not include",
//         options: [
//           "broadleaved forests",
//           "pine forests",
//           "semi-evergreen forests",
//           "dry evergreen forests",
//         ],
//         answer: "semi-evergreen forests",
//       },
//       {
//         question: '“Plant community, predominantly comprised of trees and other woody vegetation, usually with a closed canopy" is',
//         options: [
//           "silvicultural definition of forests",
//           "FAO definition of forests",
//           "legal definition of forests",
//           "ecological definition of forests",
//         ],
//         answer: "ecological definition of forests",
//       },
//       {
//         question: "Which of these is not a consumptive value?",
//         options: [
//           "timber",
//           "firewood",
//           "non-timber forest products",
//           "education",
//         ],
//         answer: "education",
//       },
//       {
//         question: "The term 'forest' originates from",
//         options: [
//           "Latin foris meaning outside",
//           "Greek foris meaning outside",
//           "Latin foris meaning trees",
//           "Greek foris meaning trees",
//         ],
//         answer: "Latin foris meaning outside",
//       },
//       {
//         question: "The value of leaving use and non-use values for offspring's or future generations is called",
//         options: [
//           "altruistic value",
//           "bequest value",
//           "existence value",
//           "option value",
//         ],
//         answer: "bequest value",
//       },
//       {
//         question: "Which of these is not a forest type found in India?",
//         options: [
//           "Mediterranean dry",
//           "Tropical dry",
//           "Montane temperate",
//           "Alpine",
//         ],
//         answer: "Mediterranean dry",
//       },
//       {
//         question: "According to the Supreme Court, the term forest land includes",
//         options: [
//           "some area recorded as forest in the Government record according to ownership",
//           "any area recorded as forest in the Government record according to ownership",
//           "some area recorded as forest in the Government record irrespective of ownership",
//           "any area recorded as forest in the Government record irrespective of ownership",
//         ],
//         answer: "any area recorded as forest in the Government record irrespective of ownership",
//       },
//     ],
//     week2: [
//       {
//         question: "In the context of plant nutrition, boron is",
//         options: [
//           "macronutrient",
//           "micronutrient",
//           "primary nutrient",
//           "secondary nutrient",
//         ],
//         answer: "micronutrient",
//       },
//       {
//         question: "The art and science of cultivating forest crops is called",
//         options: [
//           "foresticulture",
//           "monoculture",
//           "silviculture",
//           "silvics",
//         ],
//         answer: "silviculture",
//       },
//       {
//         question: "The climax near Tindni village is being controlled by disturbance by cattle. This is an example of",
//         options: [
//           "climatic climax",
//           "edaphic climax",
//           "disclimax",
//           "catastrophic climax",
//         ],
//         answer: "disclimax",
//       },
//       {
//         question: "Which of these is not a characteristic of pioneer species?",
//         options: [
//           "ability to grow on bare rocks",
//           "ability to tolerate extreme temperatures",
//           "large size",
//           "short life span",
//         ],
//         answer: "large size",
//       },
//       {
//         question: "Which of these depicts correctly the lithosere primary succession?",
//         options: [
//           "Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
//           "Rock → Foliose lichen → Crustose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
//           "Moss → Crustose lichen → Foliose lichen → Rock → Herbaceous stage → Shrub → Woodland → Climax",
//           "Rock → Crustose lichen → Foliose lichen → Shrub → Herbaceous stage → Moss → Woodland → Climax",
//         ],
//         answer: "Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
//       },
//       {
//         question: "The study of life history / general features of forest crops with respect to environmental factors is called",
//         options: [
//           "foresticulture",
//           "monoculture",
//           "silviculture",
//           "silvics",
//         ],
//         answer: "silvics",
//       },
//       {
//         question: "Net primary productivity is given by",
//         options: [
//           "APAR + LUE",
//           "APAR X LUE",
//           "APAR - LUE",
//           "APAR ÷ LUE",
//         ],
//         answer: "APAR X LUE",
//       },
//       {
//         question: "A climax caused by wildfires is an example of",
//         options: [
//           "climatic climax",
//           "edaphic climax",
//           "disclimax",
//           "catastrophic climax",
//         ],
//         answer: "catastrophic climax",
//       },
//       {
//         question: "Practical application of scientific, technical and economic principles of forestry comes under which branch of forestry?",
//         options: [
//           "forest management",
//           "forest economics",
//           "forest mensuration",
//           "forest protection",
//         ],
//         answer: "forest management",
//       },
//       {
//         question: "Which of these is abiotic factor?",
//         options: [
//           "vines",
//           "trees",
//           "reptiles",
//           "water",
//         ],
//         answer: "water",
//       },
//     ],
//     // week3: [
//     //   {
//     //     question: "Regur is a term for",
//     //     options: [
//     //       // Add the options and answer for week 3 here
//     //     ],
//     //     answer: "your answer here", // Update this as needed
//     //   },
//     //   // Continue to add more questions for week 3
//     // ],
//   };
  
//   export default quizData;
  