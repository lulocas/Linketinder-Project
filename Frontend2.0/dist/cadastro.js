const inputnome = document.getElementById('nome');
const inputemail = document.getElementById('email');
const inputsenha = document.getElementById('senha');
const inputconfirma = document.getElementById('confirmarSenha');
const candidatoInput = document.getElementById('candidatoBotao');
const empresaInput = document.getElementById('empresaBotao');
export const botao = document.getElementById('botaoCadastrar');
export let usuario;
export let nome;
export let email;
export let senha;
function validar() {
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
        }
        else if (empresaInput.checked) {
            usuario = 'empresa';
            alert(`Usuário ${usuario} cadastrado com sucesso!`);
            window.location.href = 'edicaoE.html';
        }
        nome = inputnome.value;
        email = inputemail.value;
        senha = inputsenha.value;
    }
}
//# sourceMappingURL=cadastro.js.map