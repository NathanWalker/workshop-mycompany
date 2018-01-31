import { ModalService } from './modal.service';
import { WindowService } from './window.service';


export const PROVIDERS = [
    ModalService,
    WindowService
];

export * from './modal.service';
export * from './window.service';