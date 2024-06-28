export enum marca {
    bmw = 'bmw',
    ferra = 'ferra',
    gol = 'gol'
}

export enum motor {
    suvs = 'suvs',
    cilindros = 'cilindros',
    potencia = 'potencia'

}


export enum cor {
    preto = 'preto',
    vermelho = 'vermelho',
    branco = 'branco'
}

export class carro {
    cor: cor;
    motor: motor;
    marca: marca
    constructor(marca: marca, motor: motor, cor: cor) {
        this.cor = cor
        this.motor = motor
        this.marca = marca
    }
}