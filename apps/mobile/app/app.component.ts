import { Component, Inject } from '@angular/core';

// libs
import { PlatformLanguageToken } from '@mycompany/core';

// app
import { AppService } from './modules/core/services/app.service';

@Component({
  selector: 'ns-app',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    // ensure singleton construction on app boot)
    private _appService: AppService,
    @Inject(PlatformLanguageToken) private _lang: string,
  ) {
    console.log('platformLanguage:', this._lang);
  }
}
