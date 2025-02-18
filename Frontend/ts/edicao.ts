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
const botaoSalvar = document.getElementById('botaoSalvar') as HTMLButtonElement;

export function nomeTitulo(nome: string) {
    const seuNomeElement = document.getElementById('seuNome');
    if (seuNomeElement) {
        seuNomeElement.textContent = nome;
    } else {
        console.error('Elemento com ID "seuNome" não encontrado.');
    }
}

export function salvar() {
    const candidato = new Candidato(nome.value, email.value, senha.value, cpf.value, parseInt(idade.value), estado.value, cep.value, descricao.value, formacao.value, experiencia.value, habilidades.value.split(','));
    console.log(candidato);
    alert('Candidato salvo com sucesso!');
    window.location.href = 'perfilC.html';
}