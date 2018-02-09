import { Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { FormdemobasicsComponent } from './formdemobasics/formdemobasics.component';
import { FaqComponent } from './faq/faq.component';
import { EspectaclesComponent } from './espectacles/espectacles.component';


    const APP_ROUTES: Routes = [
        { path: 'formdemobasics', component: FormdemobasicsComponent},
        { path: 'faq', component: FaqComponent},
        { path: 'espectacles', component: EspectaclesComponent},
      ];
export const routing = RouterModule.forRoot(APP_ROUTES);
