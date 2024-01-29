
  export interface  Newsinterface {
    _id: string;
    source: string;
    link: string;
    snippet: string;
    body: string;
    keywords: string[]
    time: string;
    literalLocation: [string,string];
    rating: number;
    matchTo?: string;
    coordinates: [number,number]  
}