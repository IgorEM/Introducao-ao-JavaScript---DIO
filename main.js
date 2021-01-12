function funcaoChange(elemento){
    console.log(elemento.value)
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse"
}

function voltar1(elemento){
    elemento.innerHTML = "passe o mouse aqui!"
}

function load(){
    //alert("pagina carregada")
    console.log("pagina carregada")
}


function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por clicar</b>";
    // console.log(document.getElementById("agradecimento"))
    // alert("Obrigado por clicar")
}


function gerarfrase(){
    document.getElementById("paragrafo").innerHTML = "entre aqui no google.com";
    
}

function redirecionar(){
    window.open("https://www.google.com/")
    //window.location.href = "https://www.google.com/" //abre na mesma aba
}

// function passarmouse(){
//     document.getElementById("mouseover").innerHTML = "Obrigado por passar o mouse"
//     //alert("trocar texto")
// }

// function voltar(){
//     document.getElementById("mouseover").innerHTML = "Passe o Mouse aqui!!"
// }




// function validarIdade(idade){
//     var validar
//     if (idade >=18) {
//         validar = true
//     }else{
//         validar = false
//     }
//     return validar //lembrar de retornar algo na função
// }

// var idade = prompt("Qual sua idade?")
// console.log(validarIdade(idade))

// function soma(n1, n2){
//     return n1 + n2
// }

// alert(soma(3,4))

// function setReplace(frase, nome, novonome){
//     return frase.replace(nome, novonome)
// }

// alert(setReplace("Vai Japão", "Japão", "Brasil"))

// var lista = [nome:"Alemanha", "cravo","Inglaterra", "Escócia"]
// lista.push("Polônia")
// lista.pop("Inglaterra")

// console.log(lista[2])

// var d = new Date()
// alert("Mês " + (d.getMonth()+1) )
// alert("dia " + (d.getDay()) )
// alert("hora " + (d.getHours()) )
// alert("minuto " + (d.getMinutes()) )

// var count = 0
// while(count <= 5){
//     console.log(count)
//     alert(count)
//     count+=1
// }

// var idade = prompt("Qual sua idade?") //prompt gera uma caixa de texto
// var idade = 18
// if (idade >= 18){
//     alert("maior de idade")
// }else{
//     alert("menor de idade")
// }


// var motos = [{nome: "twister", cor: "verde"}, {nome: "XRE 300", cor: "cinza"}]
// console.log(motos)
// alert(motos[0].nome)

// var lista = ["controle", "ventilador", "teclado", "mouse"]
// console.log(lista)
// console.log(lista[1])
// lista.push("cafeteira")

// lista.pop()

// lista.reverse()
// console.log(lista.toString())
// console.log(lista.join("|")) //passa para string separando pelo caractere que quiser


// var nome = "Igor Eduardo"
// var idade = 23
// var idade2 = 10
// var n1 = 84
// var n2 = 2
// var frase = "Hoje eu vou completar 5 cursos"
// //alert(nome + " tem " + idade + " anos ")
// console.log(nome + " tem " + idade + " anos ")
// console.log(frase.replace("5", "3"));
// console.log(frase.toUpperCase())
// console.log(n1 * n2)