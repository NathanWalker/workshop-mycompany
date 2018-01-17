import { NgModule } from '@angular/core';

// libs
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { device } from 'tns-core-modules/platform';
import {
  CoreModule as LibCoreModule,
  PlatformWindowService,
  PlatformLanguageToken,
} from '@mycompany/core';

// app
import { CORE_PROVIDERS } from './services';
import { WindowMobileService } from './services/window-mobile.service';
import { ITEMS_PROVIDERS } from '../items/services';

// factories
export function platformLanguage() {
  return device.language;
}

@NgModule({
  imports: [
    LibCoreModule.forRoot([
      {
        provide: PlatformWindowService,
        useClass: WindowMobileService,
      },
      {
        provide: PlatformLanguageToken,
        useFactory: platformLanguage,
      },
    ]),
    TNSFontIconModule.forRoot({
      fa: './assets/font-awesome.min.css'
    })
  ],
  providers: [
    ...CORE_PROVIDERS,
    ...ITEMS_PROVIDERS
  ]
})
export class CoreModule { }
