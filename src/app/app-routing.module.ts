import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ArticoliComponent } from './pages/articoli/articoli.component';
import { ErrorComponent } from './pages/error/error.component';
import { LogoutComponent } from './pages/logout/logout.component';
import { RouteGuardService } from 'src/app/services/route-guard.service';
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';
import { RegistrazioneComponent } from './pages/registrazione/registrazione.component';
import { GestartComponent } from './pages/gestart/gestart.component';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  {path:'signup', component: RegistrazioneComponent},
  /* aggiungo RouteGuardService per verificare che l'utente sia loggato correttamente prima di accedere alla pagina in questione */
  {path: 'welcome/:userId', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'articoli', component: ArticoliComponent, canActivate:[RouteGuardService]},
  {path: 'articoli/grid', component: GridArticoliComponent, canActivate:[RouteGuardService]},
  {path:'gestart/:codart', component: GestartComponent,canActivate:[RouteGuardService]},
  {path:'gestart', component: GestartComponent,canActivate:[RouteGuardService]},
  {path: 'logout', component: LogoutComponent},
  
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
