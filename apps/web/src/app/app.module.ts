import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// libs
import { NxModule } from '@nrwl/nx';

// app
import { CoreModule } from './modules/core/core.module';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    NxModule.forRoot(),
    CoreModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
