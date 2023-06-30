import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { OneDrinkPromoComponent } from './app/promos/one-drink-promo/pages/one-drink-promo/one-drink-promo.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ErrorHandlerInterceptor } from './app/shared/interceptors/error-handler.interceptor';
import { ToastModule } from 'primeng/toast';

const routes: Routes = [
  {
    path: '',
    component: OneDrinkPromoComponent,
    title: 'Capilé',
  },
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideAnimations(),
    provideHttpClient(withInterceptors([ErrorHandlerInterceptor])),
    importProvidersFrom(MessageService, ToastModule),
  ],
}).catch((err) => console.error(err));
