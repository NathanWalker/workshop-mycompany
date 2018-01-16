import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

// app
import { throwIfAlreadyLoaded } from './helpers';
import { PROVIDERS } from './services';

export const BASE_PROVIDERS: any[] = [
  ...PROVIDERS,
];

@NgModule({
  imports: [CommonModule],
})
export class CoreModule {
  static forRoot(configuredProviders: Array<any>): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        ...BASE_PROVIDERS,
        ...configuredProviders
      ],
    };
  }

  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    throwIfAlreadyLoaded(parentModule, 'CoreModule');
  }
}
