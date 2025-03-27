package Entities



class Cadastro {

    def cadastroCandidato(ArrayList<Candidatos> candidatos, Candidatos candidato){
        candidatos.add(candidato)
        println "Candidato cadastrado com sucesso"
    }

    def cadastroEmpresa(ArrayList<Empresas> empresas, Empresas empresa){
        empresas.add(empresa)
        println "Empresa cadastrada com sucesso"
    }

}
