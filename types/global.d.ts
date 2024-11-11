declare namespace NodeJS {
    interface Global {
        lng: string;
    }
}

declare var global: NodeJS.Global & typeof globalThis;
