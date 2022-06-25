export default class Adres {
  private miasto: string;
  private ulica: string;
  private nrDomu: number;
  private nrMieszkania: number | null;

  constructor(miasto: string, ulica: string, nrDomu: number, nrMieszkania: number | null) {
    this.miasto = miasto;
    this.ulica = ulica;
    this.nrDomu = nrDomu;
    this.nrMieszkania = nrMieszkania;
  }
}
