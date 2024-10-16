import { NgModule } from "@angular/core";
import { SimpleInputComponent } from "./simple-input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
    
    imports: [CommonModule, FormsModule, ReactiveFormsModule ],
    exports: [SimpleInputComponent],
    declarations: [SimpleInputComponent],
  })
  export class SimpleInputModule { }