import {Routes,RouterModule} from '@angular/router'
import {EspectaclesComponent} from './espectacles/espectacles.component'
import {RegistreComponent} from './registre/registre.component'
import { FormulariComponent } from './formulari/formulari.component';
import { ComprarComponent } from './comprar/comprar.component';
import { HomeComponent } from './home/home.component';
import { CarretComponent } from './carret/carret.component';
import { Calendari2Component } from './calendari2/calendari2.component';
import { FaqComponent } from './faq/faq.component';

const APP_ROUTES: Routes=[
{path:'espectacles',component:EspectaclesComponent},
{path:'registre',component:RegistreComponent},
{path:'formulari',component:FormulariComponent},
{path:'comprar',component:ComprarComponent},
{path:'inici',component:HomeComponent},
{path:'carret',component:CarretComponent},
{path:'calendari',component:Calendari2Component},
{path:'formulari/faq',component:FaqComponent},
{ path: '', component: HomeComponent }
];
export const routing=RouterModule.forRoot(APP_ROUTES);