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
import { GridArticoliComponent } from './pages/grid-articoli/grid-articoli.component';
import { ArticoliCardComponent } from './components/articoli-card/articoli-card.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        WelcomeComponent,
        ArticoliComponent,
        ErrorComponent,
        LogoutComponent,
        GridArticoliComponent,
        ArticoliCardComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        CoreModule,
        HttpClientModule
    ]
})
export class AppModule { }
