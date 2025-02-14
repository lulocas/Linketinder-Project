"use strict";
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');
let usuario;
const candidatoInput = document.getElementById('candidatoBotao');
const empresaInput = document.getElementById('empresaBotao');
const botaoCadastrar = document.getElementById('botaoCadastrar');
function cadastrar() {
    if (senha.value == confirmarSenha.value && nome.value != '' && email.value != '' && senha.value != '') {
        if (candidatoInput.checked) {
            usuario = 'candidato';
            alert(`Usuário ${usuario} cadastrado com sucesso!`);
            window.location.href = 'edicao.html';
        }
        else if (empresaInput.checked) {
            usuario = 'empresa';
            alert(`Usuário ${usuario} cadastrado com sucesso!`);
            window.location.href = 'edicao.html';
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
botaoCadastrar.addEventListener('click', cadastrar);
