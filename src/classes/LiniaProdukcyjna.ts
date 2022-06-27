import Kabel from "@classes/Kabel";

export default class LiniaProdukcyjna {
  public static LinieProdukcyjne: Map<number,LiniaProdukcyjna> = new Map<number, LiniaProdukcyjna>();

  private numerLinii: number;
  private nazwaRobocza: string;
  private czasNagrzewaniaWytlaczarekWSekundach: number | undefined;
  private koloryWytlaczanychIzolacji: string[] | undefined;
  private maxLiczbaSkrecanychZyl: number | undefined;

  private czyLiniaProdukuje: boolean = false;
  private produkuje: Kabel | undefined = undefined;

  constructor(numerLinii: number, nazwaRobocza: string, czasNagrzewaniaWytlaczarekWSekundach?: number, koloryWytlaczanychIzolacji?: string[], maxLiczbaSkrecanychZyl?: number) {
    if (LiniaProdukcyjna.LinieProdukcyjne.has(numerLinii)) {
      throw new Error(`Linia o numerze ${numerLinii} już istnieje`);
    }

    this.numerLinii = numerLinii;
    this.nazwaRobocza = nazwaRobocza;
    this.czasNagrzewaniaWytlaczarekWSekundach = czasNagrzewaniaWytlaczarekWSekundach;
    this.koloryWytlaczanychIzolacji = koloryWytlaczanychIzolacji;
    this.maxLiczbaSkrecanychZyl = maxLiczbaSkrecanychZyl;

    LiniaProdukcyjna.LinieProdukcyjne.set(this.numerLinii, this);
  }
}
