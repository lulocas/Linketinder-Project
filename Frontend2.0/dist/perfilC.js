import { candidato } from "./editarC";
const h3Nome = document.getElementById("seuNome");
const pCpf = document.getElementById("cpf");
const pidade = document.getElementById("idade");
const pestado = document.getElementById("estado");
const pcep = document.getElementById("cep");
const pdescricao = document.getElementById("descricao");
const pexperiencia = document.getElementById("experiencia");
const pformacao = document.getElementById("formacao");
export function mudarDados() {
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
//# sourceMappingURL=perfilC.js.map