import {Component} from '@angular/core';
import {StorageService} from "../services/Storage.service";
import Szpula from "@classes/Szpula";
import Login from "@classes/Login";

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

    Szpula.dodajDoEkstensji = test1;
    Szpula.dodajDoEkstensji = test2;
    Szpula.dodajDoEkstensji = test3;

    const login1 = new Login("Spocin","zaq1@WSX");
    const login2 = new Login("Spocin2","zaq1@WSX");
    const login3 = new Login("Spocin3","zaq1@WSX");
    const login4 = new Login("Spocin4","zaq1@WSX");

    Login.dodajDoEkstensji = login1;
    Login.dodajDoEkstensji = login2;
    Login.dodajDoEkstensji = login3;
    Login.dodajDoEkstensji = login4;
  }

  save() {
    this.storageService.zapiszWszystkieEkstensje();
  }

  load() {
    this.storageService.wczytajWszystkieEkstensje();
  }

  check() {
    console.log(Szpula.ekstensja.values());
    console.log(Login.ekstensja.values());
  }

  clear() {
    Szpula.ekstensja.clear();
    Login.ekstensja.clear();
  }
}
