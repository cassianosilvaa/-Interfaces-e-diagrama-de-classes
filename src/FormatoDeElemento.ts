export class FormatoDeElemento {
    desenhar(): void {}
    redimensionar(): void {}
}

export class Circulo implements FormatoDeElemento {
    public raio: number;

    public desenhar(): void {
        // ...
    }
    public redimensionar(): void {
        // ...
    }
}

export class Retangulo implements FormatoDeElemento {
    public comprimento: number;
    public altura: number;

    public desenhar(): void {
        // ...
    }
    public redimensionar(): void {
        // ...
    }
}
