package Application

import Entities.Cadastro
import Entities.Candidatos
import Entities.Empresas

class App {


    static void main(String[] args) {
        ArrayList<Candidatos> candidatos = new ArrayList<Candidatos>()
        ArrayList<Empresas> empresas = new ArrayList<Empresas>()

        def c1 = new Candidatos('João Pedro Silva', 'joaopedro.silva@email.com', 32, 'São Paulo', '05405-000', 'Profissional experiente em desenvolvimento de software com mais de 8 anos de experiência em liderança de projetos e equipe. Estou sempre procurando por novas oportunidades para crescer e aprender.', ['Java', 'Groovy', 'HTML'])
        def c2 = new Candidatos('Maria Luiza Santos', 'marialuiza.santos@email.com', 41, 'Rio de Janeiro', '20020-020', 'Desenvolvedora de software com mais de 10 anos de experiência em tecnologias web e mobile. Estou sempre atualizando minhas habilidades para se manter atualizada com as últimas tendências', ['Desenvolvimento de software', 'Tecnologias web', 'Desenvolvimento de aplicativos móveis'])
        def c3 = new Candidatos('Carlos Alexandre Rocha', 'carlos.rocha@email.com', 29, 'Minas Gerais', '30510-010', 'Desenvolvedor de software com experiência em tecnologias de backend e frontend. Estou sempre procurando por novas oportunidades para aplicar minhas habilidades.', ['Desenvolvimento de software', 'Tecnologias de backend', 'Tecnologias de frontend'])
        def c4 = new Candidatos('Ana Carolina Oliveira', 'ana.oliveira@email.com', 38, 'Bahia', '40130-010', 'Gerente de projetos com mais de 12 anos de experiência em liderança de equipe e gerenciamento de projetos. Estou sempre procurando por novas oportunidades para aplicar minhas habilidades.', ['Liderança de equipe', 'Gerenciamento de projetos', 'Planejamento estratégico'])
        def c5 = new Candidatos('Luiz Fernando Lima', 'luiz.lima@email.com', 45, 'Paraná', '80210-010', 'Desenvolvedor de software com mais de 15 anos de experiência em tecnologias de software e sistemas. Estou sempre procurando por novas oportunidades para aplicar minhas habilidades.', ['Desenvolvimento de software', 'Tecnologias de software', 'Sistemas de informação'])
        candidatos.add(c1)
        candidatos.add(c2)
        candidatos.add(c3)
        candidatos.add(c4)
        candidatos.add(c5)

        def e1 = new Empresas('TechCorp', 'contato@techcorp.com', '23.456.789/0001-12', 'Brasil', 'São Paulo', '05405-000', 'Empresa de tecnologia que desenvolve soluções inovadoras para empresas de todo o Brasil.', ['Desenvolvimento de software', 'Liderança de equipe', 'Gerenciamento de projetos', 'Tecnologias web e mobile'])
        def e2 = new Empresas('GreenEnergy', 'contato@greenenergy.com', '45.678.901/0002-34', 'Brasil', 'Rio de Janeiro', '20020-020', 'Empresa de energia renovável que busca desenvolver soluções sustentáveis para o futuro.', ['Engenharia', 'Desenvolvimento de software', 'Análise de dados', 'Tecnologias de energia renovável'])
        def e3 = new Empresas('FinTech Solutions', 'contato@fintechsolutions.com', '67.890.123/0003-56', 'Brasil', 'Minas Gerais', '30510-010', 'Empresa de tecnologia financeira que desenvolve soluções inovadoras para o setor financeiro.', ['Desenvolvimento de software', 'Análise de dados', 'Tecnologias de blockchain', 'Segurança cibernética'])
        def e4 = new Empresas('Healthcare Solutions', 'contato@healthcaresolutions.com', '89.012.345/0004-78', 'Brasil', 'Bahia', '40130-010', 'Empresa de tecnologia de saúde que desenvolve soluções inovadoras para o setor de saúde.', ['Desenvolvimento de software', 'Análise de dados', 'Tecnologias de saúde', 'Segurança cibernética'])
        def e5 = new Empresas('EduTech Solutions', 'contato@edutechsolutions.com', '10.234.567/0005-90', 'Brasil', 'Paraná', '80210-010', 'Empresa de tecnologia educacional que desenvolve soluções inovadoras para o setor educacional.', ['Desenvolvimento de software', 'Análise de dados', 'Tecnologias de educação', 'Planejamento estratégico'])
        empresas.add(e1)
        empresas.add(e2)
        empresas.add(e3)
        empresas.add(e4)
        empresas.add(e5)

        menu(candidatos, empresas)

    }

