import { NgModule, Optional, SkipSelf } from '@angular/core';
// libs
import {
  CoreModule as LibCoreModule,
  WindowPlatformService,
  throwIfAlreadyLoaded
} from '@mycompany/core';

// factories
export function platformWindow() {
  return window;
}

@NgModule({
  imports: [
    LibCoreModule.forRoot([
      {
        provide: WindowPlatformService,
        useFactory: platformWindow,
      }
    ])
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
