export interface AcModel {
  id: string;
  brand: string;
  name: string;
  price: number;
  powerKw: number;
  btu: 7 | 9 | 12 | 18 | 24;
  roomMin: number;
  roomMax: number;
  features: string[];
  image: string;
  popular?: boolean;
}

export interface Service {
  id: string;
  icon: string;
  title: string;
  description: string;
  details: string[];
  price: string;
}
