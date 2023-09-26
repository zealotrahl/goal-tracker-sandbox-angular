import { Routes } from "@angular/router";
import { PageNotFoundComponent } from "src/app/components/page-not-found/page-not-found.component";
import { HomeComponent } from "src/app/home/home.component";

export const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => {
      return import('../app/home/home.module').then(
        (module) => module.HomeModule,
      )
    },
  },
  {
    path: 'profile',
    loadChildren: () => {
      return import('../app/profile/profile.module').then(
        (module) => module.ProfileModule,
      )
    },
  },
  {
    path: 'signin',
    loadChildren: () => {
      return import('../app/signin/signin.module').then(
        (module) => module.SigninModule,
      )
    },
  },
  {
    path: 'signup',
    loadChildren: () => {
      return import('../app/signup/signup.module').then(
        (module) => module.SignupModule,
      )
    },
  },
  { path: '**', component: PageNotFoundComponent },
];