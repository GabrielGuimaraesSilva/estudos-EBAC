const form = document.getElementById('formulario')

function validaFormulario() {
    const primeiroValor = document.getElementById('primeiroNumero').value
    const segundoValor = document.getElementById('segundoNumero').value
    const menssagemValido = `Formulário é válido, pois o número ${segundoValor} é maior que o número ${primeiroValor}`
    const menssagemIguall = `Formulário não é válido, pois o número ${segundoValor} é igual ao número ${primeiroValor}`
    const menssagemInvalido = `Formulário não é válido, pois o número ${primeiroValor} é maior que o número ${segundoValor}`

    if (segundoValor > primeiroValor) {
        mensagem.textContent = `Formulário é válido, pois o número ${segundoValor} é maior que o número ${primeiroValor}`
        mensagem.className = 'valido'
    } else if (segundoValor == primeiroValor) {
        mensagem.textContent = `Formulário não é válido, pois o número ${segundoValor} é igual ao número ${primeiroValor}`
        mensagem.className = 'igual'
    } else {
        mensagem.textContent = `Formulário não é válido, pois o número ${primeiroValor} é maior que o número ${segundoValor}`
        mensagem.className = 'invalido'
    }
}

form.addEventListener('submit', function (e) {
    e.preventDefault();
    validaFormulario();
})