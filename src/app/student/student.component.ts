import {Component} from "@angular/core";

@Component({
  selector:"student",
  templateUrl: "./Student.component.html"
})
export class StudentComponent{
 m1:number = 7;
 m2:number = 8;
 m3:number = 9;
 m4:number = 6;
 name:string = "Nguyen Xuan Thai"

  tbDiemthi(){
   return (this.m1+this.m2+this.m3+this.m4)/4;
  }
}
