import Magazynier from "@classes/Magazynier";

export default interface IStorage {
  Storage: {
    Magazynierzy: Magazynier[],
    OperatorzyLinii: [],
    Handlowcy: [],
    CzlonkowieZarzadu: [],
    LinieProdukcyjne: [],
    Klienci: [],
    Zamowienia: [],
    Kable: [],
    Szpule: []
    Operatorzy_Linie: [],
    Zamowienia_Kable: []
  }
}
