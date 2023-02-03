// console.log('ciao')



// creare array
const listaMail = ['pincopallo90@gmail.com', 'tizio@gmail.com', 'caio68@gmail.com', 'league.of.lecce@gmail.com', 'biondotwix.82@gmail.com']

console.log (listaMail, listaMail.lenght)

let nuovaMail = prompt('Inserisci la tua mail')

for ( i = 0; i < listaMail.length; i++){

    if (nuovaMail === listaMail[i]) {
        console.log (i,'email corretta')
        alert('Mail trovata!')
        
    }
    else{
        console.log(i, 'mail inesistente')
    }
    
}
