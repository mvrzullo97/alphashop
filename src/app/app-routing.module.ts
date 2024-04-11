import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ArticoliComponent } from './articoli/articoli.component';
import { ErrorComponent } from './error/error.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from 'src/services/route-guard.service';

const routes: Routes = [
  {path:'', component: LoginComponent},
  {path:'login', component: LoginComponent},
  /* aggiungo controlli per verificare che l'utente sia loggato correttamente prima di accedere alla pagina in questione */
  {path: 'welcome/:userId', component: WelcomeComponent, canActivate:[RouteGuardService]},
  {path: 'articoli', component: ArticoliComponent, canActivate:[RouteGuardService]},
  {path: 'logout', component: LogoutComponent},
  
  {path:'**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
