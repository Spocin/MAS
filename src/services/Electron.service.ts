import {Injectable} from "@angular/core";
import * as ElectronStore from "electron-store";

import * as electron from "electron";
import IStorage from "./Electron.service.interface";

@Injectable({
  providedIn: "root"
})
export class ElectronService {
  electronStore!: ElectronStore;
  storePath!: string;

  storageConfig!: IStorage;

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  constructor() {
    if (this.isElectron) {
      const Store = window.require('electron-store');
      //TODO use config of storage
      this.electronStore = new Store();
      this.storePath = this.electronStore.path;
    }
  }

  save (input: string) {
    //TODO implement saving all
    this.electronStore.set("q1",input);
    console.log(`Saved ${input} to q1`);
  }

  load (): any {
    //TODO implement loading all
    const result = this.electronStore.get("q1");
    console.log(`Got ${result} from q1`);
    return result;
  }
}
