import { ApplicationConfig, NgModule } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { FormsModule, NgForm } from '@angular/forms';


export const appConfig: ApplicationConfig = {
   
  providers: [provideRouter(routes), provideClientHydration(), provideHttpClient(), FormsModule , NgForm],
 
 
};
