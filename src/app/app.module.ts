import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { VioletComponent } from "./violet/violet.component";
import { MoveElementDirective } from './move-element.directive';

@NgModule({
  declarations: [AppComponent, VioletComponent, MoveElementDirective],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
