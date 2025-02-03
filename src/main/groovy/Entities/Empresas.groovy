package Entities

class Empresas{
    private String Nome
    private String Email
    private String CNPJ
    private String Pais
    private String Estado
    private String CEP
    private String Descricao
    private ArrayList<String> Competencias

    Empresas(nome, email, cnpj, pais, estado, cep, descricao, competencias){
        Nome = nome
        Email = email
        CNPJ = cnpj
        Pais = pais
        Estado = estado
        CEP = cep
        Descricao = descricao
        Competencias = competencias
    }

    static def cadastroEmpresa(ArrayList<Empresas> empresas){
        Scanner sc = new Scanner(System.in)
        int aux = 0
        int i = 0
        println ' '
        while(aux == 0) {
            print 'Nome: '
            def nome = sc.nextLine()
            print 'Email: '
            def email = sc.nextLine()
            print 'CNPJ: '
            def cnpj = sc.nextInt()
            sc.nextLine()
            print 'País: '
            def pais = sc.nextLine()
            print 'Estado: '
            def estado = sc.nextLine()
            print 'CEP: '
            def cep = sc.nextLine()
            print 'Descrição: '
            def descricao = sc.nextLine()
            ArrayList<String> competencias = new ArrayList<String>()
            println 'Escreva 3 competências que se espera dos candidatos: '
            while (i < 3) {
                print 'Competência ' + (i + 1) + ': '
                def competencia = sc.nextLine()
                competencias.add(competencia)
                i++
            }
            if (nome == null || email == null || cnpj == null || pais == null || estado == null || cep == null || descricao == null) {
                println 'Não pode deixar categorias vazias'
            } else {
                aux = 1
                def empresa = new Empresas(nome, email, cnpj, pais, estado, cep, descricao, competencias)
                empresas.add(empresa)
            }
        }
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