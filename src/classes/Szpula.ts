import Kabel from "@classes/Kabel";

export default class Szpula {
  public static mapaSzpul: Map<string,Szpula> = new Map<string,Szpula>();

  private identyfikator: string;
  private kabel: Kabel | undefined;

  constructor(identyfikator: string, kabel?: Kabel) {
    if (Szpula.mapaSzpul.has(identyfikator)) {
      throw new Error("Szpula o takim identyfikatorze juz istnieje");
    }

    this.identyfikator = identyfikator;
    this.kabel = kabel;

    Szpula.mapaSzpul.set(this.identyfikator, this);
  }
}
