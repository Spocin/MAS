import {Component, isDevMode, OnInit} from '@angular/core';
import {StorageService} from "../services/Storage.service";
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
    try {
      this._storageService.wczytajWszystkieEkstensje();
    } catch (e) {
      if (isDevMode()) {
        console.error(e);
      }
    }
    this._router.navigateByUrl("/login");
  }

  save() {
    if (this._storageService) {
      this._storageService.zapiszWszystkieEkstensje();
    }
  }

  load() {
    if (this._storageService) {
      this._storageService.wczytajWszystkieEkstensje();
    }
  }
}
