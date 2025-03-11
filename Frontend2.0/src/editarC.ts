import { nome, email, senha } from './cadastro';
import { Candidato } from './candidato';

const inputcpf = document.getElementById('cpf') as HTMLInputElement;
const inputidade = document.getElementById('idade') as HTMLInputElement;
const inputestado = document.getElementById('estado') as HTMLInputElement;
const inputcep = document.getElementById('cep') as HTMLInputElement;
const inputdescricao = document.getElementById('descricao') as HTMLInputElement;
const inputformacao = document.getElementById('formacao') as HTMLInputElement;
const inputexperiencia = document.getElementById('experiencia') as HTMLInputElement;
export const inputhabilidades = document.getElementById('habilidades') as HTMLInputElement;
export const botaoSalvar = document.getElementById('botaoSalvar') as HTMLButtonElement;
const divHabilidades = document.getElementById('divHab') as HTMLDivElement;
export let candidato: Candidato | undefined;
let listaHab: string[] = [];

const seuNomeElement = document.getElementById('seuNome');
export function mudarNome(nome: string) {
    if (seuNomeElement) {
        seuNomeElement.textContent = nome;
    } 
}

function validar(): boolean {
    if (inputcpf.value === '') {
        alert('CPF é obrigatório');
        return false;
    }
    if (inputidade.value === '') {
        alert('Idade é obrigatório');
        return false;
    }
    if (inputestado.value === '') {
        alert('Estado é obrigatório');
        return false;
    }
    if (inputcep.value === '') {
        alert('CEP é obrigatório');
        return false;
    }
    if (inputdescricao.value === '') {
        alert('Descrição é obrigatório');
        return false;
    }
    if (inputformacao.value === '') {
        alert('Formação é obrigatório');
        return false;
    }
    if(listaHab.length < 3) {
        alert('Adicione pelo menos 3 habilidades');
        return false;
    }
    return true;
}

export function escreverHab(){
    if(inputhabilidades.value !== '') {
        criarHabilidade();
        listaHab.push(inputhabilidades.value);
        inputhabilidades.value = '';
        console.log(listaHab);
    }   
}

function criarHabilidade() {
    var divHabili = document.createElement('div');
    divHabili.classList.add("habil");
    divHabilidades.appendChild(divHabili);
    var habilidade = document.createElement('p');
    habilidade.textContent = inputhabilidades.value;
    habilidade.classList.add("pHab");
    divHabili.appendChild(habilidade);
}

export function salvar() {
    if(validar()){
        alert('Salvo com sucesso');
        candidato = new Candidato(nome, email, senha, inputcpf.value, parseInt(inputidade.value), inputestado.value, inputcep.value, inputdescricao.value, inputformacao.value, inputexperiencia.value, listaHab);
        window.location.href = 'perfilC.html';
    }
}

