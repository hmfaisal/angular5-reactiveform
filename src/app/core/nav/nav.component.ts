import {Component, Inject} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { APP_CONFIG, AppConfig } from '../../config/app.config';
import { MAppConfig } from '../../config/mapp.config';
import { MenuItems } from '../menu-items/menu-items';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

export class NavComponent {
  appConfig: any;

  constructor(
    @Inject(APP_CONFIG) appConfig: MAppConfig,
    public translate: TranslateService,
  ) {
    this.appConfig = appConfig;
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|de/) ? browserLang : 'en');
  }

  changeLanguage(language: string): void {
    this.translate.use(language);
  }

}