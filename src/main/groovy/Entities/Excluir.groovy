package Entities

import groovy.sql.Sql

class Excluir {

    def excluirEmpresa(Sql sql) {
        Scanner sc = new Scanner(System.in)
        print 'Informe o ID da empresa que deseja excluir: '
        int id = sc.nextInt()
        sql.execute("DELETE FROM empresa WHERE id = ?", [id])
        println 'Empresa excluída com sucesso!'
    }


    def excluirCandidato(Sql sql) {
        Scanner sc = new Scanner(System.in)
        print 'Informe o ID do candidato que deseja excluir: '
        int id = sc.nextInt()
        sql.execute("DELETE FROM candidato WHERE id = ?", [id])
        println 'Candidato excluído com sucesso!'
    }
}
