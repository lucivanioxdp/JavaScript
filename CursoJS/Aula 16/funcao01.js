function parImpar(numero){
    if(numero %2 == 0){
        return 'par'
    }else{
        return 'impar'
    }
}

//console.log(parImpar(4))
function soma (n1, n2){
    return n1+n2
}

//console.log(soma(201, 3))

function fatorial(num){
    let fat = 1
    for(i = num; i>0; i--){
        fat *= i
    }
    return fat;
}

console.log(fatorial(5))