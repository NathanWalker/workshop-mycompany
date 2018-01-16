import { Injectable } from '@angular/core';

@Injectable()
export class WindowPlatformService {
  public alert(msg: any) { };
  public confirm(msg: any) { };
}

@Injectable()
export class WindowService {

  private _dialogPromise: Promise<any>;

  constructor(
    private _platformWindow: WindowPlatformService,
  ) { }

  public alert(msg: any): Promise<any> {
    if (!this._dialogPromise) {
      this._dialogPromise = new Promise((resolve, reject) => {
        this._resultHandler(this._platformWindow.alert(msg), resolve, reject, true);
      });
    }
    return this._dialogPromise;
  }

  public confirm(msg: any): Promise<any> {
    if (!this._dialogPromise) {
      this._dialogPromise = new Promise((resolve, reject) => {
        this._resultHandler(this._platformWindow.confirm(msg), resolve, reject);
      });
    }
    return this._dialogPromise;
  }

  private _resultHandler(result: any, resolve: (result?: any) => void, reject: (reason?: any) => void, alwaysResolve?: boolean) {
    if (typeof result === 'object' && result.then) {
      result.then((result) => {
        if (alwaysResolve || result) {
          resolve(result);
        } else {
          reject();
        }
        this._dialogPromise = null;
      }, (err) => {
        reject(err);
        this._dialogPromise = null;
      });
    } else {
      if (alwaysResolve || result) {
        resolve(result);
      } else {
        reject();
      }
      this._dialogPromise = null;
    }
  }
}
