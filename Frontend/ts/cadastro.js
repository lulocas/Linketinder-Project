export const nome = document.getElementById('nome');
export const email = document.getElementById('email');
export const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');
export let usuario;
const candidatoInput = document.getElementById('candidatoBotao');
const empresaInput = document.getElementById('empresaBotao');
export const botaoCadastrar = document.getElementById('botaoCadastrar');
export function cadastrar() {
    if (senha.value == confirmarSenha.value && nome.value != '' && email.value != '' && senha.value != '') {
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
        else {
            alert('Selecione um tipo de usuário!');
        }
    }
    else if (nome.value == '' || email.value == '' || senha.value == '') {
        alert('Não pode haver campos vazios!');
    }
    else if (senha.value != confirmarSenha.value) {
        alert('As senhas não coincidem!');
    }
}
console.log('oi');
