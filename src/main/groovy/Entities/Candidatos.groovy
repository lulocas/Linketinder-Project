package Entities

class Candidatos{
    private String Nome;
    private String Email;
    private int Idade;
    private String Estado;
    private String Cep;
    private String Descricao;
    private ArrayList<String> Competencias;

    Candidatos(nome, email, idade, estado, cep, descricao, competencias){
        Nome = nome
        Email = email
        Idade = idade
        Estado = estado
        Cep = cep
        Descricao = descricao
        Competencias = competencias
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

    int getIdade(){
        return this.Idade;
    }

    String getEstado(){
        return this.Estado;
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