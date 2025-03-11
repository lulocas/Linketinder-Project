export class Candidato{
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