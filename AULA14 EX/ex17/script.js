document.getElementById("mybtn").addEventListener("click", calcular)

function calcular() {
    document.getElementById("txtnum")
    document.getElementById("tabuada")
    document.getElementById("frase")
    if (txtnum.value.length == 0) {
        alert("Digite um valor para começar!")
    } else {
        tabuada.innerHTML = ""
        num = Number(txtnum.value)
        for (c = 1; c <= 10; c++) {
            item = document.createElement('option')
            item.innerHTML = `${num} x ${c} = ${c * num}`
            item.value = `tab${c}`
            tabuada.appendChild(item)
            frase.innerHTML = `Tabuada Gerada!!`
        }
    }
}