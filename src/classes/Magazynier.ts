import {Duration, Moment} from "moment";

import Pracownik from "@classes/Pracownik";
import Adres from "@classes/Adres";
import DaneZatrudnienia from "@classes/DaneZatrudnienia";
import Szpula from "@classes/Szpula";

export default class Magazynier extends Pracownik{

  constructor(imie: string, nazwisko: string, plec: string, pesel: string, dataUrodzenia: Moment, email: string[], numerTel: string[], adres: Adres, daneZatrudnienia: DaneZatrudnienia[], doswiadczenie: Duration) {
    super(imie,nazwisko,plec,pesel,dataUrodzenia,email,numerTel,adres,daneZatrudnienia,doswiadczenie);
  }

  public pobierzStanMagazynu (): Szpula[] {
    throw new Error("Method not implemented");
  }
}
