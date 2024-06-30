//Eventoss

document.getElementById("mybtn").addEventListener("click", verificar)
document.getElementById("mybtn").addEventListener("click", sexoveri)
document.getElementById("mybtn").addEventListener("click", somatudoedale)

function verificar(){
    input= document.getElementById("ano")
    nasc = Number(input.value)
    data = new Date()
    ano = data.getFullYear()
    if (input.value.length == 0 || input.value > ano) {
        alert("[ERRO] Data Inválida, Digite Novamente!")
    }else {
        calc = ano - nasc
    }
}

function sexoveri() {
    sexo = document.getElementsByName("radsex")
    if (sexo[0].checked) {
        genero = "Homem"
        console.log(genero)
    }else if (sexo[1].checked){
        genero = "Mulher"
        console.log(genero)
    }else {
        genero = "Outro"
        console.log(genero)
    }
}

function somatudoedale() {
    frase = document.getElementById("frase")
    img = document.getElementById("imagem")
    if (genero == "Homem" && calc <= 12) {
        img.src = "../assets/criançaM.png"
        frase.innerHTML = `Detectamos que você é uma criança masculina de ${calc} anos!`
        document.body.style.backgroundColor = "#27313b"
    }else if (genero == "Homem" && calc >= 12 && calc < 20){
        img.src = "../assets/jovemM.png"
        frase.innerHTML = `Detectamos que você é um jovem masculino de ${calc} anos!`
        document.body.style.backgroundColor = "#161620"
    }else if (genero == "Homem" && calc > 21 && calc < 59){
        img.src = "../assets/adultoM.png"
        frase.innerHTML = `Detectamos que você é um adulto masculino de ${calc} anos!`
        document.body.style.backgroundColor = "#12272c"
    }else {
        img.src = "../assets/idosoM.png"
        frase.innerHTML = `Detectamos que você é um idoso masculino de ${calc} anos!`
        document.body.style.backgroundColor = "#c3c4b2"
    }if (genero == "Mulher" && calc <= 12) {
        img.src = "../assets/criançaF.png"
        frase.innerHTML = `Detectamos que você é uma criança do sexo feminino de ${calc} anos!`
        document.body.style.backgroundColor = "#cbc6c0"
    }else if (genero == "Mulher" && calc > 12 && calc < 20){
        img.src = "../assets/jovemF.png"
        frase.innerHTML = `Detectamos que você é uma jovem do sexo feminino de ${calc} anos!`
        document.body.style.backgroundColor = "#e1e3d5"
    }else if (genero == "Mulher" && calc > 21 && calc < 59){
        img.src = "../assets/adultoF.png"
        frase.innerHTML = `Detectamos que você é uma adulta do sexo feminino de ${calc} anos!`
        document.body.style.backgroundColor = "#3c2417"
    }else if (genero == "Mulher" && calc > 60){
        img.src = "../assets/idosaF.png"
        frase.innerHTML = `Detectamos que você é uma idosa do sexo feminino de ${calc} anos!`
        document.body.style.backgroundColor = "#d3d0cb"
    }else if (genero == "Outro"){
        img.src = "../assets/papagaio.png"
        frase.innerHTML = `Detectamos que você é GAY? Talvez!`
        document.body.style.backgroundColor = "#61754e"
    }

}   


     