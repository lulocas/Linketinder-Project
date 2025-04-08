package Entities
import groovy.sql.Sql

class Conexao {
    def url = 'jdbc:postgresql://localhost:5432/linketinderdb'
    def user = 'postgres'
    def password = 'luiluisa10'

    def sql = Sql.newInstance(url, user, password, 'org.postgresql.Driver')

    /* def listCandidatos(Sql sql) {
        println 'Candidatos:'
        sql.eachRow("SELECT * FROM candidato") { row ->
            println "ID: ${row.id}, Nome: ${row.nome} ${row.sobrenome}, Data de Aniversário: ${row.data_aniversario}, Email: ${row.email}, CPF: ${row.cpf}, CEP: ${row.cep}, Descrição: ${row.descricao}, ID Competência: ${row.id_competencia}"
        }
    }


    def listarEmpresas(Sql sql) {
        println 'Empresas:'
        sql.eachRow("SELECT * FROM empresa") { row ->
            println "ID: ${row.id}, Nome: ${row.nome}, Email: ${row.email}, CNPJ: ${row.cnpj}, CEP: ${row.cep}, Descrição: ${row.descricao}, País: ${row.pais}"
        }
    } */

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


