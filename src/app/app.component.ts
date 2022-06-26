import { Component } from '@angular/core';
import {ElectronService} from "../services/Electron.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MAS';
  electronService: ElectronService;

  constructor(electronService: ElectronService) {
    this.electronService = electronService;
  }
}
