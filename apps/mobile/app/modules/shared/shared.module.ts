import { NgModule } from '@angular/core';

// nativescript
import { NativeScriptFormsModule } from 'nativescript-angular/forms';
import { NativeScriptCommonModule } from 'nativescript-angular/common';
import { NativeScriptRouterModule } from 'nativescript-angular/router';

// libs
import { TNSFontIconModule } from 'nativescript-ngx-fonticon';

import { COMPONENTS, ENTRY_COMPONENTS } from './components';

const SHARED_MODULES = [
  NativeScriptCommonModule,
  NativeScriptFormsModule,
  NativeScriptRouterModule,
  TNSFontIconModule
];

@NgModule({
  imports: [
    ...SHARED_MODULES
  ],
  declarations: [
    ...COMPONENTS,
    ...ENTRY_COMPONENTS
  ],
  entryComponents: [
    ...ENTRY_COMPONENTS
  ],
  exports: [
    ...SHARED_MODULES,
    ...COMPONENTS
  ]
})
export class SharedModule { }
