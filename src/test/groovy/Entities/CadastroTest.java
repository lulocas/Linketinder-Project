package Entities;

import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import java.util.Arrays;
import static org.junit.jupiter.api.Assertions.*;

class CadastroTest {

    @Test
    void testCadastroCandidato() {
        
        Cadastro cadastro = new Cadastro();


        ArrayList<Candidatos> listaCandidatos = new ArrayList<>();


        Candidatos candidato = new Candidatos(
                "João Silva",
                "joao@example.com",
                19,
                "Pernambuco",
                "373482432",
                "Profissional experiente em desenvolvimento de software com mais de 8 anos de experiência em liderança de projetos e equipe. Estou sempre procurando por novas oportunidades para crescer e aprender.",
                Arrays.asList("Java", "Groovy", "HTML")
        );

        cadastro.cadastroCandidato(listaCandidatos, candidato);


        assertEquals(1, listaCandidatos.size());
        assertEquals("João Silva", listaCandidatos.get(0).getNome());
    }

    @Test
    void testCadastroEmpresa() {

        Cadastro cadastro = new Cadastro();


        ArrayList<Empresas> listaEmpresas = new ArrayList<>();


        Empresas empresa = new Empresas(
                "Empresa XYZ",
                "12.345.678/0001-99",
                "5555-5678",
                "Brasil",
                "Pernambuco",
                "239243284",
                "Empresa de tecnologia que desenvolve soluções inovadoras para empresas de todo o Brasil.",
                Arrays.asList("Desenvolvimento de software", "Liderança de equipe", "Gerenciamento de projetos", "Tecnologias web e mobile")
        );

        cadastro.cadastroEmpresa(listaEmpresas, empresa);

        assertEquals(1, listaEmpresas.size());
        assertEquals("Empresa XYZ", listaEmpresas.get(0).getNome());
    }
}

