num = [5, 8, 2, 9, 3]
num.push(1)
num.sort()
console.log(`essa variavel tem os valores ${num}`)
console.log(`o vetor tem ${num.length} posições`)
console.log(`O primeiro vetor é o ${num[0]}`)
pos = num.indexOf(8)
if (pos == -1) {
    console.log(`o valor não foi encontrado`)
} else {
    console.log(`o valor digitado está na posição ${pos}`)
}

