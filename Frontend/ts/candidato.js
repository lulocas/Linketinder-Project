export class Candidato {
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
