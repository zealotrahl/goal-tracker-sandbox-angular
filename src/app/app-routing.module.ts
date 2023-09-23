import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { appRoutes } from 'src/routing/routes';

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
