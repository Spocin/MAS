import * as ElectronStore from "electron-store";

import * as electron from "electron";
import {Injectable} from "@angular/core";
import Szpula from "@classes/Szpula";
import {instanceToPlain, plainToInstance} from "class-transformer";
import Login from "@classes/Login";
const isElectron = require('is-electron');

export enum Ekstensje {
  "SZPULE" = "SZPULE",
  "KABLE" = "KABLE",
  "LOGINY" = "LOGINY"
}

@Injectable({
  providedIn: "any"
})
export class StorageService {
  private storage!: ElectronStore;
  private readonly _storePath!: string;

  private readonly _isValid: boolean;

  constructor() {
    if (isElectron()) {
      this._isValid = true;
      const ElectronStorage = window.require('electron-store');
      this.storage = new ElectronStorage();
      this._storePath = this.storage.path;
    } else {
      this._isValid = false;
    }
  }

  public zapiszWszystkieEkstensje() {
    if (!this.isValid) throw new Error("Service is not valid");
    this.zapiszEkstensje(Ekstensje.SZPULE, Szpula.ekstensja.values());
    this.zapiszEkstensje(Ekstensje.LOGINY, Login.ekstensja.values());
  }

  public wczytajWszystkieEkstensje() {
    if (!this.isValid) throw new Error("Service is not valid");
    this.wczytajSzpule();
    this.wczytajLoginy();
  }

  private zapiszEkstensje(ekstensja: Ekstensje, iterable: IterableIterator<any>): void {
    const instancje = Array.from(iterable);
    const instancjeParsed = JSON.stringify(instanceToPlain(instancje));
    this.saveToFile(ekstensja,instancjeParsed);
  }

  /*  LOGIN  */
  private wczytajLoginy() {
    Login.ekstensja = new Map<string, Login>();
    const plain = this.loadFromFile(Ekstensje.LOGINY);
    if (typeof plain === "string") {
      const parsed = JSON.parse(plain);
      const arrayOfInstances = plainToInstance(Login, parsed);
      arrayOfInstances
        .forEach(instance => {
          Login.dodajDoEkstensji = instance;
        });
    } else {
      throw new Error("Brak loginów do wczytania");
    }
  }

  /*  SZPULA  */
  private wczytajSzpule() {
    Szpula.ekstensja.clear();
    const plain = this.loadFromFile(Ekstensje.SZPULE);
    if (typeof plain === "string") {
      const parsed = JSON.parse(plain);
      const arrayOfInstances = plainToInstance(Szpula, parsed);
      arrayOfInstances
        .forEach(instance => {
          Szpula.dodajDoEkstensji = instance;
        });
    } else {
      throw new Error("Brak szpul do wczytania");
    }
  }

  private saveToFile (key: string, value: string) {
    this.storage.set(key,value);
  }

  private loadFromFile (key: string): unknown {
    return this.storage.get(key);
  }

  get storePath(): string {
    return this._storePath;
  }

  get isValid(): boolean {
    return this._isValid;
  }
}
