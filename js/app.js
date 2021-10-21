// Cicli Javascript

let nomi = ['Giorgio', 'Francesca', 256, false, 'Pippo', 'Pluto'];

for (let index = 0; index < nomi.length; index++)
{
    console.log((index + 1) + ":" + nomi[index]);
}

// Seconda versione

for (let nome of nomi)
{
    console.log(nome)
}

// Terza versione

for (let ilNostroindice in nomi) {
    
    console.log(nomi[ilNostroindice]);
    
}
// Terza versione con condizione che esclude un indice (in questo caso 2)

for (let ilNostroindice in nomi) {
    
   if( ilNostroindice != 2) console.log(nomi[ilNostroindice]);
    
}

// Terza versione con condizione che esclude un indice (in questo caso 2)

for (let ilNostroindice in nomi) {
    
    let tipo = typeof nomi[ilNostroindice];
    if( tipo != 'string') console.log(nomi[ilNostroindice]);
     
 }

 // Funzioni

 function pippo(nome, cognome){

    let fullName = nome + ' ' + cognome
     return fullName
 }

 let getName = pippo('Ignazio' , 'Stagnitta');
 console.log(getName)
 console.log(pippo('Roberta' , 'Pennisi'))