import {Injectable} from "@angular/core";
import * as ElectronStore from "electron-store";

import * as electron from "electron";

@Injectable({
  providedIn: "root"
})
export class ElectronService {
  electronStore!: ElectronStore;

  constructor() {
    if (this.isElectron) {
      const Store = window.require('electron-store');
      this.electronStore = new Store();
    }
  }

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  save (input: string) {
    this.electronStore.set("q1",input);
    console.log(`Saved ${input} to q1`);
  }

  load (): any {
    const result = this.electronStore.get("q1");
    console.log(`Got ${result} from q1`);
    return result;
  }
}
