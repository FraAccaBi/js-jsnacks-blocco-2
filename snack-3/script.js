/*  
Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi e una lista di cognomi, e da queste vuole generare una falsa lista di invitati con nome e cognome.
*/

let nomi = ['Fra', 'Riccardo', 'Alice', 'Alessia', 'Claudio']
let cognomi = ['Huda', 'Rossi', 'Bianchi','Verdi', 'Neri']
let nomeCompleto =[]
let index = 0
while (index < nomi.length){
    nomeCompleto.push(`${nomi[index]} ${cognomi[index]}`)
    console.log(nomeCompleto);
    index++
}

