import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ApplicationsComponent} from './modules/applications/applications.component';
import {AppConfig} from './config/app.config';
import {Error404Component} from './core/error404/error-404.component';

export const AppRoutes: Routes = [
  {path: '', redirectTo: 'apply', pathMatch: 'full'},
  {
    path: 'apply', 
    loadChildren: './modules/applications/applications.module#ApplicationsModule'
  },
  {
    path: 'session',
    loadChildren: './modules/session/session.module#SessionModule',
  },

  // otherwise redirect to 404
  {path: '**', redirectTo: 'session/404'}
];
