import { NgModule, Optional, SkipSelf } from '@angular/core';
// libs
import {
  CoreModule as LibCoreModule,
  PlatformWindowService,
  PlatformLanguageToken,
  throwIfAlreadyLoaded
} from '@mycompany/core';

// factories
export function platformWindow() {
  return window;
}

export function platformLanguage() {
  return window.navigator.language;
}

@NgModule({
  imports: [
    LibCoreModule.forRoot([
      {
        provide: PlatformWindowService,
        useFactory: platformWindow,
      },
      {
        provide: PlatformLanguageToken,
        useFactory: platformLanguage,
      }
    ])
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
