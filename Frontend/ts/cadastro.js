"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.botaoCadastrar = exports.usuario = exports.senha = exports.email = exports.nome = void 0;
exports.cadastrar = cadastrar;
exports.nome = document.getElementById('nome');
exports.email = document.getElementById('email');
exports.senha = document.getElementById('senha');
const confirmarSenha = document.getElementById('confirmarSenha');
const candidatoInput = document.getElementById('candidatoBotao');
const empresaInput = document.getElementById('empresaBotao');
exports.botaoCadastrar = document.getElementById('botaoCadastrar');
function cadastrar() {
    if (exports.senha.value == confirmarSenha.value && exports.nome.value != '' && exports.email.value != '' && exports.senha.value != '') {
        if (candidatoInput.checked) {
            exports.usuario = 'candidato';
            alert(`Usuário ${exports.usuario} cadastrado com sucesso!`);
            window.location.href = 'edicaoC.html';
        }
        else if (empresaInput.checked) {
            exports.usuario = 'empresa';
            alert(`Usuário ${exports.usuario} cadastrado com sucesso!`);
            window.location.href = 'edicaoE.html';
        }
        else {
            alert('Selecione um tipo de usuário!');
        }
    }
    else if (exports.nome.value == '' || exports.email.value == '' || exports.senha.value == '') {
        alert('Não pode haver campos vazios!');
    }
    else if (exports.senha.value != confirmarSenha.value) {
        alert('As senhas não coincidem!');
    }
}
console.log('oi');
