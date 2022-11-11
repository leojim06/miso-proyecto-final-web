import { HistorySport } from "./history-sport.model";

export interface ProfileSport {
  vo2Max: number,
  ftpActual: number,
  molestias: any[],
  lesiones: any[],
  historiasDeportivas: HistorySport[],
  idDeportista: number
}
