import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimations } from '@angular/platform-browser/animations'; 
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule, provideHttpClient, withInterceptors } from '@angular/common/http';
import { AuthInterceptor } from '../core/auth';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(appRoutes), 
    provideClientHydration(withEventReplay()),
    provideAnimations(),
    importProvidersFrom(HttpClientModule),
     provideHttpClient(
      withInterceptors([
        (req, next) => {
          const interceptor = new AuthInterceptor();
          // Wrap 'next' (HttpHandlerFn) to match HttpHandler interface
          const handler = { handle: next };
          return interceptor.intercept(req, handler);
        }
      ])
    ),
  ]
};
