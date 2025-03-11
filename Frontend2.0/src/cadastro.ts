const inputnome = document.getElementById('nome') as HTMLInputElement;
const inputemail = document.getElementById('email') as HTMLInputElement;
const inputsenha = document.getElementById('senha') as HTMLInputElement;
const inputconfirma = document.getElementById('confirmarSenha') as HTMLInputElement;
const candidatoInput = document.getElementById('candidatoBotao') as HTMLInputElement;
const empresaInput = document.getElementById('empresaBotao') as HTMLInputElement;
export const botao = document.getElementById('botaoCadastrar') as HTMLButtonElement;
const seuNomeElement = document.getElementById('seuNome');

export let usuario: string;
export let nome: string;
export let email: string;
export let senha: string;

function validar(): boolean {
    if (inputnome.value === '') {
        alert('Nome é obrigatório');
        return false;
    }
    if (inputemail.value === '') {
        alert('Email é obrigatório');
        return false;
    }
    if (inputsenha.value === '') {
        alert('Senha é obrigatório');
        return false;
    }
    if (inputconfirma.value === '') {
        alert('Confirmação de senha é obrigatória');
        return false;
    }
    if (inputsenha.value !== inputconfirma.value) {
        alert('Senhas não conferem');
        return false;
    }
    if (!candidatoInput.checked && !empresaInput.checked) {
        alert('Selecione um tipo de cadastro');
        return false;
    }
    return true;
}

export function cadastrar() {
    if (validar()) {
        alert('Cadastro realizado com sucesso!');
        if (candidatoInput.checked) {
            usuario = 'candidato';
            alert(`Usuário ${usuario} cadastrado com sucesso!`);
            window.location.href = 'edicaoC.html';
        } else if (empresaInput.checked) {
            usuario = 'empresa';
            alert(`Usuário ${usuario} cadastrado com sucesso!`);
            window.location.href = 'edicaoE.html';
        }
        nome = inputnome.value;
        email = inputemail.value;
        senha = inputsenha.value;

        localStorage.setItem('nomeUsuario', nome);
    }
}
