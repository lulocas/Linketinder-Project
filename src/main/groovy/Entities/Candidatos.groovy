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

    static def cadastroCandidato(ArrayList<Candidatos> candidatos){
        Scanner sc = new Scanner(System.in)
        int aux = 0
        int i = 0
        println ' '
        while(aux == 0){
            print 'Nome: '
            def nome = sc.nextLine()
            print 'Email: '
            def email = sc.nextLine()
            print 'Idade: '
            def idade = sc.nextInt()
            sc.nextLine()
            print 'Estado: '
            def estado = sc.nextLine()
            print 'CEP: '
            def cep = sc.nextLine()
            print 'Descrição: '
            def descricao = sc.nextLine()
            ArrayList<String> competencias = new ArrayList<String>()
            println 'Escreva 3 competências'
            while(i < 3){
                print 'Competência ' + (i+1) + ': '
                def competencia = sc.nextLine()
                competencias.add(competencia)
                i++
            }
            if(nome == null || email == null || idade == null || estado == null || cep == null || descricao == null){
                println 'Não pode deixar categorias vazias'
            }else{
                aux = 1
                def candidato = new Candidatos(nome, email, idade, estado, cep, descricao, competencias)
                candidatos.add(candidato)
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