import {Component} from "@angular/core";

@Component({
  selector:"practicing",
  templateUrl:"./practicing.component.html",
  styleUrls:["./practicing.component.css"]
})
export class PracticingComponent{
  @ViewChild("f") createForm!: NgForm;
  onSubmit(){
    console.log(this.createForm.value);
  }
}
