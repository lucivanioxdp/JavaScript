var vel = 63.0
console.log(`velocidade atual ${vel}`)

if(vel > 60){
    var ult = vel -60
    console.log(`altrapassou o limite de velocidade em ${ult} km`)
    console.log("Você foi multado!")
}else{
    console.log('dentro do limite, parabéns!')
}