import { NgModule } from '@angular/core';

// libs
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';
import { } from 'tns-core-modules/platform';
import {
  CoreModule as LibCoreModule,
  WindowPlatformService,
} from '@mycompany/core';

// app
import { CORE_PROVIDERS } from './services';
import { WindowMobileService } from './services/window-mobile.service';
import { ITEMS_PROVIDERS } from '../items/services';

@NgModule({
  imports: [
    LibCoreModule.forRoot([
      {
        provide: WindowPlatformService,
        useClass: WindowMobileService,
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
