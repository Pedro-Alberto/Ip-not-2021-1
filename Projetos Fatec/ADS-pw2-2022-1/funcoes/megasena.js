function megasena(qtd=6, numeros=[]){
    //console.log(numeros)
    if (qtd < 6 || qtd > 15){
        throw "quantidade invalida"
    }
    if (numeros.length === qtd){
        return numeros.sort((a, b) => a - b)
    }
    const aleatorio = parseInt(Math.random()*60) + 1
    if (!numeros.includes(aleatorio)){
        // quando aleatorio nao estiver em numeros
        // adicionar o aleatorio na lista
        novalista = [...numeros,aleatorio]
        return megasena(qtd,novalista)
    }
    return megasena(qtd,numeros) 
}
//console.log(megasena(12))