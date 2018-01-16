import { NgModule, Optional, SkipSelf } from '@angular/core';
// libs
import {
  CoreModule as LibCoreModule,
  WindowPlatformService
} from '@mycompany/core';
// app
import { environment } from '../../environments/environment';

// factories
export function platformWindow() {
  return window;
}

@NgModule({
  imports: [
    CoreModule.forRoot([
      {
        provide: WindowPlatformService,
        useFactory: win,
      }
    ])
  ]
})
export class CoreModule {
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
