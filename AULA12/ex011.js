data = new Date
hora = data.getHours()
console.log(`Agora são exatamente ${hora} Horas`)

if (hora < 12) {
    console.log("BOM DIA!!")
}else if (hora <= 18) {
    console.log("Boa Tarde!")
}else {
    console.log("BOA NOITEEE!!")
}