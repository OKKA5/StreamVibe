import { loadingInterceptorInterceptor } from './../Interceptors/loading-interceptor.interceptor';
import {
  ApplicationConfig,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { NgxSpinnerModule } from 'ngx-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(
      routes,
      withInMemoryScrolling({ scrollPositionRestoration: 'top' }),

    ),
    provideClientHydration(),
    provideHttpClient(withInterceptors([loadingInterceptorInterceptor])),
    importProvidersFrom(NgxSpinnerModule,BrowserAnimationsModule),
  ],
};
