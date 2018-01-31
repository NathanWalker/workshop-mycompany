import { AppService } from './app.service';
import { TNSModalService } from './tns-modal.service';
import { WindowMobileService } from './window-mobile.service';

export const CORE_PROVIDERS = [
  AppService,
  TNSModalService,
  WindowMobileService
];
