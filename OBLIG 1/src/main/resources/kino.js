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

   validateInputs();

});

//Validation
const setSuccess = element => {
    const inputControll = element.parentElement;
    const errorDisplay = inputControll.querySelector(".error");

    errorDisplay.innerText = "";
    inputControll.classList.add("Success");
    inputControll.classList.remove("error");
};

const blankt = () => {
    document.getElementById("Film").value = "";
    document.getElementById("tall").value = "";
    document.getElementById("forNavn").value = "";
    document.getElementById("etterNavn").value = "";
    document.getElementById("telefonnr").value = "";
    document.getElementById("E-post").value = "";
}

//Kinobillett
function registrer() {
    const film = document.getElementById('Film').value;
    const antall = parseInt(document.getElementById('tall').value);
    const fornavn = document.getElementById('forNavn').value;
    const etternavn = document.getElementById('etterNavn').value;
    const telefonnr = document.getElementById('telefonnr').value;
    const epost = document.getElementById('E-post').value
    const
}

//Array for billett
const billetter = [];
billetter.push(billetter);

//Slette billettene
function slettbilletter() {
    billetter = [];
}
// Vise billett
function visbillett() {
    let ut = "<table><tr>" +
        "<th>Fornavn</th><th>Etternavn</th><th>Telefonnr</th>" +
        "</tr>";
    for (let p of billetter){
        ut+="<tr>";
        ut+="<td>"+p.film+"</td><td>"+p.tall+"</td><td>"+p.fornavn+"</td><td>"+p.etternavn+"</td><td>"
            +p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>";
    }
}
document.getElementById("Billetter").innerHTML=ut;


//Validation
const validateInputs = () => {
    const fornavnValue = fornavn.value.trim();
    const etternavnValue = etternavn.value.trim();
    const telefonnrValue = telefonnr.value.trim();
    const epostValue = epost.value.trim();

    if (fornavnValue === "") {
        setError(fornavn, "Skriv inn fornavnet");
    } else {
        setSuccess(fornavn);
    }

    if (etternavnValue === "") {
        setError(etternavn, "Skriv inn etternavnet");
    } else if (!isValidEtternavn(etternavnValue)){
        setError(etternavn, "Skriv inn etternavnet");
    } else {
        setSuccess(etternavn);
    }

    if (telefonnrValue === "") {
        setError(etternavn, "Skriv inn telefonnr");
    } else if (!isValidTelefonnr(telefonnrValue)){
        setError(telefonnr, "Skriv inn telefonnr");
    } else {
        setSuccess(telefonnr);
    }

    if (epostValue === "") {
        setError(epost, "Skriv inn E-post");
    } else if (!isValidEpost(epostValue)){
        setError(epost, "Skriv inn gyldig E-post");
    } else {
        setSuccess(epost);
    }

}

