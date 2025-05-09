"use strict";
// Classe candidato
class CandidatoIndex {
    constructor(nome, email, senha, cpf, idade, estado, cep, descricao, formacao, experiencia, habilidades, titulo, telefone, linkedin) {
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
        this.titulo = titulo;
        this.telefone = telefone;
        this.linkedin = linkedin;
    }
    getLinkedin() {
        return this.linkedin;
    }
    getTelefone() {
        return this.telefone;
    }
    getTitulo() {
        return this.titulo;
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
    setLinkedin(linkedin) {
        this.linkedin = linkedin;
    }
    setTelefone(telefone) {
        this.telefone = telefone;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
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
const inputEmailIndex = document.getElementById('email');
const inputSenhaIndex = document.getElementById('senha');
const inputConfirmaIndex = document.getElementById('confirmarSenha');
const candidatoInputIndex = document.getElementById('candidatoBotao');
const empresaInputIndex = document.getElementById('empresaBotao');
const botaoIndex = document.getElementById('botaoCadastrar');
const seuNomeElementIndex = document.getElementById('seuNome');
const seuNomeElement = document.getElementById('seuNome');
const inputsCadastro = document.getElementsByClassName('inputCadastro');
const inputsEdicaoC = document.getElementsByClassName('inputEdicao');
const inputsEdicaoE = document.getElementsByClassName('inputEdicao');
let usuarioIndex;
let emailIndex;
let senhaIndex;
const validarEmail = /\S+@\w+\.\w{2,6}(\.\w{2})?/g;
function validar() {
    if (window.location.pathname.endsWith('/paginainicial.html')) {
        for (let i = 0; i < inputsCadastro.length; i++) {
            if (inputsCadastro[i].value === '') {
                alert(`${inputsCadastro[i].id} é obrigatório`);
                return false;
            }
        }
        if (!validarEmail.test(inputEmailIndex.value)) {
            alert('Email inválido');
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
    else if (window.location.pathname.endsWith('/edicaoC.html')) {
        for (let i = 0; i < (inputsEdicaoC.length - 1); i++) {
            if (inputsEdicaoC[i].value === '') {
                alert(`${inputsEdicaoC[i].id} é obrigatório`);
                return false;
            }
        }
        if (listaHab.length < 3) {
            alert('Adicione pelo menos 3 habilidades');
            return false;
        }
        if (!validarLinkedin.test(inputLinkedin.value)) {
            alert('Linkedin inválido');
            return false;
        }
        if (!validarTelefone.test(inputTelefone.value)) {
            alert('Telefone inválido');
            return false;
        }
        if (!validarCpf.test(inputcpf.value)) {
            alert('CPF inválido');
            return false;
        }
        if (!validarCep.test(inputcep.value)) {
            alert('CEP inválido');
            return false;
        }
    }
    else if (window.location.pathname.endsWith('/edicaoE.html')) {
        for (let i = 0; i < (inputsEdicaoE.length - 1); i++) {
            if (inputsEdicaoE[i].value === '') {
                alert(`${inputsEdicaoE[i].id} é obrigatório`);
                return false;
            }
        }
        if (!validarCnpj.test(inputCnpj.value)) {
            alert('CNPJ inválido');
            return false;
        }
        if (!validarCep.test(inputcep.value)) {
            alert('CEP inválido');
            return false;
        }
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
        emailIndex = inputEmailIndex.value;
        senhaIndex = inputSenhaIndex.value;
    }
}
// Edicao C
const inputLinkedin = document.getElementById('linkedin');
const inputTelefone = document.getElementById('telefone');
const inputNomeIndex = document.getElementById('nome');
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
const validarCpf = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
const validarCep = /\d{5}-\d{3}/g;
const validarTelefone = /\(\d{2}\)\s?\d{4,5}-\d{4}/g;
const validarLinkedin = /(https:\/\/)?www\.linkedin\.com\/in\/\w+/g;
function mudarNome(nome) {
    if (seuNomeElement) {
        seuNomeElement.textContent = nome;
    }
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
function salvar(email, senha) {
    if (validar()) {
        alert('Salvo com sucesso');
        if (window.location.pathname.endsWith('/edicaoC.html')) {
            candidato = new CandidatoIndex(inputNomeIndex.value, email, senha, inputcpf.value, parseInt(inputidade.value), inputestado.value, inputcep.value, inputdescricao.value, inputformacao.value, inputexperiencia.value, listaHab, "", inputTelefone.value, inputLinkedin.value);
            localStorage.setItem('candidato', JSON.stringify(candidato));
            window.location.href = 'perfilC.html';
        }
        else if (window.location.pathname.endsWith('/edicaoE.html')) {
            const vaga = new Vaga(tituloVaga.value, descricaoVaga.value, habilidadesVaga.value, parseInt(salarioVaga.value));
            const empresa = new Empresa(inputNomeEmpresa.value, emailIndex, senhaIndex, inputCnpj.value, inputPais.value, inputEstado.value, inputCep.value, inputDescricao.value, vaga);
            localStorage.setItem('vaga', JSON.stringify(vaga));
            localStorage.setItem('empresa', JSON.stringify(empresa));
            window.location.href = 'perfilE.html';
        }
    }
}
// Perfil c
const pLinkedin = document.getElementById("linkedin");
const pTelefone = document.getElementById("telefone");
const h3Nome = document.getElementById("seuNome");
const pCpf = document.getElementById("cpf");
const pidade = document.getElementById("idade");
const pestado = document.getElementById("estado");
const pcep = document.getElementById("cep");
const pdescricao = document.getElementById("descricao");
const pexperiencia = document.getElementById("experiencia");
const pformacao = document.getElementById("formacao");
const divHabilidadesEdicao = document.getElementById("divHabilidades");
const inputTitulo = document.getElementById("interesses");
const tituloCard = document.getElementById("interessesP");
const formacaoCard = document.getElementById("formacaoP");
const divHabilCard = document.getElementById("divHabilidadesCard");
const botaoEditarC = document.getElementById('botaoEditar');
function pegarTitulo() {
    const candidatoData = localStorage.getItem('candidato');
    if (inputTitulo.value !== '') {
        const candidato = candidatoData ? JSON.parse(candidatoData) : null;
        tituloCard.textContent = inputTitulo.value;
        candidato.setTitulo(inputTitulo.value);
        inputTitulo.value = '';
    }
}
function mudarDados() {
    const candidatoData = localStorage.getItem('candidato');
    if (candidatoData) {
        const candidato = JSON.parse(candidatoData);
        h3Nome.textContent = candidato.nome;
        pCpf.textContent = candidato.cpf;
        pidade.textContent = candidato.idade.toString();
        pestado.textContent = candidato.estado;
        pcep.textContent = candidato.cep;
        pTelefone.textContent = candidato.telefone;
        pLinkedin.textContent = candidato.linkedin;
        pdescricao.textContent = candidato.descricao;
        pexperiencia.textContent = candidato.experiencia;
        pformacao.textContent = candidato.formacao;
        formacaoCard.textContent = candidato.formacao;
        tituloCard.textContent = candidato.titulo;
        for (let i = 0; i < candidato.habilidades.length; i++) {
            var divHabilidadeX = document.createElement('div');
            divHabilidadeX.classList.add("phabilidades");
            divHabilidadesEdicao.appendChild(divHabilidadeX);
            var habilidade = document.createElement('p');
            habilidade.textContent = candidato.habilidades[i];
            habilidade.classList.add("pHa");
            divHabilidadeX.appendChild(habilidade);
        }
        for (let i = 0; i < candidato.habilidades.length; i++) {
            var divHabilidadeX = document.createElement('div');
            divHabilidadeX.classList.add("phabilidades");
            divHabilCard.appendChild(divHabilidadeX);
            var habilidade = document.createElement('p');
            habilidade.textContent = candidato.habilidades[i];
            habilidade.classList.add("pHa");
            divHabilidadeX.appendChild(habilidade);
        }
    }
}
function editarC() {
    window.location.href = 'edicaoC.html';
}
// classe empresa
class Empresa {
    constructor(nome, email, senha, cnpj, pais, estado, cep, descricao, vagas) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cnpj = cnpj;
        this.pais = pais;
        this.estado = estado;
        this.cep = cep;
        this.descricao = descricao;
        this.vagas = vagas;
    }
    getVagas() {
        return this.vagas;
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
    getCnpj() {
        return this.cnpj;
    }
    getPais() {
        return this.pais;
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
    setVagas(vagas) {
        this.vagas = vagas;
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
    setCnpj(cnpj) {
        this.cnpj = cnpj;
    }
    setPais(pais) {
        this.pais = pais;
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
}
// Edicao E
const inputNomeEmpresa = document.getElementById('nome');
const inputCnpj = document.getElementById('cnpj');
const inputPais = document.getElementById('pais');
const inputEstado = document.getElementById('estado');
const inputCep = document.getElementById('cep');
const inputDescricao = document.getElementById('sobre');
const botaoSalvarE = document.getElementById('botaoSalvarE');
const tituloVaga = document.getElementById('tituloVaga');
const descricaoVaga = document.getElementById('descricaoVaga');
const habilidadesVaga = document.getElementById('requisitos');
const salarioVaga = document.getElementById('salario');
let empresa;
const validarCnpj = /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/g;
// perfil E
const h3NomeE = document.getElementById("seuNome");
const pCnpj = document.getElementById("cnpj");
const pPais = document.getElementById("pais");
const pEstado = document.getElementById("estado");
const pCep = document.getElementById("cep");
const pDescricao = document.getElementById("descricao");
const botaoEditarE = document.getElementById('botaoEditarE');
const tituloVagaCard = document.getElementById('tituloVaga');
const descricaoVagaCard = document.getElementById('descricaope');
const habilidadesVagaCard = document.getElementById('requisisitop');
const salarioVagaCard = document.getElementById('salariop');
class Vaga {
    constructor(titulo, descricao, habilidades, salario) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.habilidades = habilidades;
        this.salario = salario;
    }
    getTitulo() {
        return this.titulo;
    }
    getDescricao() {
        return this.descricao;
    }
    getHabilidades() {
        return this.habilidades;
    }
    getSalario() {
        return this.salario;
    }
    setTitulo(titulo) {
        this.titulo = titulo;
    }
    setDescricao(descricao) {
        this.descricao = descricao;
    }
    setHabilidades(habilidades) {
        this.habilidades = habilidades;
    }
    setSalario(salario) {
        this.salario = salario;
    }
}
function mudarDadosE() {
    const empresaData = localStorage.getItem('empresa');
    const vagaData = localStorage.getItem('vaga');
    if (vagaData) {
        const vaga = JSON.parse(vagaData);
        tituloVagaCard.textContent = vaga.titulo;
        descricaoVagaCard.textContent = vaga.descricao;
        habilidadesVagaCard.textContent = vaga.habilidades.toString();
        salarioVagaCard.textContent = vaga.salario.toString();
    }
    if (empresaData) {
        const empresa = JSON.parse(empresaData);
        h3NomeE.textContent = empresa.nome;
        pCnpj.textContent = empresa.cnpj;
        pPais.textContent = empresa.pais;
        pEstado.textContent = empresa.estado;
        pCep.textContent = empresa.cep;
        pDescricao.textContent = empresa.descricao;
    }
}
// Index parte principal
document.addEventListener('DOMContentLoaded', () => {
    const botaoVaga = document.getElementById('botaoVagas');
    const botaoPerfilC = document.getElementById('botaoPerfilC');
    const botaoCandidatos = document.getElementById('botaCandidatos');
    const botaoPerfilE = document.getElementById('botaoPerfilE');
    if (botaoVaga) {
        botaoVaga.addEventListener('click', () => {
            window.location.href = 'opcoes.html';
        });
    }
    if (botaoPerfilC) {
        botaoPerfilC.addEventListener('click', () => {
            window.location.href = 'perfilC.html';
        });
    }
    if (botaoCandidatos) {
        botaoCandidatos.addEventListener('click', () => {
            window.location.href = 'opcoesC.html';
        });
    }
    if (botaoPerfilE) {
        botaoPerfilE.addEventListener('click', () => {
            window.location.href = 'perfilE.html';
        });
    }
    if (botaoIndex) {
        botaoIndex.addEventListener('click', cadastrar);
    }
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    if (nomeUsuario) {
        mudarNome(nomeUsuario);
    }
    if (window.location.pathname.endsWith('/edicaoE.html')) {
        if (botaoSalvarE) {
            botaoSalvarE.addEventListener('click', () => salvar(emailIndex, senhaIndex));
        }
    }
    if (window.location.pathname.endsWith('/perfilE.html')) {
        mudarDadosE();
        if (botaoEditarE) {
            botaoEditarE.addEventListener('click', () => {
                window.location.href = 'edicaoE.html';
            });
        }
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
            botaoSalvar.addEventListener('click', () => salvar(emailIndex, senhaIndex));
        }
    }
    if (window.location.pathname.endsWith('/perfilC.html')) {
        console.log("oi");
        mudarDados();
        if (inputTitulo) {
            inputTitulo.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    pegarTitulo();
                }
            });
        }
        if (botaoEditarC) {
            botaoEditarC.addEventListener('click', editarC);
        }
    }
});
//# sourceMappingURL=index.js.map