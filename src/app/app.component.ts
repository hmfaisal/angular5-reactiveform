import { Component, Inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, AppConfig } from './config/app.config';
import { MAppConfig } from './config/mapp.config';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  appConfig: any;

  constructor(
    @Inject(APP_CONFIG) appConfig: MAppConfig,
    private translate: TranslateService,
  ) {
    this.appConfig = appConfig;
    this.translate = translate;
    translate.addLangs(['en', 'de']);
    translate.setDefaultLang('en');
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
  }
}
