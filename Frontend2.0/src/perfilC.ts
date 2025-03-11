import { Candidato } from "./candidato";
import { candidato } from "./editarC";

const h3Nome = document.getElementById("seuNome") as HTMLElement;
const pCpf = document.getElementById("cpf") as HTMLElement;
const pidade = document.getElementById("idade") as HTMLElement;
const pestado = document.getElementById("estado") as HTMLElement;
const pcep = document.getElementById("cep") as HTMLElement;
const pdescricao = document.getElementById("descricao") as HTMLElement;
const pexperiencia = document.getElementById("experiencia") as HTMLElement;
const pformacao = document.getElementById("formacao") as HTMLElement;

export function mudarDados(){
    
    if (candidato) {
        h3Nome.textContent = candidato.getNome();
        pCpf.textContent = candidato.getCpf();
        pidade.textContent = candidato.getIdade().toString();
        pestado.textContent = candidato.getEstado();
        pcep.textContent = candidato.getCep();
        pdescricao.textContent = candidato.getDescricao();
        pexperiencia.textContent = candidato.getExperiencia();
        pformacao.textContent = candidato.getFormacao();
    }
}