    static def menu(ArrayList<Candidatos> candidatos, ArrayList<Empresas> empresas) {
        int opc = 0
        Scanner sc = new Scanner(System.in)
        while (opc != 5) {
            println '1 - Listar empresas'
            println '2 - Listar candidatos'
            println '3 - Listar empresas e candidatos'
            println '4 - Cadastrar'
            println '5 - Sair'
            print 'Escolha uma opção: '
            opc = sc.nextInt()
            println ' '

            switch (opc) {
                case 1:
                    listarEmpresas(empresas)
                    break
                case 2:
                    listarCandidatos(candidatos)
                    break
                case 3:
                    listar(candidatos, empresas)
                    break
                case 4:
                    cadastro(candidatos, empresas)
                    break
                case 5:
                    println 'Tchau!'
                    break
                default:
                    println 'Essa opção não existe'
                    println ' '
                    break
            }
        }
    }

    def listarEmpresas(ArrayList<Empresas> empresas) {
        println 'Empresas: '
        println ' '
        for (Empresas empresa : empresas) {
            println empresa
            println ' '
        }
    }

    def listarCandidatos(ArrayList<Candidatos> candidatos) {
        println 'Candidatos: '
        println ' '
        for (Candidatos candidato : candidatos) {
            println candidato
            println ' '
        }
    }

    def listar(ArrayList<Candidatos> candidatos, ArrayList<Empresas> empresas) {
        println 'Candidatos: '
        println ' '
        for (Candidatos candidato : candidatos) {
            println candidato
            println ' '
        }
        println 'Empresas: '
        println ' '
        for (Empresas empresa : empresas) {
            println empresa
            println ' '
        }
    }

    def cadastro(ArrayList<Candidatos> candidatos, ArrayList<Empresas> empresas) {
        int opc = 0
        Scanner sc = new Scanner(System.in)
        println '1 - Candidato'
        println '2 - Empresa'
        print 'Como deseja cadastrar: '
        opc = sc.nextInt()

        if (opc == 1) {
            cadastroCandidatos(candidatos)
        } else if (opc == 2) {
            cadastroEmpresas(empresas)
        } else {
            println ' '
            println 'Não existe essa opção'
            println ' '
        }
    }

    def cadastroCandidatos(ArrayList<Candidatos> candidatos) {
        Cadastro cadastro = new Cadastro()
        Scanner sc = new Scanner(System.in)
        int aux = 0
        println ' '
        while (aux == 0) {
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
            for (int i = 0; i < 3; i++) {
                print 'Competência ' + (i + 1) + ': '
                def competencia = sc.nextLine()
                competencias.add(competencia)
            }
            if (nome.isEmpty() || email.isEmpty() || idade.toString().isEmpty() || estado.isEmpty() || cep.isEmpty() || descricao.isEmpty()) {
                println 'Não pode deixar categorias vazias'
            } else {
                aux = 1
                def candidato = new Candidatos(nome, email, idade, estado, cep, descricao, competencias)
                cadastro.cadastroCandidato(candidatos, candidato)
            }
        }
    }

    def cadastroEmpresas(ArrayList<Empresas> empresas) {
        Cadastro cadastro = new Cadastro()
        Scanner sc = new Scanner(System.in)
        int aux = 0
        println ' '
        while (aux == 0) {
            print 'Nome: '
            def nome = sc.nextLine()
            print 'Email: '
            def email = sc.nextLine()
            print 'CNPJ: '
            def cnpj = sc.nextLine()
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
            for (int i = 0; i < 3; i++) {
                print 'Competência ' + (i + 1) + ': '
                def competencia = sc.nextLine()
                competencias.add(competencia)
            }
            if (nome.isEmpty() || email.isEmpty() || cnpj.toString().isEmpty() || pais.isEmpty() || estado.isEmpty() || cep.isEmpty() || descricao.isEmpty()) {
                println 'Não pode deixar categorias vazias'
            } else {
                aux = 1
                def empresa = new Empresas(nome, email, cnpj, pais, estado, cep, descricao, competencias)
                cadastro.cadastroEmpresa(empresas, empresa)
            }
        }
    }
}