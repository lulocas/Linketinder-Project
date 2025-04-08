package Entities

import groovy.sql.Sql

class Atualizar {

    def atualizarEmpresa(Sql sql) {
        Scanner sc = new Scanner(System.in)

        println 'Atualização de Empresa:'
        print 'Informe o ID da empresa que deseja atualizar: '
        int id = sc.nextInt()
        sc.nextLine()

        println 'Digite os novos dados para a empresa (deixe em branco para não alterar):'

        print 'Nome (atualizar): '
        def nome = sc.nextLine()
        print 'Email (atualizar): '
        def email = sc.nextLine()
        print 'CNPJ (atualizar): '
        def cnpj = sc.nextLine()
        print 'CEP (atualizar): '
        def cep = sc.nextLine()
        print 'Descrição (atualizar): '
        def descricao = sc.nextLine()
        print 'Senha (atualizar): '
        def senha = sc.nextLine()
        print 'País (atualizar): '
        def pais = sc.nextLine()

        def updateQuery = """
        UPDATE empresa SET
        nome = COALESCE(?, nome),
        email = COALESCE(?, email),
        cnpj = COALESCE(?, cnpj),
        cep = COALESCE(?, cep),
        descricao = COALESCE(?, descricao),
        senha = COALESCE(?, senha),
        pais = COALESCE(?, pais)
        WHERE id = ?
        """
        sql.executeUpdate(updateQuery, [nome ?: null, email ?: null, cnpj ?: null, cep ?: null, descricao ?: null, senha ?: null, pais ?: null, id])
        println 'Empresa atualizada com sucesso!'
    }


    def atualizarCandidato(Sql sql) {
        Scanner sc = new Scanner(System.in)

        println 'Atualização de Candidato:'
        print 'Informe o ID do candidato que deseja atualizar: '
        int id = sc.nextInt()
        sc.nextLine()

        println 'Digite os novos dados para o candidato (deixe em branco para não alterar):'

        print 'Nome (atualizar): '
        def nome = sc.nextLine()
        print 'Sobrenome (atualizar): '
        def sobrenome = sc.nextLine()
        print 'Data de Aniversário (atualizar): '
        def dataAniversario = sc.nextLine()
        print 'Email (atualizar): '
        def email = sc.nextLine()
        print 'CPF (atualizar): '
        def cpf = sc.nextLine()
        print 'CEP (atualizar): '
        def cep = sc.nextLine()
        print 'Descrição (atualizar): '
        def descricao = sc.nextLine()
        print 'Senha (atualizar): '
        def senha = sc.nextLine()
        print 'ID Competência (atualizar): '
        def idCompetencia = sc.nextLine()

        def updateQuery = """
        UPDATE candidato SET
        nome = COALESCE(?, nome),
        sobrenome = COALESCE(?, sobrenome),
        data_aniversario = COALESCE(?, data_aniversario),
        email = COALESCE(?, email),
        cpf = COALESCE(?, cpf),
        cep = COALESCE(?, cep),
        descricao = COALESCE(?, descricao),
        senha = COALESCE(?, senha),
        id_competencia = COALESCE(?, id_competencia)
        WHERE id = ?
        """
        sql.executeUpdate(updateQuery, [nome ?: null, sobrenome ?: null, dataAniversario ?: null, email ?: null, cpf ?: null, cep ?: null, descricao ?: null, senha ?: null, idCompetencia ?: null, id])
        println 'Candidato atualizado com sucesso!'
    }
}
