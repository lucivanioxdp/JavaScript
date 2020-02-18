function carregar(){
    var imagem = document.getElementById('imagem')
    var horaAtual = new Date().getHours()
    var minuto = new Date().getMinutes()
    document.getElementById('msg').innerText= 
                        `agora são ${horaAtual} horas e ${minuto} minutos`

    if(horaAtual >= 4 && horaAtual <12){
        imagem.src = "imagens/manha.png"
        document.body.style.background='#00BFFF'
    }else if(horaAtual > 18){
        imagem.src = "imagens/noite.png"
        document.body.style.background='#4B0082'
    }else{
        imagem.src = "imagens/tarde.png"
        document.body.style.background='#DAA520'
    }
}