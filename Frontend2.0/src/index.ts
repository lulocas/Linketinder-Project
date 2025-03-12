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

    constructor(nome: string, email: string, senha: string, cpf: string, idade: number, estado: string, cep: string, descricao: string, formacao: string, experiencia: string, habilidades: string[]){
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
const inputNomeIndex = document.getElementById('nome') as HTMLInputElement;
const inputEmailIndex = document.getElementById('email') as HTMLInputElement;
const inputSenhaIndex = document.getElementById('senha') as HTMLInputElement;
const inputConfirmaIndex = document.getElementById('confirmarSenha') as HTMLInputElement;
const candidatoInputIndex = document.getElementById('candidatoBotao') as HTMLInputElement;
const empresaInputIndex = document.getElementById('empresaBotao') as HTMLInputElement;
const botaoIndex = document.getElementById('botaoCadastrar') as HTMLButtonElement;
const seuNomeElementIndex = document.getElementById('seuNome');
const seuNomeElement = document.getElementById('seuNome');
let usuarioIndex: string;
let nomeIndex: string;
let emailIndex: string;
let senhaIndex: string;

function validar(): boolean {
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
        } else if (empresaInputIndex.checked) {
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

function mudarNome(nome: string) {
    if (seuNomeElement) {
        seuNomeElement.textContent = nome;
    } 
}

function validarEdicao(): boolean {
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
    if(listaHab.length < 3) {
        alert('Adicione pelo menos 3 habilidades');
        return false;
    }
    return true;
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

function salvar(nome : string, email: string, senha: string) {
    if(validarEdicao()){
        alert('Salvo com sucesso');
        candidato = new CandidatoIndex(nome, email, senha, inputcpf.value, parseInt(inputidade.value), inputestado.value, inputcep.value, inputdescricao.value, inputformacao.value, inputexperiencia.value, listaHab);
        localStorage.setItem('candidato', JSON.stringify(candidato));
        window.location.href = 'perfilC.html';
    }
}

// Perfil c
const h3Nome = document.getElementById("seuNome") as HTMLElement;
const pCpf = document.getElementById("cpf") as HTMLElement;
const pidade = document.getElementById("idade") as HTMLElement;
const pestado = document.getElementById("estado") as HTMLElement;
const pcep = document.getElementById("cep") as HTMLElement;
const pdescricao = document.getElementById("descricao") as HTMLElement;
const pexperiencia = document.getElementById("experiencia") as HTMLElement;
const pformacao = document.getElementById("formacao") as HTMLElement;

function mudarDados(){
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
            botaoSalvar.addEventListener('click', () => salvar(nomeIndex, emailIndex, senhaIndex));
        }
    }
    if(window.location.pathname.endsWith('/perfilC.html')){
        console.log("oi");
        mudarDados();
    }
});