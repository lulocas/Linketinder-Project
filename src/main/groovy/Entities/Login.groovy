package Entities

import groovy.sql.Sql

class Login {

    def logar(Sql sql){
        Scanner sc = new Scanner(System.in)
        print 'Email do usuario: '
        String email = sc.nextLine()
        print 'Senha: '
        String senha = sc.nextLine()

        if(verificacao(sql, email, senha)){
            println 'Usuario logado!'
            println " "
        }else{
            println 'Usuario não encontrado'
            println " "
        }
    }

    boolean verificacao(Sql sql, String email, String senha){
        def emailExiste = sql.firstRow(
                "SELECT email FROM candidato WHERE email = ? UNION SELECT email FROM empresa WHERE email = ?",
                [email, email]
        )

        if (!emailExiste) {
            return false
        }

        def senhaExiste = sql.firstRow(
                "SELECT senha FROM candidato WHERE senha = ? UNION SELECT senha FROM empresa WHERE senha = ?",
                [senha, senha]
        )

        if (!senhaExiste) {
            return false
        }

        return true
    }
}
