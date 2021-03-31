export class Caneca {
    id: number;
    nome: string;
    desc: string;
    img: string;
    dtCriacao: Date;
    qtd: number;
    preco: number;

    constructor(){
        this.img = "default.png";
        this.qtd = 1;
        this.preco = 0;
    }
}
