import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ArticoliComponent } from './pages/articoli/articoli.component';
import { ErrorComponent } from './pages/error/error.component';
import { CoreModule } from "./core/core.module";
import { FormsModule } from '@angular/forms';
import { LogoutComponent } from './pages/logout/logout.component';
import { LoginComponent } from './pages/login/login.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        WelcomeComponent,
        ArticoliComponent,
        ErrorComponent,
        LogoutComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CoreModule
    ]
})
export class AppModule { }
