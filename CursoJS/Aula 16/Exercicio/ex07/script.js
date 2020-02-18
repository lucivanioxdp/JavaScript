var numeros = []
function add(){
    limpar()
    var num = document.getElementById('num')
    n= Number(num.value)
    if(numeros.indexOf(n) != -1 || n < 1 || n > 100){
       alert(`O número  já está na lista ou valor inválido`)
    }else{
        let lista = document.getElementById('lista')
        let option = document.createElement('option')
        option.innerText =`numero ${n} adicionado`
        lista.appendChild(option)
        numeros.push(n)

        //para limpar a caixa de numero automaticamente e dar foco
        num.value =''
        num.focus()       
    }
    
}

function qtdNumeros(){
    return numeros.length
}

function maiorNum(){
    var maior = 0;
    for (i in numeros){
        if(numeros[i] > maior){
            maior = numeros[i]
        }
    }return maior
}

function menorNum(){
    var menor = 999;
    for (i in numeros){
        if(numeros[i] < menor){
            menor = numeros[i]
        }
    }return menor
}

function somar(){
    var soma = 0
    for(i in numeros){
        soma += numeros[i]
    }return soma
}

function calcMedia(){
    return somar()/qtdNumeros()
}

function limpar(){
    let result = document.getElementById('result')
    result.innerText=''
}

function finalizar(){
    if(qtdNumeros() == 0){
        alert(`adicione numeros antes de finalizar!`)
    }else{
        let result = document.getElementById('result')
        let qtdNumero = document.createElement('p')
        qtdNumero.innerText=`Ao todo, temos ${qtdNumeros()} numeros`
        result.appendChild(qtdNumero)

        let maior = document.createElement('p')
        maior.innerText=`O maior valor Informado foi ${maiorNum()}`
        result.appendChild(maior)

        let menor = document.createElement('p')
        menor.innerText=`O menor valor Informado foi ${menorNum()}`
        result.appendChild(menor)

        let soma = document.createElement('p')
        soma.innerText=`A soma de todos os valores é ${somar()}`
        result.appendChild(soma)

        let media = document.createElement('p')
        media.innerText=`A media dos valores é ${calcMedia()}`
        result.appendChild(media)
    }
    
}