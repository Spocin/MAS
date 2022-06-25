import {Moment} from "moment";

export default class DaneZatrudnienia {
  private _dataPrzyjecia: Moment
  private _dataZwolnienia: Moment | null;
  private pensja: number;
  private wymiarPracy: string;


  constructor(dataPrzyjecia: Moment, dataZwolnienia: Moment | null, pensja: number, wymiarPracy: string) {
    this._dataPrzyjecia = dataPrzyjecia;
    this._dataZwolnienia = dataZwolnienia;
    this.pensja = pensja;
    this.wymiarPracy = wymiarPracy;
  }


  get dataPrzyjecia(): Moment {
    return this._dataPrzyjecia;
  }

  get dataZwolnienia(): Moment | null {
    return this._dataZwolnienia;
  }
}
