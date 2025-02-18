import { nome, botaoCadastrar, cadastrar } from './cadastro';
import { nomeTitulo } from './edicao';
let candidatos = [];
console.log("oi");
botaoCadastrar.addEventListener('click', cadastrar);
document.addEventListener('DOMContentLoaded', function () {
    nomeTitulo(nome.value);
});
console.log('oi');
