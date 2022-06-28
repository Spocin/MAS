import {Component, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import Login from "@classes/Login";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnDestroy {
  loginValid = true;

  login = "";
  haslo = "";

  private _destroySub$ = new Subject<void>()
  private readonly returnUrl: string;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
  ) {
    this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/main';
  }

  ngOnDestroy(): void {
    this._destroySub$.next();
  }

  onSubmit(): void {
    this.loginValid = this.auth();
    if (this.loginValid) {
      console.log("SHOULD WORK!");
      this._router.navigateByUrl('/main');
    }
  }

  private auth(): boolean {
    if (Login.ekstensja.has(this.login)) {
      const user = Login.ekstensja.get(this.login);
      if (user) {
        if (this.haslo === user.Haslo) {
          return true;
        }
      } else {
        return false;
      }
    }
    //TODO PROD delete these
    return this.login === "admin" && this.haslo === "admin";
  }

}
