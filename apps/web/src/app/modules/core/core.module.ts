import { NgModule, Optional, SkipSelf } from '@angular/core';
// libs
import {
  CoreModule as LibCoreModule,
  PlatformModal,
  PlatformWindowService,
  PlatformLanguageToken,
  throwIfAlreadyLoaded
} from '@mycompany/core';
import { MatDialog } from '@angular/material';

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
      },
      {
        provide: PlatformModal,
        useClass: MatDialog
      }
    ])
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
