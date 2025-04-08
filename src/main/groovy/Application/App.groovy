package Application

import Entities.Menu

class App {


    static void main(String[] args) {
        Menu menu = new Menu()

        /* ArrayList<Candidatos> candidatos = new ArrayList<Candidatos>()
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
        empresas.add(e5) */


        int opc = 0;
        while(opc != 9){
            opc = menu.mostrarOpcoes(opc)
        }

    }
}