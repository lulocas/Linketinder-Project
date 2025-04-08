package Entities

import groovy.sql.Sql

class Listar {

    def listarCandidatos(Sql sql) {
        println 'Candidatos:'
        sql.eachRow("SELECT * FROM candidato") { row ->
            println "ID: ${row.id}, Nome: ${row.nome} ${row.sobrenome}, Data de Aniversário: ${row.data_aniversario}, Email: ${row.email}, CPF: ${row.cpf}, CEP: ${row.cep}, Descrição: ${row.descricao}, ID Competência: ${row.id_competencia}"
        }
        println " "
    }


    def listarEmpresas(Sql sql) {
        println 'Empresas:'
        sql.eachRow("SELECT * FROM empresa") { row ->
            println "ID: ${row.id}, Nome: ${row.nome}, Email: ${row.email}, CNPJ: ${row.cnpj}, CEP: ${row.cep}, Descrição: ${row.descricao}, País: ${row.pais}"
        }
        println " "
    }
}
