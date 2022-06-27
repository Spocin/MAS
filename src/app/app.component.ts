import {Component, OnInit} from '@angular/core';
import {StorageService} from "../services/Storage.service";
import Szpula from "@classes/Szpula";
import Login from "@classes/Login";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'MAS';

  _storageService: StorageService;
  _activeRoute: ActivatedRoute;
  _router: Router;

  constructor(
    _storageService: StorageService,
    _activeRoute: ActivatedRoute,
    _router: Router
  ) {
    this._storageService = _storageService;
    this._activeRoute = _activeRoute;
    this._router = _router;
  }

  ngOnInit() {
    this._storageService.wczytajWszystkieEkstensje();
    this._router.navigateByUrl("/login");
  }

  save() {
    this._storageService.zapiszWszystkieEkstensje();
  }

  load() {
    this._storageService.wczytajWszystkieEkstensje();
  }
}
