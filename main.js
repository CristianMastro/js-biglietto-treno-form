const submitButton = document.getElementById(`btnCalc`)
const priceTkt = document.getElementById(`price`)


//CREAZIONE EVENTO//

submitButton.addEventListener(`click`, function(Event){
    Event.preventDefault()

    //FUNZIONE CALCOLO BIGLIETTO//

    function sottraipercentuale(inputKm, discount) {
        return inputKm - (inputKm * discount) / 100;
    }

    //RESTITUIRE UN VALORE NUMERICO//
    
    let inputKm = parseInt(document.getElementById(`km`).value);
    let inputAge = parseInt(document.getElementById(`age`).value);


    //CONTROLLO ETA' E KM//

    if (inputAge <=0 || inputAge > 100) {
        ticketNull= `Inserisci un eta' compresa tra 1 e 100`
        priceTkt.innerHTML = `${ticketNull}`
    } else if (inputKm === 0 || inputAge === 0) {
        ticketNull = `Inserisci un valore maggiore di 0`
        priceTkt.innerHTML = `${ticketNull}`


    //BIGLIETTI UNDER 18//

    } else if (inputKm > 0 && inputAge > 0 && inputAge <= 17) {
        let discount = 20
        resultTicket = sottraipercentuale((inputKm * 0.21),discount)
        
    //BIGLIETTI OVER 65//    

    } else if (inputKm > 0 && inputAge >= 18 && inputAge <= 64 ) {
        resultTicket = (inputKm * 0.21)

    //BIGLIETTI NORMALI//

    } else if (inputKm > 0 && inputAge >= 65) {
        let discount = 40
        resultTicket = sottraipercentuale((inputKm * 0.21),discount)
    }

    //STAMPA COSTO BIGLIETTO//

    ticketEuro = `€${resultTicket.toFixed(2).replace(".",",")}`
    priceTkt.innerHTML = `Il tuo biglietto costa ${ticketEuro}`

})    