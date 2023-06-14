import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { Routes, provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HomeComponent } from './app/core/pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'Capilé',
  },
];

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimations(), provideAnimations()],
}).catch((err) => console.error(err));
