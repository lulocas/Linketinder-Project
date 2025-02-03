package Entities;

import org.junit.jupiter.api.Test;

import java.util.ArrayList;
import java.util.Scanner;

import static Entities.Candidatos.cadastroCandidato;
import static org.junit.jupiter.api.Assertions.*;

class CandidatosTest {
    @Test
    void testCadastroCandidato() {

        ArrayList<Candidatos> candidatos = new ArrayList<Candidatos>();

        cadastroCandidato(candidatos);



        // Verifica se o candidato cadastrado tem todas as informações corretas
        Candidatos candidato = candidatos.get(0);
        assert candidato.nome != null;
        assert candidato.email != null;
        assert candidato.idade != null;
        assert candidato.estado != null;
        assert candidato.cep != null;
        assert candidato.descricao != null;
        assert candidato.competencias.size() == 3;

        // Verifica se a lista de candidatos não está vazia
        assert !candidatos.isEmpty();
    }

    @Test
    void testCadastroCandidatoComCamposVazios() {
        // Cria uma lista vazia de candidatos
        ArrayList<Candidatos> candidatos = new ArrayList<Candidatos>();

        // Chama o método cadastroCandidato com campos vazios
        Scanner sc = new Scanner(System.in);
        sc.nextLine(); // Começa a leitura do console
        sc.nextLine();// Nome vazio
        sc.nextLine(); // Email vazio
        sc.nextInt(); // Idade vazio
        sc.nextLine(); // Estado vazio
        sc.nextLine(); // CEP vazio
        sc.nextLine(); // Descrição vazio

        // Verifica se a lista de candidatos está vazia
        assert candidatos.isEmpty();
    }
}