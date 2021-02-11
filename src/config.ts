export interface configInt {
    mongoUrl: string;
    port: number;
    gunPort: number;
}

const Config = <configInt>{
    mongoUrl: 'mongodb://localhost:27017/ovrone',
    port: 3030,
    gunPort: 8765
}

export { Config }