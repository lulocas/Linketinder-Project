package Entities

class Empresas{
    private String Nome
    private String Email
    private String CNPJ
    private String Pais
    private String Estado
    private String CEP
    private String Descricao
    private String Senha
    private ArrayList<String> Competencias

    Empresas(nome, email, cnpj, pais, estado, cep, descricao, senha){
        Nome = nome
        Email = email
        CNPJ = cnpj
        Pais = pais
        Estado = estado
        CEP = cep
        Descricao = descricao
        Senha = senha
    }

    void setCompetencias(ArrayList<String> competencias){
        Competencias = competencias;
    }
    void setSenha(String senha){
        Senha = senha;
    }

    void setNome(String nome){
        Nome = nome;
    }

    void setEmail(String email){
        Email = email;
    }

    void setCNPJ(String cnpj){
        CNPJ = cnpj
    }

    void setPais(String pais){
        Pais = pais
    }

    void setEstado(String estado){
        Estado = estado;
    }

    void setCep(String cep){
        CEP = cep;
    }

    void setDescricao(String descricao){
        Descricao = descricao;
    }
    String getSenha(){
        return this.Senha;
    }

    String getNome(){
        return this.Nome;
    }

    String getEmail(){
        return this.Email;
    }

    String getCNPJ(){
        return this.CNPJ
    }

    String getPais(){
        return this.Pais;
    }

    String getEstado(){
        return this.Estado;
    }

    String getCEP(){
        return this.CEP;
    }

    String getDescricao(){
        return this.Descricao;
    }

    ArrayList<String> getCompetencias(){
        return this.Competencias;
    }

    String toString(){
        return "Nome: " + Nome + "\nEmail: " + Email + "\nCNPJ: " + CNPJ + "\nLocalizado: " + Estado + ", " + Pais + "\nCEP: " + CEP + "\nDescrição: " + Descricao + "\nHabilidades esperadas: " + Competencias
    }
}