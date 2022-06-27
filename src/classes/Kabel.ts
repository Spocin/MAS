import Szpula from "@classes/Szpula";
import Zamowienie_kabel from "@classes/Zamowienie_kabel";
import LiniaProdukcyjna from "@classes/LiniaProdukcyjna";

export default class Kabel {
  public static mapaKabli: Map<string,Kabel> = new Map<string, Kabel>();

  private oznaczenie: string;
  private opis: string;
  private przeznaczenie: string;
  private certyfikaty: string[];

  private _zamowienia_kable: Zamowienie_kabel[] = [];
  private nawinietyJestNa: Szpula;
  private wyprodukowanyPrzez: LiniaProdukcyjna;

  constructor(oznaczenie: string,
              opis: string,
              przeznaczenie: string,
              certyfikaty: string[],
              szpula: Szpula,
              wyprodukowanyPrzez: LiniaProdukcyjna) {

    if (Kabel.mapaKabli.has(oznaczenie)) {
      throw new Error(`Kabel o oznaczeniu ${oznaczenie} już istnieje`);
    }

    this.oznaczenie = oznaczenie;
    this.opis = opis;
    this.przeznaczenie = przeznaczenie;
    this.certyfikaty = certyfikaty;
    this.nawinietyJestNa = szpula;
    this.wyprodukowanyPrzez = wyprodukowanyPrzez;

    this.nawinietyJestNa.maNawiniety = this;

    this.save()
  }

  addZamowienie_Kabel(zamowienieKabel: Zamowienie_kabel) {
    this._zamowienia_kable.push(zamowienieKabel);
    this.save()
  }

  private save() {
    Kabel.mapaKabli.set(this.oznaczenie,this);
  }
}
