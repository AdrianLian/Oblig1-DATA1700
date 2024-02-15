ticketsArr = [];
function buy() {
    let validTicket = true;
    let filmValue = document.querySelector('#filmOption').value;
    let antallValue = document.querySelector('#antallInput').value;
    let fornavnValue = document.querySelector('#fornavnTxt').value;
    let etternavnValue = document.querySelector('#etternavnTxt').value;
    let telefonnrValue = document.querySelector('#telefonnrTxt').value;
    let epostValue = document.querySelector('#epostTxt').value;

    if (filmValue === "-1"){
        validTicket = false;
        document.querySelector('#filmOptionError').innerHTML="Må velge en film";
    }else {
        document.querySelector('#filmOptionError').innerHTML="";
    }
    if (antallValue < 1 || antallValue === "" || Number.isInteger(antallValue*1) === false){
        validTicket = false;
        document.querySelector('#antallInputError').innerHTML="Input must be a whole number greater than 0";
    }else {
        document.querySelector('#antallInputError').innerHTML="";
    }
    if (fornavnValue === ""){
        validTicket = false;
        document.querySelector('#fornavnTxtError').innerHTML="Fornavn cant be empty";
    }else {
        document.querySelector('#fornavnTxtError').innerHTML="";
    }
    if (etternavnValue === ""){
        validTicket = false;
        document.querySelector('#etternavnTxtError').innerHTML="Etternavn cant be empty";
    }else {
        document.querySelector('#etternavnTxtError').innerHTML="";
    }
    if (telefonnrValue === ""){
        validTicket = false;
        document.querySelector('#telefonnrTxtError').innerHTML="telefonnr cant be empty";
    }else {
        document.querySelector('#telefonnrTxtError').innerHTML="";
    }

    let validEpost = false
    for (let i = 0; i < epostValue.length; i++) {
        if (epostValue[i] === "@"){
            validEpost = true;
        }
    }
    if (epostValue === "" || validEpost === false){
        validTicket = false;
        document.querySelector('#epostTxtError').innerHTML="Epost cant be empty and must include an \"@\"";
    }else {

        document.querySelector('#epostTxtError').innerHTML="";
    }

    if (validTicket === true){
        let ticket = {film:filmValue, antall:antallValue, fornavn:fornavnValue, etternavn:etternavnValue, telefonnr:telefonnrValue, epost:epostValue};
        ticketsArr.push(ticket);
    }
    console.log(ticketsArr);
    showTickets()
}


function showTickets(){
    let table = document.querySelector('#ticketTable');

    // Select all elements with the specified class
    var elements = document.querySelectorAll('.temp');

// Iterate over the elements in reverse order and remove them
    for (var i = elements.length - 1; i >= 0; i--) {
        var element = elements[i];
        element.parentNode.removeChild(element);
    }

    for (let i = 0; i < ticketsArr.length; i++) {
        let newTr = document.createElement("tr");
        table.appendChild(newTr);
        newTr.className = "temp";

        let newTdFilm = document.createElement("td");
        newTr.appendChild(newTdFilm);
        newTdFilm.innerHTML = ticketsArr[i].film;

        let newTdAntall = document.createElement("td");
        newTr.appendChild(newTdAntall);
        newTdAntall.innerHTML = ticketsArr[i].antall;

        let newTdFornavn = document.createElement("td");
        newTr.appendChild(newTdFornavn);
        newTdFornavn.innerHTML = ticketsArr[i].fornavn;

        let newTdEtternavn = document.createElement("td");
        newTr.appendChild(newTdEtternavn);
        newTdEtternavn.innerHTML = ticketsArr[i].etternavn;

        let newTdTelefonnr = document.createElement("td");
        newTr.appendChild(newTdTelefonnr);
        newTdTelefonnr.innerHTML = ticketsArr[i].telefonnr;

        let newTdEpost = document.createElement("td");
        newTr.appendChild(newTdEpost);
        newTdEpost.innerHTML = ticketsArr[i].epost;

        let newTdDelete = document.createElement("td");
        newTr.appendChild(newTdDelete);
        let newButtonDelete = document.createElement("button");
        newTdDelete.appendChild(newButtonDelete);
        newButtonDelete.innerHTML = "Delete";
        newButtonDelete.value = i;
        newButtonDelete.onclick = function () {
            let index = this.value
            ticketsArr.splice(index, 1);

            showTickets();
        }
    }
    }

    function deleteAllTickets(){
    ticketsArr = [];
    showTickets()
    }