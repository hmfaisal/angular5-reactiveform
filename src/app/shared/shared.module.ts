import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from './material/material.module';
import { TranslateModule } from '@ngx-translate/core';
import { NouisliderModule } from 'ng2-nouislider';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';


@NgModule({
  imports: [
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
    NouisliderModule
  ],
  declarations: [

  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    TranslateModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
   ],
  providers: [ ]
})
export class SharedModule { }
