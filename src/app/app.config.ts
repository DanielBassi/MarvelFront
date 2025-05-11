import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { DataExtractorInterceptor } from './core/interceptors/data-extractor.interceptor';
import { JwtInterceptor } from './core/interceptors/jwtInterceptor';
import { LoadingInterceptor } from './core/interceptors/loading.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),
    provideHttpClient(),
    provideHttpClient(withInterceptors([DataExtractorInterceptor, JwtInterceptor, LoadingInterceptor])),
  ]
};
