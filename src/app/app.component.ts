import {Component} from '@angular/core';
import {ElectronService} from "../services/Electron.service";
import Szpula from "@classes/Szpula";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MAS';
  electronService: ElectronService;

  data = "empty";

  constructor(electronService: ElectronService) {
    this.electronService = electronService;
  }

  save() {
    const szpula1 = new Szpula("S-123");
    const szpula2 = new Szpula("S-124");
    const szpula3 = new Szpula("S-125");

    this.electronService.save("szpule",Szpula.mapaSzpul);
  }

  load() {
    this.data = this.electronService.load("szpule");
  }

  getPath() {
    this.data = this.electronService.storePath;
  }
}
