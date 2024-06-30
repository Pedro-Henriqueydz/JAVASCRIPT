document.getElementById("button").addEventListener("click", somar)

        function somar() {
            tn1 = document.getElementById("txtn1")
            tn2 = document.getElementById("txtn2")
            res = document.getElementById("res")
            n1 = Number(tn1.value)
            n2 = Number(tn2.value)
            s = n1 + n2
            res.innerHTML = `A soma de ${n1} e ${n2} é igual a <strong>${s}<strong/>`
        }