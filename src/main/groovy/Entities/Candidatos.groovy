package Entities

class Candidatos{
    private String Nome;
    private String Sobrenome;
    private String Email;
    private String Aniversario;
    private String Cpf;
    private String Cep;
    private String Descricao;
    private String Senha;
    private ArrayList<String> Competencias;

    Candidatos(nome, sobrenome, aniversario, email, cpf, cep, descricao, senha){
        Nome = nome
        Email = email
        Sobrenome = sobrenome
        Aniversario = aniversario
        Cpf = cpf
        Cep = cep
        Senha = senha
        Descricao = descricao
        Competencias = competencias
    }

    void setSobrenome(String sobrenome){
        Sobrenome = sobrenome;
    }

    void setAniversario(String aniversario){
        Aniversario = aniversario;
    }

    void setSenha(String senha){
        Senha = senha;
    }

    void setCpf(String cpf){
        Cpf = cpf;
    }

    String getSobrenome(){
        return this.Sobrenome;
    }

    String getAniversario(){
        return this.Aniversario;
    }

    String getSenha(){
        return this.Senha;
    }

    String getCpf(){
        return this.Cpf;
    }

    void setCompetencias(ArrayList<String> competencias){
        Competencias = competencias;
    }

    void setNome(String nome){
        Nome = nome;
    }

    void setEmail(String email){
        Email = email;
    }

    void setIdade(int idade){
        Idade = idade;
    }

    void setEstado(String estado){
        Estado = estado;
    }

    void setCep(String cep){
        Cep = cep;
    }

    void setDescricao(String descricao){
        Descricao = descricao;
    }

    String getNome(){
        return this.Nome;
    }

    String getEmail(){
        return this.Email;
    }

    String getCep(){
        return this.Cep;
    }

    String getDescricao(){
        return this.Descricao;
    }

    ArrayList<String> getCompetencias(){
        return this.Competencias;
    }

    String toString(){
        return "Nome: " + nome + ", " + idade + " anos" + "\nEmail: " + Email + "\nEstado: " + Estado + "\nCEP: " + Cep + "\nDescrição: " + Descricao + "\nCompetências: " + Competencias
    }
}