"use strict";
var Cadastro;
(function (Cadastro) {
    const inputnome = document.getElementById('nome');
    const inputemail = document.getElementById('email');
    const inputsenha = document.getElementById('senha');
    const inputconfirma = document.getElementById('confirmarSenha');
    const candidatoInput = document.getElementById('candidatoBotao');
    const empresaInput = document.getElementById('empresaBotao');
    const botao = document.getElementById('botaoCadastrar');
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
    function cadastrar() {
        if (validar()) {
            alert('Cadastro realizado com sucesso!');
            if (candidatoInput.checked) {
                Cadastro.usuario = 'candidato';
                alert(`Usuário ${Cadastro.usuario} cadastrado com sucesso!`);
                window.location.href = 'edicaoC.html';
            }
            else if (empresaInput.checked) {
                Cadastro.usuario = 'empresa';
                alert(`Usuário ${Cadastro.usuario} cadastrado com sucesso!`);
                window.location.href = 'edicaoE.html';
            }
            Cadastro.nome = inputnome.value;
            Cadastro.email = inputemail.value;
            Cadastro.senha = inputsenha.value;
        }
    }
    botao.addEventListener('click', cadastrar);
})(Cadastro || (Cadastro = {}));
