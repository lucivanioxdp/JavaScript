function contar(){
    var inicio = Number(document.getElementById('inicio').value)
    var fim = Number(document.getElementById('fim').value)
    var passo = Number(document.getElementById('passo').value)
    var res = document.getElementById('res')
    res.innerHTML='contando: <br/>'
    //para corrigir o erro de ultrapassar 1 passo
    if(inicio == 0 || fim==0){
        res.innerText='Inicio ou fim vazios insira os valores'
    }
    else if (passo > fim){
        alert("valor do passo maior que fim, insira valor menor")
    }
    else if(passo == 0){
        alert('O valor do passo não pode ser nulo, valor definido altomaticamente para 1')
        passo = 1
        while(inicio <= fim){
            res.innerText+=inicio
            inicio += passo
            if(inicio > fim){
                res.innerText+='\u{1F3F4}'
            }else{
                res.innerText+='\u{1F449}'
            } 
        }
      //  res.innerText = contagem
    }else{ 
        while(inicio <= fim){
            res.innerText+=inicio
            inicio += passo
            if(inicio > fim){
                res.innerText+='\u{1F3F4}'
            }else{
                res.innerText+='\u{1F449}'
            }
            
        }
    }

}