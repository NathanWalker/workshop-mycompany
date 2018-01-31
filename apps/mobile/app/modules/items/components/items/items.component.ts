import { Component, OnInit, ViewContainerRef } from '@angular/core';

// libs
import { WindowService, ModalService } from '@mycompany/core';
// app
import { Item } from '../../models';
import { ItemService } from '../../services/item.service';
import { SampleModal } from '../../../shared/components/sample-modal.component';

@Component({
  selector: 'ns-items',
  moduleId: module.id,
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(
    private _itemService: ItemService,
    private _modal: ModalService,
    private _win: WindowService,
    private _vcRef: ViewContainerRef
  ) { }

  ngOnInit(): void {
    this.items = this._itemService.getItems();
  }

  public openModal() {
    this._modal.open({
      cmpType: SampleModal,
      modalOptions: {
        viewContainerRef: this._vcRef,
        context: {
          title: 'ngAtl!'
        }
      }
    });
  }

  public alert(msg: string) {
    this._win.alert(msg).then(_ => {
      console.log('alert dismissed.');
    });
  }

  public confirm(msg: string) {
    this._win.confirm(msg).then((confirmed) => {
      console.log('confirm:', confirmed);
    }, _ => {
      console.log('confirm canceled.');
    });
  }
}
