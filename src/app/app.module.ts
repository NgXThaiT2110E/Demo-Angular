import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {DemoComponent} from "./demo/demo.component";
import {StudentComponent} from "./student/student.component";
import {ClassroomComponent} from "./classroom/classroom.component";
import {Assignment1Componen} from "./assignment1/assignment1.componen";
import {PracticingComponent} from "./practicing test/practicing.component";

@NgModule({
  declarations: [
    AppComponent,
    DemoComponent,ClassroomComponent,StudentComponent,Assignment1Componen,PracticingComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
