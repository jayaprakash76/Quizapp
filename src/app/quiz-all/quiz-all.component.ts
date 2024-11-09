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
  selector: 'app-quiz-all',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './quiz-all.component.html',
  styleUrl: './quiz-all.component.css'
})
export class QuizAllComponent {
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
    },
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
  },
  {
    question: "Oxford can best be categorised as",
    options: [
        "mining town",
        "garrison town",
        "educational town",
        "religious town"
    ],
    answer: "educational town"
},
{
    question: "New Delhi can be best categorised as",
    options: [
        "administrative town",
        "industrial town",
        "transport town",
        "commercial town"
    ],
    answer: "administrative town"
},
{
    question: "Vishakapatnam can best be categorised as",
    options: [
        "administrative town",
        "industrial town",
        "transport town",
        "commercial town"
    ],
    answer: "transport town"
},
{
    question: "Varanasi can best be categorised as",
    options: [
        "mining town",
        "garrison town",
        "educational town",
        "religious town"
    ],
    answer: "religious town"
},
{
    question: "Which of these is a factor governing barrier effect of roads?",
    options: [
        "traffic intensity",
        "speed of vehicles",
        "driver sensitivity",
        "all of the above"
    ],
    answer: "all of the above"
},
{
    question: "\"The ability to produce a good using fewer inputs than another producer\" is",
    options: [
        "comparative advantage",
        "absolute advantage",
        "production advantage",
        "resource advantage"
    ],
    answer: "absolute advantage"
},
{
    question: "Which of these is/are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?",
    options: [
        "bridge underpass",
        "box culverts",
        "pipe culverts",
        "all of these"
    ],
    answer: "all of these"
},
{
    question: "Bhilai can be best categorised as",
    options: [
        "administrative town",
        "industrial town",
        "transport town",
        "commercial town"
    ],
    answer: "industrial town"
},
{
    question: "Singrauli can be best categorised as",
    options: [
        "mining town",
        "garrison town",
        "educational town",
        "religious town"
    ],
    answer: "mining town"
},
{
    question: "\"The price of a good that prevails in the world market for that good\" is the definition of",
    options: [
        "export price",
        "import price",
        "world price",
        "domestic price"
    ],
    answer: "world price"
},
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
},
{
  question: "Which of these is a pillar of sustainability?",
  options: [
      "social sustainability",
      "industrial sustainability",
      "agricultural sustainability",
      "trans-boundary sustainability"
  ],
  answer: "social sustainability"
},
{
  question: "Which of these is commonly observed in primitive societies?",
  options: [
      "environmental determinism",
      "possibilism",
      "neodeterminism",
      "stop and go determinism"
  ],
  answer: "environmental determinism"
},
{
  question: "Which of these is a preventive check according to Malthus?",
  options: [
      "foresight",
      "vice",
      "misery",
      "flood"
  ],
  answer: "foresight"
},
{
  question: "Which of these is a positive check according to Malthus?",
  options: [
      "late marriage",
      "war",
      "celibacy",
      "moral restraint"
  ],
  answer: "war"
},
{
  question: "Which of these is commonly observed during humanising of nature?",
  options: [
      "environmental determinism",
      "possibilism",
      "neodeterminism",
      "stop and go determinism"
  ],
  answer: "possibilism"
},
{
  question: "The logistic growth equation curve is",
  options: [
      "I shaped",
      "J shaped",
      "S shaped",
      "U shaped"
  ],
  answer: "S shaped"
},
{
  question: "Which of these is not a pillar of sustainability?",
  options: [
      "environmental sustainability",
      "economic sustainability",
      "trans-boundary sustainability",
      "social sustainability"
  ],
  answer: "trans-boundary sustainability"
},
{
  question: "The book 'An Essay on the Principle of Population' was written by",
  options: [
      "Darwin",
      "Malthus",
      "Spencer",
      "Owens"
  ],
  answer: "Malthus"
},
{
  question: "According to the Malthusian model",
  options: [
      "population grows in geometric progression, food supply increases in arithmetic progression",
      "population grows in geometric progression, food supply increases in geometric progression",
      "population grows in arithmetic progression, food supply increases in arithmetic progression",
      "population grows in arithmetic progression, food supply increases in geometric progression"
  ],
  answer: "population grows in geometric progression, food supply increases in arithmetic progression"
},
{
  question: "The demographic transition sees a society move from",
  options: [
      "high birth rate, low death rate to low birth rate, high death rate",
      "low birth rate, high death rate to low birth rate, low death rate",
      "high birth rate, high death rate to low birth rate, low death rate",
      "high birth rate, high death rate to low birth rate, high death rate"
  ],
  answer: "high birth rate, high death rate to low birth rate, low death rate"
},
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
},
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
},
{
  question: "In Koeppen classification, which is cold arid temperature?",
  options: [
      "h",
      "k",
      "a",
      "b"
  ],
  answer: "k"
},
{
  question: "Which of these are broad groups of peninsular plateau of India?",
  options: [
      "the Deccan plateau",
      "the central highlands",
      "the north-eastern plateau",
      "all of these"
  ],
  answer: "all of these"
},
{
  question: "In Koeppen classification, which is steppe precipitation?",
  options: [
      "W",
      "S",
      "f",
      "s"
  ],
  answer: "S"
},
{
  question: "In Koeppen classification, which is warm summer temperature?",
  options: [
      "h",
      "k",
      "a",
      "b"
  ],
  answer: "b"
},
{
  question: "In Koeppen classification, which is hot summer temperature?",
  options: [
      "h",
      "k",
      "a",
      "b"
  ],
  answer: "a"
},
{
  question: "In Koeppen classification, which is cool summer temperature?",
  options: [
      "c",
      "d",
      "F",
      "T"
  ],
  answer: "c"
},
{
  question: "In Koeppen classification, which is summer dry precipitation?",
  options: [
      "W",
      "S",
      "f",
      "s"
  ],
  answer: "s"
},
{
  question: "In Koeppen classification, which is monsoonal precipitation?",
  options: [
      "W",
      "S",
      "m",
      "s"
  ],
  answer: "m"
},
{
  question: "In Koeppen classification, which is polar tundra temperature?",
  options: [
      "c",
      "d",
      "F",
      "T"
  ],
  answer: "T"
},
{
  question: "In Koeppen classification, which is polar climate?",
  options: [
      "A",
      "E",
      "C",
      "B"
  ],
  answer: "E"
},
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
},
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
},
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
},
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
