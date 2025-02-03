package Entities;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Scanner;

import static Entities.Empresas.cadastroEmpresa;
import static org.junit.jupiter.api.Assertions.*;

class EmpresasTest {
    @Test
    void testCadastroEmpresa() {
        ArrayList<Empresas> empresas = new ArrayList<Empresas>();

        cadastroEmpresa(empresas);

        assert !empresas.isEmpty();

        for (Empresas empresa : empresas) {
            assert empresa.getNome() != null;
            assert empresa.getEmail() != null;
            String cnpj = String.valueOf(empresa.getCNPJ());
            assert cnpj != null;
            assert empresa.getPais() != null;
            assert empresa.getEstado() != null;
            assert empresa.getCEP() != null;
            assert empresa.getDescricao() != null;
            assert empresa.getCompetencias().size() == 3;
        }
    }

    @Test
    void testCadastroEmpresaComCamposVazios() {
        ArrayList<Empresas> empresas = new ArrayList<Empresas>();

        Scanner sc = new Scanner(System.in);
        sc.nextLine(); // Nome
        sc.nextLine(); // Email
        sc.nextInt(); // CNPJ
        sc.nextLine(); // País
        sc.nextLine(); // Estado
        sc.nextLine(); // CEP
        sc.nextLine(); // Descrição

        // Intentionally leave a field empty
        sc.nextLine(); // Competência 1

        cadastroEmpresa(empresas);

        assert empresas.isEmpty();
    }

}