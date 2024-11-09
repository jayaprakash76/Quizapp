import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MainComponent } from './main/main.component';
import { AppComponent } from './app.component';
import { ChoiceComponent } from './choice/choice.component';
import { QuizComponent } from './quiz/quiz.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule ,Routes} from '@angular/router';
import { Quiz1Component } from './quiz1/quiz1.component';
import { Quiz2Component } from './quiz2/quiz2.component';
import { Quiz3Component } from './quiz3/quiz3.component';
import { Quiz4Component } from './quiz4/quiz4.component';
import { Quiz5Component } from './quiz5/quiz5.component';
import { Quiz6Component } from './quiz6/quiz6.component';
import { Quiz7Component } from './quiz7/quiz7.component';
import { Quiz8Component } from './quiz8/quiz8.component';
import { Quiz9Component } from './quiz9/quiz9.component';
import { Quiz10Component } from './quiz10/quiz10.component';
import { Quiz11Component } from './quiz11/quiz11.component';
import { Quiz12Component } from './quiz12/quiz12.component';
import { QuizAllComponent } from './quiz-all/quiz-all.component';
// import { QuizService } from './quiz/quiz.service';
// import { appConfig } from './app.config';

const AppRoutes: Routes = [
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
    { path: '**', redirectTo: '' }  // Redirect unknown paths to the main component
];

@NgModule({
    declarations:[
        AppComponent,
        MainComponent,
        ChoiceComponent,
        QuizComponent,
        Quiz10Component,
        Quiz1Component,
        Quiz2Component,
        Quiz3Component,
        Quiz4Component,
        Quiz5Component,
        Quiz6Component,
        Quiz7Component,
        Quiz8Component,
        Quiz9Component,
        Quiz11Component,
        Quiz12Component,
        QuizAllComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpClientModule,
        RouterModule.forRoot(AppRoutes),
        
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }