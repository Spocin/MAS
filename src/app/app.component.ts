import {Component} from '@angular/core';
import {StorageService} from "../services/Storage.service";
import Szpula from "@classes/Szpula";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MAS';
  storageService: StorageService;

  constructor(storageService: StorageService) {
    this.storageService = storageService;
  }

  test() {
    const test1 = new Szpula("10");
    const test2 = new Szpula("11",10);
    const test3 = new Szpula("12");

    Szpula.dodajDoEkstensji(test1);
    Szpula.dodajDoEkstensji(test2);
    Szpula.dodajDoEkstensji(test3);
  }

  save() {
    this.storageService.zapiszEkstensje();
  }

  load() {
    this.storageService.wczytajEkstensje();
  }

  check() {
    console.log(
      Szpula.ekstensja.values()
    )
  }
}
