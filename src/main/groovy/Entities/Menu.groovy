package Entities

class Menu {

    def conexao = new Conexao()
    def sc = new Scanner(System.in)

    def mostrarOpcoes(opc){
        println '1 - Listar empresas'
        println '2 - Listar candidatos'
        println '3 - Listar empresas e candidatos'
        println '4 - Cadastrar'
        println '5 - Atualizar empresa'
        println '6 - Excluir empresa'
        println '7 - Atualizar candidato'
        println '8 - Excluir candidato'
        println '9 - Sair'
        print 'Escolha uma opção: '
        opc = sc.nextInt()

        return escolherOpcao(opc)
    }

    int escolherOpcao(int opc){
        switch (opc) {
            case 1:
                conexao.listarEmpresas(conexao.sql)
                return 1
                break
            case 2:
                conexao.listCandidatos(conexao.sql)
                return 2
                break
            case 3:
                println 'Empresas:'
                conexao.listarEmpresas(conexao.sql)
                println 'Candidatos:'
                conexao.listCandidatos(conexao.sql)
                return 3
                break
            case 4:
                println '1 - Candidato'
                println '2 - Empresa'
                print 'Como deseja cadastrar: '
                int cadastroOpc = sc.nextInt()
                sc.nextLine()
                if (cadastroOpc == 1) {
                    conexao.cadastroCandidatos(conexao.sql)
                } else if (cadastroOpc == 2) {
                    conexao.cadastroEmpresas(conexao.sql)
                } else {
                    println 'Opção inválida!'
                }
                return 4
                break
            case 5:
                conexao.atualizarEmpresa(conexao.sql)
                return 5
                break
            case 6:
                conexao.excluirEmpresa(conexao.sql)
                return 6
                break
            case 7:
                conexao.atualizarCandidato(conexao.sql)
                return 7
                break
            case 8:
                conexao.excluirCandidato(conexao.sql)
                return 8
                break
            case 9:
                println 'Tchau!'
                return 9
                break
            default:
                println 'Essa opção não existe'
                println ' '
                return 0
                break
        }
    }
}
