import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EquationComponent } from './components/equation/equation.component';
import { AnswerHighlightDirective } from './directives/answer-highlight.directive';

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    AnswerHighlightDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
