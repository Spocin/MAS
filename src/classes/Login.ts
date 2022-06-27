import {Expose} from "class-transformer";
import {v4 as uuid} from "uuid";

export default class Login {
  public static ekstensja: Map<string,Login> = new Map<string, Login>();

  @Expose()
  private readonly _uuid: string;

  @Expose()
  private _Login: string;

  @Expose()
  private _Haslo: string;

  constructor(login: string, haslo: string) {
    this._uuid = uuid();
    this._Login = login;
    this._Haslo = haslo;
  }

  static set dodajDoEkstensji(login: Login) {
    this.ekstensja.set(login.uuid, login);
  }

  get uuid(): string {
    return this._uuid;
  }

  get Login(): string {
    return this._Login;
  }
}
