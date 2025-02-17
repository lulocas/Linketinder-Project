"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const cadastro_1 = require("./cadastro");
const cpf = document.getElementById('cpf');
const idade = document.getElementById('idade');
const estado = document.getElementById('estado');
const cep = document.getElementById('cep');
const descricao = document.getElementById('descricao');
const formacao = document.getElementById('formacao');
const experiencia = document.getElementById('experiencia');
const habilidades = document.getElementById('habilidades');
let inputNome = document.getElementById('seuNome');
if (inputNome) {
    inputNome.textContent = cadastro_1.nome.value;
}
else {
    console.error('Elemento com ID "seuNome" não encontrado.');
}
