"use strict";
// Classe candidato
class CandidatoIndex {
    constructor(nome, email, senha, cpf, idade, estado, cep, descricao, formacao, experiencia, habilidades) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
        this.idade = idade;
        this.estado = estado;
        this.cep = cep;
        this.descricao = descricao;
        this.formacao = formacao;
        this.experiencia = experiencia;
        this.habilidades = habilidades;
    }
    getNome() {
        return this.nome;
    }
    getEmail() {
        return this.email;
    }
    getSenha() {
        return this.senha;
    }
    getCpf() {
        return this.cpf;
    }
    getIdade() {
        return this.idade;
    }
    getEstado() {
        return this.estado;
    }
    getCep() {
        return this.cep;
    }
    getDescricao() {
        return this.descricao;
    }
    getFormacao() {
        return this.formacao;
    }
    getExperiencia() {
        return this.experiencia;
    }
    getHabilidades() {
        return this.habilidades;
    }
    setNome(nome) {
        this.nome = nome;
    }
    setEmail(email) {
        this.email = email;
    }
    setSenha(senha) {
        this.senha = senha;
    }
    setCpf(cpf) {
        this.cpf = cpf;
    }
    setIdade(idade) {
        this.idade = idade;
    }
    setEstado(estado) {
        this.estado = estado;
    }
    setCep(cep) {
        this.cep = cep;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    setFormacao(formacao) {
        this.formacao = formacao;
    }
    setExperiencia(experiencia) {
        this.experiencia = experiencia;
    }
    setHabilidades(habilidades) {
        this.habilidades = habilidades;
    }
}
// Cadastro
const inputNomeIndex = document.getElementById('nome');
const inputEmailIndex = document.getElementById('email');
const inputSenhaIndex = document.getElementById('senha');
const inputConfirmaIndex = document.getElementById('confirmarSenha');
const candidatoInputIndex = document.getElementById('candidatoBotao');
const empresaInputIndex = document.getElementById('empresaBotao');
const botaoIndex = document.getElementById('botaoCadastrar');
const seuNomeElementIndex = document.getElementById('seuNome');
const seuNomeElement = document.getElementById('seuNome');
let usuarioIndex;
let nomeIndex;
let emailIndex;
let senhaIndex;
function validar() {
    if (inputNomeIndex.value === '') {
        alert('Nome é obrigatório');
        return false;
    }
    if (inputEmailIndex.value === '') {
        alert('Email é obrigatório');
        return false;
    }
    if (inputSenhaIndex.value === '') {
        alert('Senha é obrigatório');
        return false;
    }
    if (inputConfirmaIndex.value === '') {
        alert('Confirmação de senha é obrigatória');
        return false;
    }
    if (inputSenhaIndex.value !== inputConfirmaIndex.value) {
        alert('Senhas não conferem');
        return false;
    }
    if (!candidatoInputIndex.checked && !empresaInputIndex.checked) {
        alert('Selecione um tipo de cadastro');
        return false;
    }
    return true;
}
function cadastrar() {
    if (validar()) {
        alert('Cadastro realizado com sucesso!');
        if (candidatoInputIndex.checked) {
            usuarioIndex = 'candidato';
            alert(`Usuário ${usuarioIndex} cadastrado com sucesso!`);
            window.location.href = 'edicaoC.html';
        }
        else if (empresaInputIndex.checked) {
            usuarioIndex = 'empresa';
            alert(`Usuário ${usuarioIndex} cadastrado com sucesso!`);
            window.location.href = 'edicaoE.html';
        }
        nomeIndex = inputNomeIndex.value;
        emailIndex = inputEmailIndex.value;
        senhaIndex = inputSenhaIndex.value;
        localStorage.setItem('nomeUsuario', nomeIndex);
    }
}
// Edicao C
const inputcpf = document.getElementById('cpf');
const inputidade = document.getElementById('idade');
const inputestado = document.getElementById('estado');
const inputcep = document.getElementById('cep');
const inputdescricao = document.getElementById('descricao');
const inputformacao = document.getElementById('formacao');
const inputexperiencia = document.getElementById('experiencia');
const inputhabilidades = document.getElementById('habilidades');
const botaoSalvar = document.getElementById('botaoSalvar');
const divHabilidades = document.getElementById('divHab');
let candidato;
let listaHab = [];
function mudarNome(nome) {
    if (seuNomeElement) {
        seuNomeElement.textContent = nome;
    }
}
function validarEdicao() {
    if (inputcpf.value === '') {
        alert('CPF é obrigatório');
        return false;
    }
    if (inputidade.value === '') {
        alert('Idade é obrigatório');
        return false;
    }
    if (inputestado.value === '') {
        alert('Estado é obrigatório');
        return false;
    }
    if (inputcep.value === '') {
        alert('CEP é obrigatório');
        return false;
    }
    if (inputdescricao.value === '') {
        alert('Descrição é obrigatório');
        return false;
    }
    if (inputformacao.value === '') {
        alert('Formação é obrigatório');
        return false;
    }
    if (listaHab.length < 3) {
        alert('Adicione pelo menos 3 habilidades');
        return false;
    }
    return true;
}
function escreverHab() {
    if (inputhabilidades.value !== '') {
        criarHabilidade();
        listaHab.push(inputhabilidades.value);
        inputhabilidades.value = '';
        console.log(listaHab);
    }
}
function criarHabilidade() {
    var divHabili = document.createElement('div');
    divHabili.classList.add("habil");
    divHabilidades.appendChild(divHabili);
    var habilidade = document.createElement('p');
    habilidade.textContent = inputhabilidades.value;
    habilidade.classList.add("pHab");
    divHabili.appendChild(habilidade);
}
function salvar(nome, email, senha) {
    if (validarEdicao()) {
        alert('Salvo com sucesso');
        candidato = new CandidatoIndex(nome, email, senha, inputcpf.value, parseInt(inputidade.value), inputestado.value, inputcep.value, inputdescricao.value, inputformacao.value, inputexperiencia.value, listaHab);
        localStorage.setItem('candidato', JSON.stringify(candidato));
        window.location.href = 'perfilC.html';
    }
}
// Perfil c
const h3Nome = document.getElementById("seuNome");
const pCpf = document.getElementById("cpf");
const pidade = document.getElementById("idade");
const pestado = document.getElementById("estado");
const pcep = document.getElementById("cep");
const pdescricao = document.getElementById("descricao");
const pexperiencia = document.getElementById("experiencia");
const pformacao = document.getElementById("formacao");
function mudarDados() {
    const candidatoData = localStorage.getItem('candidato');
    if (candidatoData) {
        const candidato = JSON.parse(candidatoData);
        h3Nome.textContent = candidato.nome;
        pCpf.textContent = candidato.cpf;
        pidade.textContent = candidato.idade.toString();
        pestado.textContent = candidato.estado;
        pcep.textContent = candidato.cep;
        pdescricao.textContent = candidato.descricao;
        pexperiencia.textContent = candidato.experiencia;
        pformacao.textContent = candidato.formacao;
    }
}
// Index parte principal
document.addEventListener('DOMContentLoaded', () => {
    if (botaoIndex) {
        botaoIndex.addEventListener('click', cadastrar);
    }
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    if (nomeUsuario) {
        mudarNome(nomeUsuario);
    }
    if (window.location.pathname.endsWith('/edicaoC.html')) {
        console.log("oi");
        if (inputhabilidades) {
            inputhabilidades.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    escreverHab();
                }
            });
        }
        if (botaoSalvar) {
            botaoSalvar.addEventListener('click', () => salvar(nomeIndex, emailIndex, senhaIndex));
        }
    }
    if (window.location.pathname.endsWith('/perfilC.html')) {
        console.log("oi");
        mudarDados();
    }
});
//# sourceMappingURL=index.js.map