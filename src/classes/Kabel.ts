import Szpula from "@classes/Szpula";
import Zamowienie_kabel from "@classes/Zamowienie_kabel";
import LiniaProdukcyjna from "@classes/LiniaProdukcyjna";

export default class Kabel {
  public static mapaKabli: Map<string,Kabel> = new Map<string, Kabel>();

  private oznaczenie: string;
  private opis: string;
  private przeznaczenie: string;
  private certyfikaty: string[];

  private zamowinia_kabel: Zamowienie_kabel[] | undefined;
  private szpula: Szpula;
  private wyprodukowanyPrzez: LiniaProdukcyjna;

  constructor(oznaczenie: string,
              opis: string,
              przeznaczenie: string,
              certyfikaty: string[],
              szpula: Szpula,
              wyprodukowanyPrzez: LiniaProdukcyjna,
              zamowienia_kabel?: Zamowienie_kabel[]) {

    if (Kabel.mapaKabli.has(oznaczenie)) {
      throw new Error("Kabel o takim oznaczeniu już istnieje");
    }

    this.oznaczenie = oznaczenie;
    this.opis = opis;
    this.przeznaczenie = przeznaczenie;
    this.certyfikaty = certyfikaty;
    this.szpula = szpula;
    this.wyprodukowanyPrzez = wyprodukowanyPrzez;
    this.zamowinia_kabel = zamowienia_kabel;

    Kabel.mapaKabli.set(this.oznaczenie,this);
  }
}
