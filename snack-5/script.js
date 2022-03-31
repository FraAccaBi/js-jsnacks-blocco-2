/*  
Crea due array che hanno un numero di elementi diversi. Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.
*/
//creo un nuovo array vuoto
let myArray1 = [];
//genero un numero random che indicherà quanti elementi saranno contenuti dall'array creato al passaggio precedente
let numeroElementiArray1 = Math.ceil(Math.random()*10);
//genero con un ciclo for i numeri random da inserire nell'array
for (let i = 0; i < numeroElementiArray1; i++){
    let numeroRandom = Math.ceil(Math.random()*10);
    myArray1.push(numeroRandom);
}
console.log(myArray1);

//come sopra per creare il secondo array di lunghezza randomica e con elementi generati random
let myArray2 = [];
let numeroElementiArray2 = Math.ceil(Math.random()*10);
//genero con un ciclo for i numeri random da inserire nell'array
for (let i = 0; i < numeroElementiArray2; i++){
    let numeroRandom = Math.ceil(Math.random()*10);
    myArray2.push(numeroRandom);
    
}
console.log(myArray2);

//confronto tra il numero di elementi dei due array

let differenza = numeroElementiArray1 - numeroElementiArray2
if (differenza > 0){
    console.log(`il primo array è più lungo di ${differenza} elementi rispetto al secondo`);
    while (differenza>0){
        let numeroRandom = Math.ceil(Math.random()*10);
        myArray2.push(numeroRandom);
        console.log(`è stato aggiunto il numero ${numeroRandom} all'array`);
        differenza--
    }
    console.log(`ora il secondo array è formato dallo stesso numeri di elementi del primo`);
    
} else if (differenza < 0) {
    console.log(`il secondo array è più lungo di ${differenza} elementi rispetto al primo`);
    while (differenza>0){
        let numeroRandom = Math.ceil(Math.random()*10);
        myArray1.push(numeroRandom);
        console.log(`è stato aggiunto il numero ${numeroRandom} all'array`);
        differenza--
    }
    console.log(`ora il primo array è formato dallo stesso numeri di elementi del secondo`);

} else {
    console.log('Gli array hanno la stessa lunghezza');
}

console.log(myArray1);
console.log(myArray2);
