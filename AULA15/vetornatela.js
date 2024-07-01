num = [7, 8, 9, 6, 34, 56, 16, 98]
num.sort()

//Melhor forma em array

for(pos in num) {
    console.log(`o vetor na posição ${pos} tem o valor ${num[pos]}`)
}

/*
for(pos = 0; pos < num.length; pos++) {
    console.log(`o vetor na posição ${pos} tem o valor ${num[pos]}`)
}

*/