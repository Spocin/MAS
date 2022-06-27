import {Component, OnInit} from '@angular/core';
import {Ekstensje, StorageService} from "../services/Storage.service";
import Szpula from "@classes/Szpula";
import Kabel from "@classes/Kabel";
import Serializable from "@classes/Serializable";
import {classToPlain, instanceToPlain, plainToInstance} from "class-transformer";

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

  save() {
    const test1 = new Szpula("1","10");
    const test2 = new Szpula("2","12");
    const test3 = new Szpula("3","13");
    const test4 = new Szpula("4","14");


    const parsed = instanceToPlain(test1);
    const stringified = JSON.stringify(parsed);
    this.storageService.save("SZPULA",stringified);
  }

  load() {
    const plain = this.storageService.load("SZPULA");
    console.log(plain);
    const stingified = this.storageService.load("SZPULA") as Object;
    console.log(stingified);
    if (typeof plain === "string") {
      const parsed = JSON.parse(plain);
      console.log(parsed);
      const object = plainToInstance(Szpula, parsed);
      console.log(object);
    }
  }
}
