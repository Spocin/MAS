import DaneZatrudnienia from "@classes/DaneZatrudnienia";
import Adres from "@classes/Adres";

import {Moment, Duration} from "moment";
import * as moment from "moment";

export default abstract class Pracownik {
  /*    Dane osobowe    */
  private imie: string;
  private nazwisko: string;
  private plec: string;
  private pesel: string;
  private dataUrodzenia: Moment;

  /*    Dane kontaktowe   */
  private email: string[];
  private numerTel: string[];
  private adres: Adres;

  /*    Dane zatrudnienia   */
  private daneZatrudnienia: DaneZatrudnienia[]
  private doswiadczenie: Duration
  private _stazPracy: Duration

  protected constructor(imie: string, nazwisko: string, plec: string, pesel: string, dataUrodzenia: Moment, email: string[], numerTel: string[], adres: Adres, daneZatrudnienia: DaneZatrudnienia[], doswiadczenie: Duration) {
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.plec = plec;
    this.pesel = pesel;
    this.dataUrodzenia = dataUrodzenia;
    this.email = email;
    this.numerTel = numerTel;
    this.adres = adres;
    this.daneZatrudnienia = daneZatrudnienia;
    this.doswiadczenie = doswiadczenie;
    this._stazPracy = this.wyliczStazPracy();
  }

  private wyliczStazPracy (): Duration {
    let stazPracy = moment.duration(0);
    this.daneZatrudnienia
      .forEach(zatrudnienie => {
        let dataZwolnienia: Moment;
        if (zatrudnienie.dataZwolnienia === null) {
          dataZwolnienia = moment();
        } else {
          dataZwolnienia = zatrudnienie.dataZwolnienia;
        }

        stazPracy.add(
          dataZwolnienia.diff(zatrudnienie.dataPrzyjecia)
        );
      });

    return stazPracy;
  }


  get stazPracy(): moment.Duration {
    return this._stazPracy;
  }
}
