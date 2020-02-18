agora = new Date()
var hora = agora.getHours()
console.log(`Agora são: ${hora} horas`)

if (hora > 4 && hora < 12){
    console.log("Bom dia")
}else if(hora > 18){
    console.log("Boa noite")
}else{
    console.log("boa tarde")
}