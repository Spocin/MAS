import {Injectable} from "@angular/core";
import * as ElectronStore from "electron-store";

import * as electron from "electron";
import IStorage from "./Electron.service.interface";

@Injectable({
  providedIn: "root"
})
export class ElectronService {
  electronStore!: ElectronStore;
  _storePath!: string;

  storageConfig!: IStorage;

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
    if (this.isElectron) {
      const Store = window.require('electron-store');
      //TODO use config of storage
      this.electronStore = new Store();
      this._storePath = this.electronStore.path;
    }
  }

  save (key: string, value: unknown) {
    //TODO implement saving all
    this.electronStore.set(key,JSON.stringify(value));
  }

  load (key: string): any {
    //TODO implement loading all
    const data = JSON.parse(<string>this.electronStore.get(key));
    console.log(data);
    return data;
  }

  get storePath(): string {
    return this._storePath;
  }
}
