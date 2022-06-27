import {Moment} from "moment";
import * as moment from "moment";
import Zamowienie_kabel from "@classes/Zamowienie_kabel";

enum StatusZamowienia {
  PRZYJETE,
  ANULOWANE,
  WYPRODUKOWANE,
  WYDANE
}

export default class Zamowienie {
  public static Zamowienia: Map<number,Zamowienie> = new Map<number, Zamowienie>();

  private numer: number;
  private status: StatusZamowienia;
  private planowanaDataRealizacji: Moment;

  private _zamowienia_kable: Zamowienie_kabel[] = [];

  constructor(numer: number, status: StatusZamowienia, planowanaDataRealizacji: moment.Moment) {
    if (Zamowienie.Zamowienia.has(numer)) {
      throw new Error(`Zamówienie o numerze ${numer} już istnieje`);
    }

    this.numer = numer;
    this.status = status;
    this.planowanaDataRealizacji = planowanaDataRealizacji;

    this.save()
  }

  addZamowienie_Kabel(zamowienieKabel: Zamowienie_kabel) {
    this._zamowienia_kable.push(zamowienieKabel);
    this.save()
  }

  private save() {
    Zamowienie.Zamowienia.set(this.numer, this);
  }
}
