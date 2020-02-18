function carregar(){
    var numero = Number(document.getElementById('num').value)
    var selec = document.getElementById('TabList')
    var result = 0
    selec.options.length=1
    
    if(numero != 0){
        for(i=1; i<=10; i++){
            result = numero *i
            var option = document.createElement('option')
            option.innerText=`${numero} X ${i} = ${result}`
            selec.appendChild(option)
        }
    }else{
        alert('impossivel carregar')
    }
}
