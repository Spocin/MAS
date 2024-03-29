import {Expose} from "class-transformer";

export default class Szpula {
  public static ekstensja: Map<string,Szpula> = new Map<string, Szpula>();

  @Expose()
  private readonly _id: string;

  @Expose()
  private _kabelFK: number | undefined;

  constructor(id: string, kabelFK?: number) {
    if (Szpula.ekstensja.has(id)) {
      throw new Error(`Szpula o identyfikatorze ${id} już istnieje`);
    }

    this._id = id;
    this._kabelFK = kabelFK;
  }

  static set dodajDoEkstensji (szpula: Szpula) {
    this.ekstensja.set(szpula.id,szpula);
  }

  /*  GET  */
  get id(): string {
    return this._id;
  }

  /*  SET  */
  set kabelFK(value: number | undefined) {
    this._kabelFK = value;
    Szpula.dodajDoEkstensji = this;
  }

  get kabelFK(): number | undefined {
    return this._kabelFK;
  }
}
