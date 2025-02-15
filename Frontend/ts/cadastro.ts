const nome = document.getElementById('nome') as HTMLInputElement;
const email = document.getElementById('email') as HTMLInputElement;
const senha = document.getElementById('senha') as HTMLInputElement;
const confirmarSenha = document.getElementById('confirmarSenha') as HTMLInputElement;

let usuario: string
const candidatoInput = document.getElementById('candidatoBotao') as HTMLInputElement;
const empresaInput = document.getElementById('empresaBotao') as HTMLInputElement;

const botaoCadastrar = document.getElementById('botaoCadastrar') as HTMLButtonElement;

function cadastrar() {
    if (senha.value == confirmarSenha.value && nome.value != '' && email.value != '' && senha.value != '') {
        if (candidatoInput.checked) {
            usuario = 'candidato'
            alert(`Usuário ${usuario} cadastrado com sucesso!`)
            window.location.href = 'edicaoC.html';
        } else if (empresaInput.checked) {
            usuario = 'empresa'
            alert(`Usuário ${usuario} cadastrado com sucesso!`)
            window.location.href = 'edicaoE.html';
        }else {
            alert('Selecione um tipo de usuário!')
        }
    } else if(nome.value == '' || email.value == '' || senha.value == '') {
        alert('Não pode haver campos vazios!')
    } else if(senha.value != confirmarSenha.value) {
        alert('As senhas não coincidem!')
    }
}

botaoCadastrar.addEventListener('click', cadastrar);