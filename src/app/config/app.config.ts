import {InjectionToken} from '@angular/core';

import {MAppConfig} from './mapp.config';

export let APP_CONFIG = new InjectionToken('app.config');

export const AppConfig: MAppConfig = {
  routes: {
    apply: 'apply',
    error404: '404'
  },
  snackBarDuration: 2000,
  repositoryURL: 'https://github.com/hmfaisal/form'
};