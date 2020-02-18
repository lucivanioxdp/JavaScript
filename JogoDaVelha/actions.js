var option = ''
var tabuleiro = [['', '', ''],
                ['','',''],
                ['','','']]

var vencedor ='';
var jogada = 1
var numJogadas =0
var fim = false
//eventos mesa
var c1 = document.getElementById('c1')
    c1.addEventListener('click', function(){
        if(tabuleiro[0][0] == '' && jogada == 0){
            fazerJogada(c1)
            tabuleiro[0][0] = option
            finalizar()
            jogada = 1
        }        
    })

var c2 = document.getElementById('c2')
    c2.addEventListener('click', function(){
        if(tabuleiro[0][1] == '' && jogada == 0){
            fazerJogada(c2)
            tabuleiro[0][1] = option
            finalizar()
            jogada = 1
        }
    })

var c3 = document.getElementById('c3')
    c3.addEventListener('click', function(){
            if(tabuleiro[0][2] == '' && jogada == 0){
            fazerJogada(c3)
            tabuleiro[0][2] = option
            finalizar()
            jogada = 1
        }
    })

var c4 = document.getElementById('c4')
    c4.addEventListener('click', function(){
        if(tabuleiro[1][0] == '' && jogada == 0){
            fazerJogada(c4)
            tabuleiro[1][0] = option
            finalizar()
            jogada = 1
        }
    })

var c5 = document.getElementById('c5')
    c5.addEventListener('click', function(){
        if(tabuleiro[1][1] == '' && jogada == 0){
            fazerJogada(c5)
            tabuleiro[1][1] = option
            finalizar()
            jogada = 1
        }
    })

var c6 = document.getElementById('c6')
    c6.addEventListener('click', function(){
        if(tabuleiro[1][2] == '' && jogada == 0){
            fazerJogada(c6)
            tabuleiro[1][2] = option
            finalizar()
            jogada = 1
        }
    })

var c7 = document.getElementById('c7')
    c7.addEventListener('click', function(){
        if(tabuleiro[2][0] == '' && jogada == 0){
            fazerJogada(c7)
            tabuleiro[2][0] = option
            finalizar()
            jogada = 1
        }
})

var c8 = document.getElementById('c8')
    c8.addEventListener('click', function(){
        if(tabuleiro[2][1] == '' && jogada == 0){
            fazerJogada(c8)
            tabuleiro[2][1] = option
            finalizar()
            jogada = 1
        }
})

var c9 = document.getElementById('c9')
    c9.addEventListener('click', function(){
        if(tabuleiro[2][2] == '' && jogada == 0){
            fazerJogada(c9)
            tabuleiro[2][2] = option
            finalizar()
            jogada = 1
        }
    })

//ações de players
var playerX = document.getElementById('playerX')
playerX.addEventListener('click', function(){
    selecionar(playerX)
    exibirControles()
})

var playerY = document.getElementById('playerY')
playerY.addEventListener('click', function(){
    selecionar(playerY)
    exibirControles()
})

function selecionar(player){
    player.style.background='#FFD700'
    option = player.innerText
    document.getElementById('descricao').innerText=`Jogador ${option} faça sua jogada`
    jogada=0
}

function fazerJogada(posicao){
    posicao.innerText= option
}

function finalizar(){
    verificaVencedor()
}

//calcula quem fez a velha
function verificaVencedor(){
    if((tabuleiro[0][0] == option) &&(tabuleiro[0][1] == option) && (tabuleiro[0][2] == option)){
        vencedor = option
        colorir(c1,c2,c3)
    }else if((tabuleiro[1][0] == option) &&(tabuleiro[1][1] == option) && (tabuleiro[1][2] == option)){
        vencedor = option 
        colorir(c4, c5, c6)
    }else if((tabuleiro[2][0] == option) &&(tabuleiro[2][1] == option) && (tabuleiro[2][2] == option)){
        vencedor = option
        colorir(c7, c8, c9)
    }else if((tabuleiro[0][0] == option) &&(tabuleiro[1][0] == option) && (tabuleiro[2][0] == option)){
        vencedor = option
        colorir(c1, c4, c7)
    }else if((tabuleiro[0][1] == option) &&(tabuleiro[1][1] == option) && (tabuleiro[2][1] == option)){
        vencedor = option
        colorir(c2, c5, c8)
    }else if((tabuleiro[0][2] == option) &&(tabuleiro[1][2] == option) && (tabuleiro[2][2] == option)){
        vencedor = option
        colorir(c3, c6, c9)
    }else if((tabuleiro[0][0] == option) &&(tabuleiro[1][1] == option) && (tabuleiro[2][2] == option)){
        colorir(c1, c5, c9)
    }else if((tabuleiro[0][2] == option) &&(tabuleiro[1][1] == option) && (tabuleiro[2][0] == option)){
        vencedor = option
        colorir(c3, c5, c7)
    }else if(numJogadas == 8 ){
        velha()
    }
}

//exibe botões de jogadas
function exibirControles(){
    var controles = document.getElementById('jogadores')
    controles.innerText=''
    var btnFimTurno = document.createElement('input')
    btnFimTurno.setAttribute('type', 'button')
    btnFimTurno.setAttribute('value', 'Finalizar Turno')
    btnFimTurno.style.height='50px'
    btnFimTurno.addEventListener('click', finalizarTurno)
    controles.appendChild(btnFimTurno)

    var btnReiniciar = document.createElement('input')
    btnReiniciar.setAttribute('type', 'button')
    btnReiniciar.setAttribute('value', 'Reiniciar Jogo')
    btnReiniciar.style.height='50px'
    btnReiniciar.addEventListener('click', reiniciarJogo)
    controles.appendChild(btnReiniciar)
}

function finalizarTurno(){
    if(jogada != 0 && !fim){
        if(option == 'X'){
            option = 'O'
        }else{
            option = 'X'
        }
        document.getElementById('descricao').innerText=`Jogador ${option} faça sua jogada`
        jogada = 0
        numJogadas++
    }else{
        alert('Jogada não relizada ou jogo finalizado')
    }
   
}

//quando um jogador vence
function finalizarJogo(){
    var mesa = document.getElementById('mesa')
    mesa.innerText=''
    var img = document.createElement('img')
    img.setAttribute('id', 'img')
    img.setAttribute('src', 'img/winner2.gif')
    img.style.width='350px'

    var descricao = document.getElementById('descricao')
    descricao.innerText=`jogador ${option} foi o grande vencedor!!!`

    mesa.appendChild(img)
}

function velha(){
    var mesa = document.getElementById('mesa')
    mesa.innerText=''
    var img = document.createElement('img')
    img.setAttribute('id', 'img')
    img.setAttribute('src', 'img/velha.gif')
    img.style.width='350px'

    var descricao = document.getElementById('descricao')
    descricao.innerText=`Ihhh deu Velha :(`

    mesa.appendChild(img)
}

function reiniciarJogo(){
    document.location.reload(true)
}

function colorir(obj1, obj2, obj3){
    obj1.style.color='red'
    obj2.style.color='red'
    obj3.style.color='red'

    var descricao = document.getElementById('descricao')
    descricao.innerText=`jogador ${option} foi o grande vencedor!!!`
    //impossibilita o andamento do jogo
    fim = true
}