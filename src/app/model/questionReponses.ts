export interface Question {
    id: number;
    text: string;
    responses: Response[];
  }
  
  export interface Response {
    text: string;
    value: number;  // La valeur pour pondérer la maturité
  }