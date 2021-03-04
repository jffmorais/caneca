import { Caneca } from "./caneca";

const caneca1: Caneca = {
    id: 1,
    nome: "Caneca Hello World",
    desc: "Caneca de porcelana branca com imagem divertida",
    img: "hello-world.JPG",
    dtCriacao: new Date(2021,2,16,23,18,21),
    qtd: 25,
    preco: 24.99
};
const caneca2: Caneca = {
    id: 2,
    nome: "Caneca CSS is Awesome",
    desc: "Caneca de porcelana branca com imagem divertida",
    img: "css-is-awesome.JPG",
    dtCriacao: new Date(2021,2,16,23,18,21),
    qtd: 10,
    preco: 24.99
};
const caneca3: Caneca = {
    id: 3,
    nome: "Caneca It's not a bug",
    desc: "Caneca de porcelana branca com imagem divertida",
    img: "its-not-a-bug.JPG",
    dtCriacao: new Date(2021,2,16,23,18,21),
    qtd: 15,
    preco: 24.99
};
const caneca4: Caneca = {
    id: 4,
    nome: "Caneca Sem Condições",
    desc: "Caneca de porcelana branca com imagem divertida",
    img: "sem-condicoes.JPG",
    dtCriacao: new Date(2021,2,16,23,18,21),
    qtd: 15,
    preco: 24.99
};
export const canecas: Caneca[] = [caneca1, caneca2, caneca3, caneca4];