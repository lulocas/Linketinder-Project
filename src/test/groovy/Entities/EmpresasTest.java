package Entities;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static Entities.Empresas.cadastroEmpresa;
import static org.junit.jupiter.api.Assertions.*;

class EmpresasTest {
    @Test
    void testCadastroEmpresa() {
        ArrayList<Empresas> empresas = new ArrayList<Empresas>();

        cadastroEmpresa(empresas);

        assertEquals(1, empresas.size());
    }
}