let numeroPc = Math.floor(Math.random() * 6) + 1
let numeroUtente = Math.floor(Math.random() * 6) + 1


console.log('Il computer ha fatto ' + numeroPc + " L'utente ha fatto " +numeroUtente)
if (numeroPc > numeroUtente){
    alert ('PC WINS!!!')
}
else if (numeroPc === numeroUtente){
    alert ('PAREGGIO!!!')
}
else if (numeroPc < numeroUtente) {
    alert ('UTENTE WINS!!!')
}



