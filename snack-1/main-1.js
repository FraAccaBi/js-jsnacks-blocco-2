/*  
SNACK 1 
Il software deve chiedere per 5 volte all’utente di inserire un numero.
Il programma stampa la somma di tutti i numeri inseriti.
Esegui questo programma in due versioni, con il for e con il while.

*/
let somma = 0;
let index = 0;
let numero = 0;
while (index < 5){
    numero = Number(prompt('inserisci un numero'));
    somma += numero;
    index++
}
console.log(somma);
