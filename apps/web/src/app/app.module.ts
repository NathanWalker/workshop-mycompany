import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// libs
import { NxModule } from '@nrwl/nx';

// app
import { CoreModule } from './modules/core/core.module';
import { AppComponent } from './app.component';
import { SampleModal } from './sample-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    CoreModule
  ],
  declarations: [
    AppComponent,
    SampleModal
  ],
  entryComponents: [
    SampleModal
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
