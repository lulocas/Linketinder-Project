package Entities;



import org.junit.jupiter.api.Test;


import java.util.ArrayList;

import static Entities.Candidatos.cadastroCandidato;
import static org.junit.jupiter.api.Assertions.*;

class CandidatosTest {


    @Test
    void testCadastroCandidato() {
        ArrayList<Candidatos> candidatos = new ArrayList<Candidatos>();

        cadastroCandidato(candidatos);

        assertEquals(1, candidatos.size());
    }
}