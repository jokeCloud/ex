const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const calculaTabuada = param => {
    for(let i = 0; i <= 10; i++) {
    console.log(`${param} x ${i} = ${i*param}`)
    }
}

const tabuada = (arr) => {
    for (let elemento of arr) {
        for (let i = 0; i <= arr.length; i++) {
            if(elemento == i) {
            calculaTabuada(elemento)
            }
        }   
    }
}
tabuada(arr)
