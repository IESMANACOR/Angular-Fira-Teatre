import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { FormdemobasicsComponent } from './formdemobasics/formdemobasics.component';
import { FaqComponent } from './faq/faq.component';
import { HeaderComponent } from './header/header.component';
import { EspectaclesComponent } from './espectacles/espectacles.component';


@NgModule({
  declarations: [
    AppComponent,
    FormdemobasicsComponent,
    FaqComponent,
    HeaderComponent,
    EspectaclesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AngularFontAwesomeModule,
    BrowserModule, routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
