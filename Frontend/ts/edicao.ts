import { nome, email, senha, usuario, botaoCadastrar, cadastrar } from './cadastro';
import { Candidato } from './candidato';

const cpf = document.getElementById('cpf') as HTMLInputElement;
const idade = document.getElementById('idade') as HTMLInputElement;
const estado = document.getElementById('estado') as HTMLInputElement;
const cep = document.getElementById('cep') as HTMLInputElement;
const descricao = document.getElementById('descricao') as HTMLInputElement;
const formacao = document.getElementById('formacao') as HTMLInputElement;
const experiencia = document.getElementById('experiencia') as HTMLInputElement;
const habilidades = document.getElementById('habilidades') as HTMLInputElement;
let inputNome = document.getElementById('seuNome');

if (inputNome) {
    inputNome.textContent = nome.value;
} else {
    console.error('Elemento com ID "seuNome" não encontrado.');
}