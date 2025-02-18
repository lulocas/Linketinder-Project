import { nomeTitulo, salvar} from './edicao';

export const nome = document.getElementById('nome') as HTMLInputElement;
export const email = document.getElementById('email') as HTMLInputElement;
export const senha = document.getElementById('senha') as HTMLInputElement;
const confirmarSenha = document.getElementById('confirmarSenha') as HTMLInputElement;

export let usuario: string;
const candidatoInput = document.getElementById('candidatoBotao') as HTMLInputElement;
const empresaInput = document.getElementById('empresaBotao') as HTMLInputElement;

export const botaoCadastrar = document.getElementById('botaoCadastrar') as HTMLButtonElement;

export function cadastrar() {
    if (senha.value == confirmarSenha.value && nome.value != '' && email.value != '' && senha.value != '') {
        if (candidatoInput.checked) {
            usuario = 'candidato';
            alert(`Usuário ${usuario} cadastrado com sucesso!`);
            window.location.href = 'edicaoC.html';
            nomeTitulo(nome.value);
        } else if (empresaInput.checked) {
            usuario = 'empresa';
            alert(`Usuário ${usuario} cadastrado com sucesso!`);
            window.location.href = 'edicaoE.html';
            nomeTitulo(nome.value);
        } else {
            alert('Selecione um tipo de usuário!');
        }
    } else if (nome.value == '' || email.value == '' || senha.value == '') {
        alert('Não pode haver campos vazios!');
    } else if (senha.value != confirmarSenha.value) {
        alert('As senhas não coincidem!');
    }
}

console.log('oi');
