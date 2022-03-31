/*  
Crea un array di numeri interi e fai la somma di tutti gli elementi che sono in posizione dispari
*/

let myArray = [];
//genero con un ciclo for i numeri random da inserire nell'array
for (let i = 0; i<10; i++){
    let numeroRandom = Math.ceil(Math.random()*10);
    myArray.push(numeroRandom);
    console.log(myArray);
}

//

let somma = 0;
for (let index = 0; index < myArray.length; index++){
    if((index%2) == 1){ 
        console.log(myArray[index]);
        somma += myArray[index];
    }
}

console.log(`la somma dei numeri in posizione dispari è uguale a ${somma}`);
