import { Component, OnInit } from '@angular/core';
import {ElectronService} from "../services/ElectronService";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MAS';
  electronService: ElectronService;

  data: string = "";

  constructor(electronService: ElectronService) {
    this.electronService = electronService;
    console.log(`Saved electron service ${this.electronService}`);
  }

  ngOnInit() {
    this.data = "EMPTY";
  }

  save() {
    this.electronService.save("TO DZIALA");
  }

  load() {
    this.data = this.electronService.load();
  }
}
