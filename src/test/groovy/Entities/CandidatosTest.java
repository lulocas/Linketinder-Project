package Entities;


import org.junit.jupiter.api.Test;


import java.util.ArrayList;
import java.util.Scanner;

import static Entities.Candidatos.cadastroCandidato;

class CandidatosTest {


    @Test
    void testCadastroCandidato() {

        ArrayList<Candidatos> candidatos = new ArrayList<Candidatos>();

        cadastroCandidato(candidatos);

        assert !candidatos.isEmpty();

        for(Candidatos candidato : candidatos){
            assert candidato.getNome() != null;
            assert candidato.getEmail() != null;
            String idade = String.valueOf(candidato.getIdade());
            assert idade != null;
            assert candidato.getEstado() != null;
            assert candidato.getCep() != null;
            assert candidato.getDescricao() != null;
            assert candidato.getCompetencias().size() == 3;
        }
    }

    @Test
    void testCadastroCandidatoComCamposVazios() {

        ArrayList<Candidatos> candidatos = new ArrayList<Candidatos>();

        Scanner sc = new Scanner(System.in);
        sc.nextLine();
        sc.nextLine();
        sc.nextLine();
        sc.nextInt();
        sc.nextLine();
        sc.nextLine();
        sc.nextLine();

        assert candidatos.isEmpty();
    }
}