

document.getElementById("mybtn").addEventListener("click", contar)

function contar() {
    ini = document.getElementById("Inicio")
    end = document.getElementById("Fim")
    pas = document.getElementById("Passo")
    frase = document.getElementById("frase")
    conta = document.getElementById("conta")
    if (ini.value.length == 0 || end.value.length == 0 || pas.value.length == 0) {
        alert("[ERRO DIGITE ALGUM NÚMERO PARA COMEÇAR]")
    }else {
        inicio = Number(ini.value)
        fim = Number(end.value)
        passo = Number(pas.value)
        for (count = inicio; count <= fim; count += passo) {
            conta.innerHTML += ` ${count} \u{1F449}` 
            frase.innerHTML = "Conta feita!"
        }
        conta.innerHTML += `\u{1F3C1}` 
    }
}