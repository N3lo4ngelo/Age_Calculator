const mostrarAno = document.querySelector('.ano')
const mostrarDia = document.querySelector('.mes')
const mostrarMes = document.querySelector('.dia')

export const validar_data = {

    fieldRequired: document.querySelectorAll('.campo-obrigatorio'),
    validAge: document.querySelectorAll('.informacao-valida'),

    isValidAge() {
        ValidData.validAge.forEach(field => { return field.classList.remove('ocultar') })
    },

    isRequired() {
        ValidData.fieldRequired.forEach(field => field.classList.remove('ocultar'))
    }
}

export const verificarIsNaN = (idadeAtual, diaAniversario, mesAniversario) => {
    return isNaN(idadeAtual, diaAniversario, mesAniversario)
}

export const mostrarIdade = (idadeAtual, diaAniversario, mesAniversario) => {
    mostrarAno.innerHTML = idadeAtual
    mostrarDia.innerHTML = diaAniversario
    mostrarMes.innerHTML = mesAniversario
}