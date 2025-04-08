package Entities

import groovy.sql.Sql

class Cadastro {

    def cadastroCandidatos(Sql sql) {
        Scanner sc = new Scanner(System.in)
        println 'Cadastro de Candidato:'
        print 'Nome: '
        def nome = sc.nextLine()
        print 'Sobrenome: '
        def sobrenome = sc.nextLine()
        print 'Data de Aniversário (YYYY-MM-DD): '
        def dataAniversarioInput = sc.nextLine()


        def dataAniversario = java.sql.Date.valueOf(dataAniversarioInput)

        print 'Email: '
        def email = sc.nextLine()
        print 'CPF: '
        def cpf = sc.nextLine()
        print 'CEP: '
        def cep = sc.nextLine()
        print 'Descrição: '
        def descricao = sc.nextLine()
        print 'Senha: '
        def senha = sc.nextLine()

        // def candidatoN = new Candidatos(nome, sobrenome, dataAniversarioInput, email, cpf, cep, descricao, senha)

        sql.executeInsert("INSERT INTO candidato (nome, sobrenome, data_aniversario, email, cpf, cep, descricao, senha) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
                [nome, sobrenome, dataAniversario, email, cpf, cep, descricao, senha])
        println 'Candidato cadastrado com sucesso!'
    }



    def cadastroEmpresas(Sql sql) {
        Scanner sc = new Scanner(System.in)
        println 'Cadastro de Empresa:'
        print 'Nome: '
        def nome = sc.nextLine()
        print 'Email: '
        def email = sc.nextLine()
        print 'CNPJ: '
        def cnpj = sc.nextLine()
        print 'CEP: '
        def cep = sc.nextLine()
        print 'Descrição: '
        def descricao = sc.nextLine()
        print 'Senha: '
        def senha = sc.nextLine()
        print 'País: '
        def pais = sc.nextLine()

        sql.executeInsert("INSERT INTO empresa (nome, email, cnpj, cep, descricao, senha, pais) VALUES (?, ?, ?, ?, ?, ?, ?)",
                [nome, email, cnpj, cep, descricao, senha, pais])
        println 'Empresa cadastrada com sucesso!'
    }
}
