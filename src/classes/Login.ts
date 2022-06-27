import {Expose} from "class-transformer";
import {v4 as uuid} from "uuid";

export default class Login {
  public static ekstensja: Map<string,Login> = new Map<string, Login>();

  @Expose()
  private readonly _Login: string;

  @Expose()
  private readonly _Haslo: string;

  constructor(login: string, haslo: string) {
    this._Login = login;
    this._Haslo = haslo;
  }

  static set dodajDoEkstensji(login: Login) {
    this.ekstensja.set(login.Login, login);
  }

  get Login(): string {
    return this._Login;
  }

  get Haslo(): string {
    return this._Haslo;
  }
}
