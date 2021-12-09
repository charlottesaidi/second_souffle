type DumpsterCoordinate = {
  id: number;
  latitude: number;
  longitude: number;
}

export type Dumpster = {
  id: string;
  numero_benne: string;
  adresse: string;
  coordonnee: DumpsterCoordinate;
  ville: any;
  created_at: Date;
  updated_at: Date | undefined;
};