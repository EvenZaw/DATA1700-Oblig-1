//Velg film
function velg() {
    alert ("Valgt : "+document.getElementById("Film").value);
}

//Referance for form
const form = document.getElementById("form")
const fornavn = document.getElementById("Fornavn");
const etternavn = document.getElementById("Etternavn");
const telefonnr = document.getElementById("Telefonnr");
const epost = document.getElementById("E-post");

//For at form ikke automatisk gjør en "Submit"
form.addEventListener("Submit", e =>{
    e.preventDefault();

    function validateInputs() {

    }

    validateInputs();

});
//Validation
const setSuccess = element =>{
    const inputControll = element.parentElement;
    const errorDisplay = inputControll.querySelector(".error");

    errorDisplay.innerText = "";
    inputControll.classList.add("Success");
    inputControll.classList.remove("error");

};

const validateInputs = () => {
    const fornavnValue = fornavn.value.trim();
    const etternavnValue = etternavn.value.trim();
    const telefonnrValue = telefonnr.value.trim();
    const epostValue = epost.value.trim();

    if (fornavnValue === "") {

   
}

//Kinobillett

function kinoBilletter() {
    var film = document.getElementById('Film').value;
    var antall = parseInt(document.getElementById('tall').value);
    var fornavn = document.getElementById('forNavn').value;
    var etternavn = document.getElementById('etterNavn').value;
    var telefonnr = document.getElementById('telefonnr').value;
    var epost = document.getElementById('E-post').value
}

//Array for billett
var billetter = [];
billetter.push(billetter);
clearForm();

//Slette billettene
function slettbilletter() {
    billetter = [];
}

function clearForm() {
    document.getElementById('Film').value = 'velgFilm';
    document.getElementById('tall').value = '';
    document.getElementById('forNavn').value = '';
    document.getElementById('etterNavn').value = '';
    document.getElementById('telefonnr').value = '';
    document.getElementById('E-post').value = '';
}

