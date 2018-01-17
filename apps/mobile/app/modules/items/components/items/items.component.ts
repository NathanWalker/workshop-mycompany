import { Component, OnInit } from '@angular/core';

// libs
import { WindowService } from '@mycompany/core';
// app
import { Item } from '../../models';
import { ItemService } from '../../services/item.service';

@Component({
  selector: 'ns-items',
  moduleId: module.id,
  templateUrl: './items.component.html'
})
export class ItemsComponent implements OnInit {
  items: Item[];

  constructor(
    private _itemService: ItemService,
    private _win: WindowService
  ) { }

  ngOnInit(): void {
    this.items = this._itemService.getItems();
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
