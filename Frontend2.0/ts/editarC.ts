namespace EditarC{
    const cpf = document.getElementById('cpf') as HTMLInputElement;
    const idade = document.getElementById('idade') as HTMLInputElement;
    const estado = document.getElementById('estado') as HTMLInputElement;
    const cep = document.getElementById('cep') as HTMLInputElement;
    const descricao = document.getElementById('descricao') as HTMLInputElement;
    const formacao = document.getElementById('formacao') as HTMLInputElement;
    const experiencia = document.getElementById('experiencia') as HTMLInputElement;
    const habilidades = document.getElementById('habilidades') as HTMLInputElement;
    const botaoSalvar = document.getElementById('botaoSalvar') as HTMLButtonElement;

    const seuNomeElement = document.getElementById('seuNome');
    if (seuNomeElement) {
        seuNomeElement.textContent = Cadastro.nome;
    }
}