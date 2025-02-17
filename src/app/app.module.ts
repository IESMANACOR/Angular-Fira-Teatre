import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing'
import { RouterModule, Routes } from '@angular/router';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { EspectaclesComponent } from './espectacles/espectacles.component';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { EspectacleService } from './espectacles/espectacle.service';
import { RegistreService } from './registre/registre.service';
import { ComprarService } from './comprar/comprar.service';
import { CarretService } from './carret/carret.service';
import { DetallService } from './detall-espectacle/detall-espectacle.service';
import { RegistreUsuariService } from './registre-usuari/registre-usuari.service'
import { FormulariService } from './formulari/formulari.service'


import { RegistreComponent } from './registre/registre.component';
import { HeaderComponent } from './header/header.component';
import { FormulariComponent } from './formulari/formulari.component';
import { ComprarComponent } from './comprar/comprar.component';
import { FooterComponent } from './footer/footer.component';
import { CalendariComponent } from './calendari/calendari.component';
import { NoticiesComponent } from './noticies/noticies.component';
import { IndexComponent } from './index/index.component';
import { HomeComponent } from './home/home.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { FullCalendarModule } from 'ng-fullcalendar';
import { CarretComponent } from './carret/carret.component';
import { Calendari2Component } from './calendari2/calendari2.component';
import { FaqComponent } from './faq/faq.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { DetallEspectacleComponent } from './detall-espectacle/detall-espectacle.component';
import { ResumComponent } from './resum/resum.component';
import { QuisomComponent } from './quisom/quisom.component';
import { RegistreUsuariComponent } from './registre-usuari/registre-usuari.component';

import { ComprasUsuariComponent } from './compras-usuari/compras-usuari.component';
import { EntradasComponent } from './entradas/entradas.component';

import { PerfilComponent } from './perfil/perfil.component';
import { UsuariComponent } from './usuari/usuari.component'
import { NgxQRCodeModule } from 'ngx-qrcode3';
const routes: Routes = [

];


@NgModule({
  declarations: [
    AppComponent,
    EspectaclesComponent,
    RegistreComponent,
    HeaderComponent,
    FormulariComponent,
    ComprarComponent,
    FooterComponent,
    CalendariComponent,
    NoticiesComponent,
    IndexComponent,
    HomeComponent,
    CarretComponent,
    Calendari2Component,
    FaqComponent,
    DetallEspectacleComponent,
    ResumComponent,
    QuisomComponent,
    RegistreUsuariComponent,
    ComprasUsuariComponent,
   
    EntradasComponent,
    PerfilComponent,
   
    UsuariComponent
  ],
  imports: [
    BrowserModule,
    routing,
    HttpModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgxQRCodeModule,
  // FullCalendarModule,
   ReactiveFormsModule,
   NgbModule,
   RouterModule.forRoot(routes, { useHash: true })

  ],
  providers: [DetallService,
    EspectacleService, 
    RegistreService,
    ComprarService,
    CarretService,
    RegistreUsuariService,
    FormulariService],
    
  bootstrap: [AppComponent],

})
export class AppModule { }
