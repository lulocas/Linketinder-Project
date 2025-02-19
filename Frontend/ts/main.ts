import { nome, email, senha, usuario, botaoCadastrar, cadastrar } from './cadastro.js';
import { Candidato } from './candidato.js';
import { nomeTitulo, salvar} from './edicao.js';

let candidatos: Candidato[] = [];

document.addEventListener('DOMContentLoaded', function() {
    if (botaoCadastrar) {
        botaoCadastrar.addEventListener('click', cadastrar);
    } else {
        console.error('Elemento com ID "botaoCadastrar" não encontrado.');
    }

    if (nome) {
        nomeTitulo(nome.value);
    } else {
        console.error('Elemento com ID "nome" não encontrado.');
    }
});