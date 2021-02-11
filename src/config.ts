export interface configInt {
    mongoUrl: string;
    port: number;
    gunPort: number;
}

// Variables used in Express
const Config = <configInt>{
    port: 3030,
    gunPort: 8765
}

export { Config }