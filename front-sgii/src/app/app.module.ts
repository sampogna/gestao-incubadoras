import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { LayoutModule } from './core/layout/layout.module';
// import { SimpleInputModule } from './shared/components/simple-input/simple-input.module';
import { LoginModule } from './core/login/login.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpleInputModule } from './shared/components/simple-input/simple-input.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
    ToastrModule.forRoot(),
    SimpleInputModule,
    LoginModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
