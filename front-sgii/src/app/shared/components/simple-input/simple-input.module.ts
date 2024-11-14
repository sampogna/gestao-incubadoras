import { NgModule } from "@angular/core";
import { SimpleInputComponent } from "./simple-input.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from "ngx-mask";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({

    imports: [
      CommonModule, 
      FormsModule, 
      ReactiveFormsModule, 
      NgxMaskDirective, 
      NgxMaskPipe,
      ReactiveFormsModule
    ],
    declarations: [SimpleInputComponent],
    exports: [SimpleInputComponent],
    providers: [provideNgxMask()]
  })
  export class SimpleInputModule { }