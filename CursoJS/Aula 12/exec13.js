var agora = new Date()
var numSemana = agora.getDay()
var diaSemana
switch(numSemana){
    case 0:
        diaSemana = 'Domingo'
        break
    case 1:
        diaSemana = 'Segunda'
        break
    case 2:
        diaSemana ='Terça'
        break
    case 3:
        diaSemana = 'Quarta'
        break
    case 4:
        diaSemana = 'Quinta'
        break
    case 5:
        diaSemana = 'Sexta'
        break
    case 6:
        diaSemana = 'Sábado'
        break
    default:
        diaSemana = 'Inválido'
        break
}

console.log("Hoje é "+diaSemana)