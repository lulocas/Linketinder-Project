import { nome, email, senha } from './cadastro';
import { Candidato } from './candidato';
const cpf = document.getElementById('cpf');
const idade = document.getElementById('idade');
const estado = document.getElementById('estado');
const cep = document.getElementById('cep');
const descricao = document.getElementById('descricao');
const formacao = document.getElementById('formacao');
const experiencia = document.getElementById('experiencia');
const habilidades = document.getElementById('habilidades');
const botaoSalvar = document.getElementById('botaoSalvar');
export function nomeTitulo(nome) {
    const seuNomeElement = document.getElementById('seuNome');
    if (seuNomeElement) {
        seuNomeElement.textContent = nome;
    }
    else {
        console.error('Elemento com ID "seuNome" não encontrado.');
    }
}
export function salvar() {
    const candidato = new Candidato(nome.value, email.value, senha.value, cpf.value, parseInt(idade.value), estado.value, cep.value, descricao.value, formacao.value, experiencia.value, habilidades.value.split(','));
    console.log(candidato);
    alert('Candidato salvo com sucesso!');
    window.location.href = 'perfilC.html';
}
