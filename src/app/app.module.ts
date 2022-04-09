import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CoreModule} from "./core/core.module";
import {ReactiveFormsModule} from "@angular/forms";
import {UtilsModule} from "utils";
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    CoreModule,
    UtilsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
