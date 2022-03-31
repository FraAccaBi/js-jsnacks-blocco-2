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
    console.log('il primo array è più lungo del secondo');
    
} else if (differenza < 0) {
    console.log('il secondo array è più lungo del primo');

} else {
    console.log('Gli array hanno la stessa lunghezza');
}
