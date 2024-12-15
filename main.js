const submitButton = document.querySelector(`form > #btnCalc`)
const priceTkt = document.getElementById("price")


//CREAZIONE EVENTO//

submitButton.addEventListener(`click`, function(Event){
    Event.preventDefault()

    //FUNZIONE CALCOLO BIGLIETTO//

    function sottraipercentuale(inputKm, discount) {
        return inputKm - (inputKm * discount) / 100;
    }

    //PRENDERE I VALORI STRINGA E TRASFORMARLI IN INT//
    
    let inputKm = parseFloat(document.getElementById("km").value);
    let inputAge = parseFloat(document.getElementById("age").value);

    // BIGLIETTI MINORENNI//

    if (inputKm > 0 && inputAge > 0 && inputAge <= 17) {
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

    //STAMPA IL RISULTATO//

    priceTkt.innerHTML = `Il tuo biglietto costa ${resultTicket}`


})    