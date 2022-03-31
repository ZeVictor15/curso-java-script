let = num = [5,8,2,9,3]

/* Adiciona um elemento na ultima casa */
num.push(1)

/*Organiza os vetores por ordem crescente*/ 
num.sort()
console.log(num)

/*nome do vetor + [] + posição do vetor mostra valor do elemento*/
console.log(`O primeiro valor é ${num[0]}`)

/*.lenght o número de possições do vetor*/
console.log(`O vetor tem ${num.length} possições`)

/*Mostra a possição em que o elemento está no vetor, se o valor não estiver no vetor ele retorna o valor -1*/ 
let pos = num.indexOf(8)

if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`A possição do elemento no vetor é ${pos}`)
}

