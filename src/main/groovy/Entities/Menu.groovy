package Entities

class Menu {

    def conexao = new Conexao()
    def listar = new Listar()
    def cadastro = new Cadastro()
    def atualizar = new Atualizar()
    def excluir = new Excluir()
    def login = new Login()
    def sc = new Scanner(System.in)

    def mostrarOpcoes(opc){
        println '1 - Listar empresas'
        println '2 - Listar candidatos'
        println '3 - Listar empresas e candidatos'
        println '4 - Cadastrar'
        println '5 - Login'
        println '6 - Atualizar empresa'
        println '7 - Excluir empresa'
        println '8 - Atualizar candidato'
        println '9 - Excluir candidato'
        println '10 - Sair'
        print 'Escolha uma opção: '
        opc = sc.nextInt()

        return escolherOpcao(opc)
    }

    int escolherOpcao(int opc){
        switch (opc) {
            case 1:
                listar.listarEmpresas(conexao.sql)
                return 1
                break
            case 2:
                listar.listarCandidatos(conexao.sql)
                return 2
                break
            case 3:
                println 'Empresas:'
                listar.listarEmpresas(conexao.sql)
                println 'Candidatos:'
                listar.listarCandidatos(conexao.sql)
                return 3
                break
            case 4:
                println '1 - Candidato'
                println '2 - Empresa'
                print 'Como deseja cadastrar: '
                int cadastroOpc = sc.nextInt()
                sc.nextLine()
                if (cadastroOpc == 1) {
                    cadastro.cadastroCandidatos(conexao.sql)
                } else if (cadastroOpc == 2) {
                    cadastro.cadastroEmpresas(conexao.sql)
                } else {
                    println 'Opção inválida!'
                }
                return 4
                break
            case 5:
                login.logar(conexao.sql)
                return 5
                break
            case 6:
                atualizar.atualizarEmpresa(conexao.sql)
                return 6
                break
            case 7:
                excluir.excluirEmpresa(conexao.sql)
                return 7
                break
            case 8:
                atualizar.atualizarCandidato(conexao.sql)
                return 8
                break
            case 9:
                excluir.excluirCandidato(conexao.sql)
                return 9
                break
            case 10:
                println 'Tchau!'
                return 10
                break
            default:
                println 'Essa opção não existe'
                println ' '
                return 0
                break
        }
    }
}
