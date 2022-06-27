import Kabel from "@classes/Kabel";
import Zamowienie from "@classes/Zamowienie";

export default class Zamowienie_kabel {
  public static zamowienia_kable: Zamowienie_kabel[] = [];

  private dlugoscWMetrach: number;

  private zamowienie: Zamowienie;
  private kabel: Kabel;

  constructor(dlugoscWMetrach: number, zamowienie: Zamowienie, kabel: Kabel) {
    this.dlugoscWMetrach = dlugoscWMetrach;
    this.zamowienie = zamowienie;
    this.kabel = kabel;

    kabel.addZamowienie_Kabel(this);
    zamowienie.addZamowienie_Kabel(this);

    this.save();
  }

  private save() {
    Zamowienie_kabel.zamowienia_kable.push(this);
  }
}
