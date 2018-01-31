import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// libs
import { NxModule } from '@nrwl/nx';
import { MatDialogModule } from '@angular/material';

// app
import { CoreModule } from './modules/core/core.module';
import { AppComponent } from './app.component';
import { SampleModal } from './sample-modal.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NxModule.forRoot(),
    CoreModule,
    MatDialogModule
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
