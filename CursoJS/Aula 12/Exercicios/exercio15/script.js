document.getElementById('btn').addEventListener('click', verificar)
function verificar(){
    var data = new Date().getFullYear()
    var nascimento = document.getElementById('nascimento').value
    var result = document.getElementById('res')
    
    if(nascimento.length == 0 || nascimento > data){
        result.innerText='Data informada Inválida'
    }else{
        var sexo = document.getElementsByName('radiosex')
        var idade = data - nascimento
        var genero = ''
        if(sexo[0].checked){
            genero = 'masculino'
            if(idade < 18){
                var imagem = document.createElement('img')
                imagem.setAttribute('id', 'img')
                imagem.setAttribute('src', 'imagens/menino.jpg')
            }else if(idade >= 18 && idade < 65){
                var imagem = document.createElement('img')
                imagem.setAttribute('id', 'img')
                imagem.setAttribute('src', 'imagens/homem.jpg')
            }else{
                var imagem = document.createElement('img')
                imagem.setAttribute('id', 'img')
                imagem.setAttribute('src', 'imagens/idoso.jpg')
            }
        }else{
            genero = 'feminino'
            if(idade < 18){
                var imagem = document.createElement('img')
                imagem.setAttribute('id', 'img')
                imagem.setAttribute('src', 'imagens/menina.jpg')
            }else if(idade >= 18 && idade < 65){
                var imagem = document.createElement('img')
                imagem.setAttribute('id', 'img')
                imagem.setAttribute('src', 'imagens/mulher.jpg')
            }else{
                var imagem = document.createElement('img')
                imagem.setAttribute('id', 'img')
                imagem.setAttribute('src', 'imagens/idosa.jpg')
            }
        }
        result.innerHTML=`Detectamos: <strong> ${genero}</strong> com <strong> ${idade} </strong>anos`
        result.style.textAlign="center"
        result.appendChild(imagem)

        
    }
}