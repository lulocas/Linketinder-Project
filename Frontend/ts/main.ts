import { nome, email, senha, usuario, botaoCadastrar, cadastrar } from './cadastro';
import { Candidato } from './candidato';
import { nomeTitulo, salvar} from './edicao';

let candidatos: Candidato[] = [];

console.log("oi");

document.addEventListener('DOMContentLoaded', function() {
    botaoCadastrar.addEventListener('click', cadastrar);
});

console.log('oi');

console.log('oi');