let valores = [8,1,7,4,2,9]

//Estrutura de repetição para mostrar valores do array
for(let pos=0; pos<valores.length; pos++){
    console.log(`A possição é ${pos} e tem valor ${valores[pos]} `)
}

//Estrutura de repetição simplificada, so funciona com arrays e objetos
for(let pos in valores){
    console.log(`A possição é ${pos} e tem valor ${valores[pos]} `)
}