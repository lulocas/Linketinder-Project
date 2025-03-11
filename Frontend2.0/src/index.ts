import { cadastrar, botao} from "./cadastro.js";
import { inputhabilidades, escreverHab, mudarNome, botaoSalvar, salvar } from "./editarC.js";
import { mudarDados } from "./perfilC.js";

document.addEventListener('DOMContentLoaded', () => {
    if (botao) {
        botao.addEventListener('click', cadastrar);
    }
    const nomeUsuario = localStorage.getItem('nomeUsuario');
    if (nomeUsuario) {
        mudarNome(nomeUsuario);
    }
    if(window.location.pathname.endsWith('/edicaoC.html')) {
        console.log("oi");
        if (inputhabilidades) {
            inputhabilidades.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    escreverHab();
                }
            });
        }
        if(botaoSalvar){
            botaoSalvar.addEventListener('click', salvar);
        }
        if(window.location.pathname.endsWith('/perfilC.html')){
            mudarDados();
        }
    }
});