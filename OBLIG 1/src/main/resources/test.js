/*const billetter = [];


function visBillett() {
    let ut = "<table><tr>" +
        "<th>Film</th><th>Antall</th><th>Fornavn</th><th>Etternavn</th><th>Telefon</th><th>Epost</th>" +
        "</tr>";
    for (let p of billetter){
        ut+="<tr>";
        ut+="<td>"+p.Film+"</td><td>"+p.antall+"</td><td>"+p.fornavn+"</td><td>"+p.etternavn+"</td><td>"
            +p.telefonnr+"</td><td>"+p.epost+"</td>";
        ut+="</tr>"
    }
    document.getElementById("Ut").innerHTML=ut;

}

// Validation
function registrer() {
    const Film = document.getElementById('Film').value;
    const antall = Number(document.getElementById('Antall').value);
    const fornavn = document.getElementById('Fornavn').value;
    const etternavn = document.getElementById('Etternavn').value;
    const telefonnr = document.getElementById('Telefonnr').value;
    const epost = document.getElementById('E-post').value;

    let isValid = true;

    if (Film === "") {
        document.getElementById("Filmcheck").textContent = "Velg en film";
        isValid = false;
    } else{
        document.getElementById("Filmcheck").textContent="";
    }
    if (isNaN(antall) || antall < 1) {
        document.getElementById("Antallcheck").textContent = "Antall må være et tall større enn 0";
        isValid = false;
    }else {
        document.getElementById("Antallcheck").textContent = "";
    }
    if (fornavn === "") {
        document.getElementById("Fornavncheck").textContent = "Vennligst fyll ut fornavn";
        isValid = false;
    }else {
        document.getElementById("Fornavncheck").textContent = "";
    }
    if (etternavn === "") {
        document.getElementById("Etternavncheck").textContent = "Vennligst fyll ut etternavn";
        isValid = false;
    }else {
        document.getElementById("Etternavncheck").textContent = "";
    }
    if (!/^[0-9]{8}$/.test(telefonnr)) {
        document.getElementById("Telefonnrcheck").textContent = "Telefonnummeret må være 8 siffer";
        isValid = false;
    }else {
        document.getElementById("Telefonnrcheck").textContent = "";
    }
    if (!/\S+@\S+.\S+/.test(epost)) {
        document.getElementById("Epostcheck").textContent = "Skriv inn en gyldig e-postadresse";
        isValid = false;
    }else {
        document.getElementById("Epostcheck").textContent = "";
    }

    if (isValid) {

        const buy = {
            Film: Film,
            antall: antall,
            fornavn: fornavn,
            etternavn: etternavn,
            telefonnr: telefonnr,
            epost: epost,
        };

        billetter.push(buy);
        document.getElementById("Film").value = "";
        document.getElementById("Antall").value = "";
        document.getElementById("Fornavn").value = "";
        document.getElementById("Etternavn").value = "";
        document.getElementById("Telefonnr").value = "";
        document.getElementById("E-post").value = "";
        visBillett()
    }
}

// Slett billett
function slett() {
    billetter.splice(0, billetter.length);
    document.getElementById("Ut");
}
*/




