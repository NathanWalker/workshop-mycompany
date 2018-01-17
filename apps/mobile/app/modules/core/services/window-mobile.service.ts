import { Injectable } from '@angular/core';

// libs
import { alert as tnsAlert, confirm as tnsConfirm } from 'tns-core-modules/ui/dialogs';
import { WindowPlatformService } from '@mycompany/core';

@Injectable()
export class WindowMobileService extends WindowPlatformService {

  public alert(msg: any) {
    return tnsAlert(msg);
  }

  public confirm(msg: any) {
    return tnsConfirm(msg);
  }
}