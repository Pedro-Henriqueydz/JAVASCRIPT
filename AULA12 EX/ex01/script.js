addEventListener("load", carregar)
addEventListener("reload", reload)


function carregar(){
    msg = document.getElementById("msg")
    img = document.getElementById("imagem")
    data = new Date()
    hora = data.getHours()
    minutos = data.getMinutes()
    frase = document.getElementById("frase")
    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos!`
    if (hora >= 6 && hora < 12) {
        //bom dia
        img.src = "../assets/manhã.png"
        document.body.style.backgroundColor = "#d69948"
        frase.innerHTML = "BOM DIA!!!"
    }else if (hora >= 12 && hora < 18){
        //boa tarde
        img.src = "../assets/tarde.png"
        document.body.style.backgroundColor = "#c1d7ec"
        frase.innerHTML = "BOA TARDEEEE!!!"
    }else {
        //boa noite
        img.src = "../assets/noite.png"
        document.body.style.backgroundColor = "#362943"
        frase.innerHTML = "BOA NOITEEEE!!!"
    }
}

