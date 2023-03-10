import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { Router } from 'express';
import { LandingPageComponent } from './landing-page/landing-page.component';

const routes: Routes = [
  { path: 'facesnaps', component: FaceSnapComponent },
  {path: '', component:LandingPageComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule{

}
