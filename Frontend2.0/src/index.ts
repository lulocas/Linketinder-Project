// Classe candidato
class CandidatoIndex{
    private nome: string;
    private email: string;
    private senha: string;
    private cpf: string;
    private idade: number;
    private estado: string;
    private cep: string;
    private descricao: string;
    private formacao: string;
    private experiencia: string;
    private habilidades: string[];
    private titulo: string;
    private telefone: string;
    private linkedin: string;

    constructor(nome: string, email: string, senha: string, cpf: string, idade: number, estado: string, cep: string, descricao: string, formacao: string, experiencia: string, habilidades: string[], titulo: string, telefone: string, linkedin: string){
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

    getLinkedin(): string{
        return this.linkedin;
    }
    getTelefone(): string{  
        return this.telefone;
    }
    getTitulo(): string{
        return this.titulo;
    }

    getNome(): string{
        return this.nome;
    }

    getEmail(): string{
        return this.email;
    }

    getSenha(): string{
        return this.senha;
    }

    getCpf(): string{
        return this.cpf;
    }

    getIdade(): number{
        return this.idade;
    }

    getEstado(): string{
        return this.estado;
    }

    getCep(): string{
        return this.cep;
    }

    getDescricao(): string{
        return this.descricao;
    }

    getFormacao(): string{
        return this.formacao;
    }

    getExperiencia(): string{
        return this.experiencia;
    }

    getHabilidades(): string[]{
        return this.habilidades;
    }

    setLinkedin(linkedin: string): void{
        this.linkedin = linkedin;
    }
    setTelefone(telefone: string): void{
        this.telefone = telefone;
    }
    setTitulo(titulo: string): void{
        this.titulo = titulo;
    }

    setNome(nome: string): void{
        this.nome = nome;
    }

    setEmail(email: string): void{
        this.email = email;
    }

    setSenha(senha: string): void{
        this.senha = senha;
    }

    setCpf(cpf: string): void{
        this.cpf = cpf;
    }

    setIdade(idade: number): void{
        this.idade = idade;
    }

    setEstado(estado: string): void{
        this.estado = estado;
    }
    
    setCep(cep: string): void{
        this.cep = cep;
    }

    setDescricao(descricao: string): void{
        this.descricao = descricao;
    }

    setFormacao(formacao: string): void{
        this.formacao = formacao;
    }

    setExperiencia(experiencia: string): void{
        this.experiencia = experiencia;
    }

    setHabilidades(habilidades: string[]): void{
        this.habilidades = habilidades;
    }
}




// Cadastro
const inputEmailIndex = document.getElementById('email') as HTMLInputElement;
const inputSenhaIndex = document.getElementById('senha') as HTMLInputElement;
const inputConfirmaIndex = document.getElementById('confirmarSenha') as HTMLInputElement;
const candidatoInputIndex = document.getElementById('candidatoBotao') as HTMLInputElement;
const empresaInputIndex = document.getElementById('empresaBotao') as HTMLInputElement;
const botaoIndex = document.getElementById('botaoCadastrar') as HTMLButtonElement;
const seuNomeElementIndex = document.getElementById('seuNome');
const seuNomeElement = document.getElementById('seuNome');
const inputsCadastro = document.getElementsByClassName('inputCadastro')  as HTMLCollectionOf<HTMLInputElement>;
const inputsEdicaoC = document.getElementsByClassName('inputEdicao')  as HTMLCollectionOf<HTMLInputElement>;
const inputsEdicaoE = document.getElementsByClassName('inputEdicao')  as HTMLCollectionOf<HTMLInputElement>;
let usuarioIndex: string;
let emailIndex: string;
let senhaIndex: string;
const validarEmail = /\S+@\w+\.\w{2,6}(\.\w{2})?/g;


function validar(): boolean {
    if (window.location.pathname.endsWith('/paginainicial.html')) {
        for(let i = 0; i < inputsCadastro.length; i++){
            if (inputsCadastro[i].value === '') {
                alert(`${inputsCadastro[i].id} é obrigatório`);
                return false;
            }
        }
        if(!validarEmail.test(inputEmailIndex.value)){
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
    }else if(window.location.pathname.endsWith('/edicaoC.html')){
        for(let i = 0; i < (inputsEdicaoC.length - 1); i++){
            if (inputsEdicaoC[i].value === '') {
                alert(`${inputsEdicaoC[i].id} é obrigatório`);
                return false;
            }
        }
        if(listaHab.length < 3) {
            alert('Adicione pelo menos 3 habilidades');
            return false;
        }
        if(!validarLinkedin.test(inputLinkedin.value)){
            alert('Linkedin inválido');
            return false
        }
        if(!validarTelefone.test(inputTelefone.value)){
            alert('Telefone inválido');
            return false    
        }
        if(!validarCpf.test(inputcpf.value)){
            alert('CPF inválido');
            return false    
        }
        if(!validarCep.test(inputcep.value)){
            alert('CEP inválido');
            return false    
        }

    }else if(window.location.pathname.endsWith('/edicaoE.html')){
        for(let i = 0; i < (inputsEdicaoE.length - 1); i++){
            if (inputsEdicaoE[i].value === '') {
                alert(`${inputsEdicaoE[i].id} é obrigatório`);
                return false;
            }
        }
        if(!validarCnpj.test(inputCnpj.value)){
            alert('CNPJ inválido');
            return false    
        }
        if(!validarCep.test(inputcep.value)){
            alert('CEP inválido');
            return false    
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
        } else if (empresaInputIndex.checked) {
            usuarioIndex = 'empresa';
            alert(`Usuário ${usuarioIndex} cadastrado com sucesso!`);
            window.location.href = 'edicaoE.html';
        }
        emailIndex = inputEmailIndex.value;
        senhaIndex = inputSenhaIndex.value;

    }
}

// Edicao C
const inputLinkedin = document.getElementById('linkedin') as HTMLInputElement;
const inputTelefone = document.getElementById('telefone') as HTMLInputElement;
const inputNomeIndex = document.getElementById('nome') as HTMLInputElement;
const inputcpf = document.getElementById('cpf') as HTMLInputElement;
const inputidade = document.getElementById('idade') as HTMLInputElement;
const inputestado = document.getElementById('estado') as HTMLInputElement;
const inputcep = document.getElementById('cep') as HTMLInputElement;
const inputdescricao = document.getElementById('descricao') as HTMLInputElement;
const inputformacao = document.getElementById('formacao') as HTMLInputElement;
const inputexperiencia = document.getElementById('experiencia') as HTMLInputElement;
const inputhabilidades = document.getElementById('habilidades') as HTMLInputElement;
const botaoSalvar = document.getElementById('botaoSalvar') as HTMLButtonElement;
const divHabilidades = document.getElementById('divHab') as HTMLDivElement;
let candidato: CandidatoIndex | undefined;
let listaHab: string[] = [];
const validarCpf = /\d{3}\.\d{3}\.\d{3}-\d{2}/g;
const validarCep = /\d{5}-\d{3}/g;
const validarTelefone = /\(\d{2}\)\s?\d{4,5}-\d{4}/g;
const validarLinkedin = /(https:\/\/)?www\.linkedin\.com\/in\/\w+/g;

function mudarNome(nome: string) {
    if (seuNomeElement) {
        seuNomeElement.textContent = nome;
    } 
}

function escreverHab(){
    if(inputhabilidades.value !== '') {
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

function salvar(email: string, senha: string) {
    if(validar()){
        alert('Salvo com sucesso');
        if(window.location.pathname.endsWith('/edicaoC.html')){
            candidato = new CandidatoIndex(inputNomeIndex.value, email, senha, inputcpf.value, parseInt(inputidade.value), inputestado.value, inputcep.value, inputdescricao.value, inputformacao.value, inputexperiencia.value, listaHab, "", inputTelefone.value, inputLinkedin.value);
            localStorage.setItem('candidato', JSON.stringify(candidato));
            window.location.href = 'perfilC.html';
        }else if(window.location.pathname.endsWith('/edicaoE.html')){
            const vaga = new Vaga(tituloVaga.value, descricaoVaga.value, habilidadesVaga.value, parseInt(salarioVaga.value));
            const empresa = new Empresa(inputNomeEmpresa.value, emailIndex, senhaIndex, inputCnpj.value, inputPais.value, inputEstado.value, inputCep.value, inputDescricao.value, vaga);
            localStorage.setItem('vaga', JSON.stringify(vaga));
            localStorage.setItem('empresa', JSON.stringify(empresa));
            window.location.href = 'perfilE.html';
        }  
    }
}

// Perfil c
const pLinkedin = document.getElementById("linkedin") as HTMLElement;
const pTelefone = document.getElementById("telefone") as HTMLElement;
const h3Nome = document.getElementById("seuNome") as HTMLElement;
const pCpf = document.getElementById("cpf") as HTMLElement;
const pidade = document.getElementById("idade") as HTMLElement;
const pestado = document.getElementById("estado") as HTMLElement;
const pcep = document.getElementById("cep") as HTMLElement;
const pdescricao = document.getElementById("descricao") as HTMLElement;
const pexperiencia = document.getElementById("experiencia") as HTMLElement;
const pformacao = document.getElementById("formacao") as HTMLElement;
const divHabilidadesEdicao = document.getElementById("divHabilidades") as HTMLDivElement;
const inputTitulo = document.getElementById("interesses") as HTMLInputElement;
const tituloCard = document.getElementById("interessesP") as HTMLElement;
const formacaoCard = document.getElementById("formacaoP") as HTMLElement;
const divHabilCard = document.getElementById("divHabilidadesCard") as HTMLDivElement;
const botaoEditarC = document.getElementById('botaoEditar') as HTMLButtonElement;

function pegarTitulo(){
    const candidatoData = localStorage.getItem('candidato');
    if(inputTitulo.value !== ''){
        const candidato = candidatoData ? JSON.parse(candidatoData) : null;
        tituloCard.textContent = inputTitulo.value;
        candidato.setTitulo(inputTitulo.value);
        inputTitulo.value = '';
    }
}

function mudarDados(){
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
        for(let i = 0; i < candidato.habilidades.length; i++){
            var divHabilidadeX = document.createElement('div');
            divHabilidadeX.classList.add("phabilidades");
            divHabilidadesEdicao.appendChild(divHabilidadeX);
            var habilidade = document.createElement('p');
            habilidade.textContent = candidato.habilidades[i];
            habilidade.classList.add("pHa");
            divHabilidadeX.appendChild(habilidade);
        }
        for(let i = 0; i < candidato.habilidades.length; i++){
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

function editarC(){
    window.location.href = 'edicaoC.html';
}

// classe empresa
class Empresa{
    private nome: string;
    private email: string;
    private senha: string;
    private cnpj: string;
    private pais: string;
    private estado: string;
    private cep: string;
    private descricao: string;
    private vagas: Vaga;

    constructor(nome: string, email: string, senha: string, cnpj: string, pais: string, estado: string, cep: string, descricao: string, vagas: Vaga){
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

    getVagas(): Vaga{
        return this.vagas;
    }
    getNome(): string{
        return this.nome;
    }       
    getEmail(): string{ 
        return this.email;
    }
    getSenha(): string{
        return this.senha;
    }
    getCnpj(): string{
        return this.cnpj;
    }
    getPais(): string{
        return this.pais;
    }
    getEstado(): string{
        return this.estado;
    }
    getCep(): string{
        return this.cep;
    }
    getDescricao(): string{
        return this.descricao;
    }
    setVagas(vagas: Vaga): void{
        this.vagas = vagas;
    }
    setNome(nome: string): void{    
        this.nome = nome;
    }
    setEmail(email: string): void{
        this.email = email;
    }
    setSenha(senha: string): void{
        this.senha = senha;
    }
    setCnpj(cnpj: string): void{
        this.cnpj = cnpj;
    }
    setPais(pais: string): void{
        this.pais = pais;
    }
    setEstado(estado: string): void{
        this.estado = estado;
    }
    setCep(cep: string): void{
        this.cep = cep;
    }
    setDescricao(descricao: string): void{
        this.descricao = descricao;
    }
}

// Edicao E
const inputNomeEmpresa = document.getElementById('nome') as HTMLInputElement;
const inputCnpj = document.getElementById('cnpj') as HTMLInputElement;
const inputPais = document.getElementById('pais') as HTMLInputElement;
const inputEstado = document.getElementById('estado') as HTMLInputElement;
const inputCep = document.getElementById('cep') as HTMLInputElement;
const inputDescricao = document.getElementById('sobre') as HTMLInputElement;
const botaoSalvarE = document.getElementById('botaoSalvarE') as HTMLButtonElement;
const tituloVaga = document.getElementById('tituloVaga') as HTMLInputElement;
const descricaoVaga = document.getElementById('descricaoVaga') as HTMLInputElement;
const habilidadesVaga = document.getElementById('requisitos') as HTMLInputElement;
const salarioVaga = document.getElementById('salario') as HTMLInputElement;
let empresa: Empresa | undefined;
const validarCnpj = /\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}/g;


// perfil E
const h3NomeE = document.getElementById("seuNome") as HTMLElement;
const pCnpj = document.getElementById("cnpj") as HTMLElement;
const pPais = document.getElementById("pais") as HTMLElement;
const pEstado = document.getElementById("estado") as HTMLElement;
const pCep = document.getElementById("cep") as HTMLElement;
const pDescricao = document.getElementById("descricao") as HTMLElement;
const botaoEditarE = document.getElementById('botaoEditarE') as HTMLButtonElement;
const tituloVagaCard = document.getElementById('tituloVaga') as HTMLElement;
const descricaoVagaCard = document.getElementById('descricaope') as HTMLElement;
const habilidadesVagaCard = document.getElementById('requisisitop') as HTMLElement;
const salarioVagaCard = document.getElementById('salariop') as HTMLElement;

class Vaga{
    private titulo: string;
    private descricao: string;
    private habilidades: string;
    private salario: number;

    constructor(titulo: string, descricao: string, habilidades: string, salario: number){
        this.titulo = titulo;
        this.descricao = descricao;
        this.habilidades = habilidades;
        this.salario = salario;
    }

    getTitulo(): string{
        return this.titulo;
    }
    getDescricao(): string{
        return this.descricao;
    }
    getHabilidades(): string{
        return this.habilidades;
    }
    getSalario(): number{    
        return this.salario;
    }
    setTitulo(titulo: string): void{
        this.titulo = titulo;
    }
    setDescricao(descricao: string): void{
        this.descricao = descricao;
    }
    setHabilidades(habilidades: string): void{
        this.habilidades = habilidades;
    }
    setSalario(salario: number): void{
        this.salario = salario;
    }
}

function mudarDadosE(){
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
    const botaoVaga = document.getElementById('botaoVagas') as HTMLButtonElement;
    const botaoPerfilC = document.getElementById('botaoPerfilC') as HTMLButtonElement;
    const botaoCandidatos = document.getElementById('botaCandidatos') as HTMLButtonElement;
    const botaoPerfilE = document.getElementById('botaoPerfilE') as HTMLButtonElement;

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
    if(botaoCandidatos){
        botaoCandidatos.addEventListener('click', () => {
            window.location.href = 'opcoesC.html';
        });
    }
    if(botaoPerfilE){
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

    if(window.location.pathname.endsWith('/edicaoE.html')){
        if(botaoSalvarE){
            botaoSalvarE.addEventListener('click', () => salvar(emailIndex, senhaIndex));
        }
    }
    if(window.location.pathname.endsWith('/perfilE.html')){
        mudarDadosE();
        if(botaoEditarE){
            botaoEditarE.addEventListener('click', () => {
                window.location.href = 'edicaoE.html';
            });
        }
    }

    if(window.location.pathname.endsWith('/edicaoC.html')) {
        console.log("oi");
        if (inputhabilidades) {
            inputhabilidades.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    escreverHab();
                }
            });
        }
        if(botaoSalvar){
            botaoSalvar.addEventListener('click', () => salvar(emailIndex, senhaIndex));
        }
    }

    if(window.location.pathname.endsWith('/perfilC.html')){
        console.log("oi");
        mudarDados();
        if(inputTitulo){
            inputTitulo.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    pegarTitulo();
                }
            });
        }  
        if(botaoEditarC){
            botaoEditarC.addEventListener('click', editarC);
        } 
    }
});