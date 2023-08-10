import { validar_data, verificarIsNaN, mostrarIdade } from './utils.js'

const form = document.querySelector('form')
const diaNascUsu = document.querySelector('#dia')
const mesNascUsu = document.querySelector('#mes')
const anoNascUsu = document.querySelector('#ano')

form.addEventListener('submit', (eventE) => {
    eventE.preventDefault();

    try {
        const getDate = new Date()

        const ano = getDate.getFullYear()
        const mes = getDate.getMonth() + 1
        const dia = getDate.getDay()

        const diasNiver = parseInt(diaNascUsu.value)
        const mesNiver = parseInt(mesNascUsu.value)
        const anoNiver = parseInt(anoNascUsu.value)

        let idadeUsu = ano - anoNiver

        if (verificarIsNaN(idadeUsu, diasNiver, mesNiver)) {
            throw new Error(validar_data.isRequired())
        }

        if (diasNiver < 1 || diasNiver > 31 || mesNiver < 1 || mesNiver > 12 || idadeUsu > ano || anoNiver > ano || anoNiver < 1900) {
            throw new Error(validar_data.isValidAge())
        }

        if (mes < mesNiver || (mes === mesNiver && dia < diasNiver)) {
            idadeUsu--;
        }

        mostrarIdade(idadeUsu, diasNiver, mesNiver)
    } catch (e) {
        return e.message
    }
})