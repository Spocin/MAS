import Kabel from "@classes/Kabel";

export default class Szpula {
  public static mapaSzpul: Map<string,Szpula> = new Map<string,Szpula>();

  private identyfikator: string;
  private _maNawiniety: Kabel | undefined;

  constructor(identyfikator: string, ) {
    if (Szpula.mapaSzpul.has(identyfikator)) {
      throw new Error(`Szpula o identyfikatorze ${identyfikator} juz istnieje`);
    }

    this.identyfikator = identyfikator;
    this.save();
  }

  set maNawiniety(value: Kabel | undefined) {
    this._maNawiniety = value;
    this.save();
  }

  private save() {
    Szpula.mapaSzpul.set(this.identyfikator, this);
  }
}
