import {Component, ViewChild} from "@angular/core";
import {NgForm} from "@angular/forms";

@Component({
  selector:'addpacticing',
  templateUrl:'./add.component.html'
})


export class AddComponent{
  @ViewChild("f") addForm!: NgForm;
  onSubmit(){
    console.log(this.addForm.value);
  }
}
