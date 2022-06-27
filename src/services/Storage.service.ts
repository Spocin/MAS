import * as ElectronStore from "electron-store";

import * as electron from "electron";
import {Injectable} from "@angular/core";
import Szpula from "@classes/Szpula";
import {
  instanceToPlain,
  plainToInstance
} from "class-transformer";

export enum Ekstensje {
  "SZPULE" = "SZPULE",
  "KABLE" = "KABLE"
}

@Injectable({
  providedIn: "root"
})
export class StorageService {
  storage!: ElectronStore;
  _storePath!: string;

  constructor() {
    if (this.isElectron) {
      const ElectronStorage = window.require('electron-store');
      this.storage = new ElectronStorage();
      this._storePath = this.storage.path;
    } else {
      throw new Error("NOT ELECTRON");
    }
  }

  public zapiszEkstensje() {
    this.zapiszSzpule();
  }

  public wczytajEkstensje() {
    this.wczytajSzpule();
  }

  /*  SZPULA  */
  private zapiszSzpule() {
    const instancje = Array.from(Szpula.ekstensja.values());
    const instancjeParsed = JSON.stringify(instanceToPlain(instancje));
    this.saveToFile(Ekstensje.SZPULE,instancjeParsed);
  }

  private wczytajSzpule() {
    Szpula.ekstensja = new Map<string, Szpula>();
    const plain = this.loadFromFile(Ekstensje.SZPULE);
    if (typeof plain === "string") {
      const parsed = JSON.parse(plain);
      const arrayOfInstances = plainToInstance(Szpula, parsed);
      arrayOfInstances
        .forEach(instance => {
          Szpula.dodajDoEkstensji(instance);
        });
    } else {
      throw new Error("NOT WORKING");
    }
  }

  private saveToFile (key: string, value: string) {
    this.storage.set(key,value);
  }

  private loadFromFile (key: string): unknown {
    return this.storage.get(key);
  }

  get isElectron(): boolean {
    return !!(window && window.process && window.process.type);
  }

  get storePath(): string {
    return this._storePath;
  }
}
