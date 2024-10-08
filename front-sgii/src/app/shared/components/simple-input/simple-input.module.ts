import { NgModule } from "@angular/core";
import { SimpleInputComponent } from "./simple-input.component";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations: [SimpleInputComponent],
    imports: [FormsModule],
    exports: [SimpleInputComponent]
  })
  export class SimpleInputModule { }