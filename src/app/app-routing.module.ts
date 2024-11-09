import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { MainComponent } from "./main/main.component";
import { QuizComponent } from "./quiz/quiz.component";
import { ChoiceComponent } from "./choice/choice.component";
import { Quiz1Component } from "./quiz1/quiz1.component";
import { Quiz2Component } from "./quiz2/quiz2.component";
import { Quiz3Component } from "./quiz3/quiz3.component";
import { Quiz4Component } from "./quiz4/quiz4.component";
import { Quiz5Component } from "./quiz5/quiz5.component";
import { Quiz6Component } from "./quiz6/quiz6.component";
import { Quiz7Component } from "./quiz7/quiz7.component";
import { Quiz8Component } from "./quiz8/quiz8.component";
import { Quiz9Component } from "./quiz9/quiz9.component";
import { Quiz10Component } from "./quiz10/quiz10.component";
import { Quiz11Component } from "./quiz11/quiz11.component";
import { Quiz12Component } from "./quiz12/quiz12.component";
import { QuizAllComponent } from "./quiz-all/quiz-all.component";

const routes: Routes = [
    {path: '', redirectTo: 'main', pathMatch: 'full'},
    {path: 'main', component: MainComponent},
    {path:'choice' , component:ChoiceComponent},
    // {path:'quiz/:week',component:QuizComponent},
    {path:'quiz1',component:Quiz1Component},
    {path:'quiz2',component:Quiz2Component},
    {path:'quiz3',component:Quiz3Component},
    {path:'quiz4',component:Quiz4Component},
    {path:'quiz5',component:Quiz5Component},
    {path:'quiz6',component:Quiz6Component},
    {path:'quiz7',component:Quiz7Component},
    {path:'quiz8',component:Quiz8Component},
    {path:'quiz9',component:Quiz9Component},
    {path:'quiz10',component:Quiz10Component},
    {path:'quiz11',component:Quiz11Component},
    {path:'quiz12',component:Quiz12Component},
    {path:'quizAll',component:QuizAllComponent},
    { path: '**', redirectTo: '' }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }