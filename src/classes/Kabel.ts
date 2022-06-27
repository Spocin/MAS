import Szpula from "@classes/Szpula";
import Zamowienie_kabel from "@classes/Zamowienie_kabel";
import LiniaProdukcyjna from "@classes/LiniaProdukcyjna";
import {Expose, Type} from "class-transformer";

export default class Kabel {
  public static mapaKabli: Map<string,Kabel> = new Map<string, Kabel>();

  @Expose()
  private readonly _id: string;

  @Expose()
  private opis: string;

  @Expose()
  private przeznaczenie: string;

  @Expose()
  private certyfikaty: string[];

  @Type(() => Zamowienie_kabel)
  private _zamowienia_kable: Zamowienie_kabel[] = [];

  @Type(() => Szpula)
  private szpula: Szpula;

  /*@Type(() => LiniaProdukcyjna)
  private wyprodukowanyPrzez: LiniaProdukcyjna;*/

  constructor(id: string,
              opis: string,
              przeznaczenie: string,
              certyfikaty: string[],
              szpula: Szpula,
              /*wyprodukowanyPrzez: LiniaProdukcyjna*/) {

    if (Kabel.mapaKabli.has(id)) {
      throw new Error(`Kabel o oznaczeniu ${id} już istnieje`);
    }

    this._id = id;
    this.opis = opis;
    this.przeznaczenie = przeznaczenie;
    this.certyfikaty = certyfikaty;
    this.szpula = szpula;
    /*this.wyprodukowanyPrzez = wyprodukowanyPrzez;*/

    this.save()
  }

  addZamowienie_Kabel(zamowienieKabel: Zamowienie_kabel) {
    this._zamowienia_kable.push(zamowienieKabel);
    this.save()
  }

  private save() {
    /*this.szpula.kabelFK = this;*/
  }


  get id(): string {
    return this._id;
  }
}
