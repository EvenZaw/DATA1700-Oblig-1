
const blankt = () => {
    document.getElementById("Film").value = "";
    document.getElementById("Antall").value = "";
    document.getElementById("Fornavn").value = "";
    document.getElementById("Etternavn").value = "";
    document.getElementById("Telefonnr").value = "";
    document.getElementById("E-post").value = "";
}
const billetter = [];
function registrer() {
    const Film = document.getElementById('Film').value;
    const antall = Number(document.getElementById('Antall').value);
    const fornavn = document.getElementById('Fornavn').value;
    const etternavn = document.getElementById('Etternavn').value;
    const telefonnr = document.getElementById('Telefonnr').value;
    const epost = document.getElementById('E-post').value
    const ticket = {
        Film: Film,
        antall: antall,
        fornavn: fornavn,
        etternavn: etternavn,
        telefonnr: telefonnr,
        epost: epost,
    };
    billetter.push(ticket);

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

        blankt();
}

function slettbilleter() {
    billetter.length = 0;
    const ut = document.getElementById('Ut');
    ut.innerHTML = '';
};

// Function to register ticket
/*function registrer() {
    var film = document.getElementById('Film').value;
    var antall = document.getElementById('Antall').value;
    var fornavn = document.getElementById('Fornavn').value;
    var etternavn = document.getElementById('Etternavn').value;
    var telefonnr = document.getElementById('Telefonnr').value;
    var epost = document.getElementById('E-post').value;

    // Validation
    if (film.trim() === '') {
        alert('Vennligst velg en film.');
        return false;
    }

    if (antall.trim() === '' || isNaN(antall) || parseInt(antall) < 1) {
        alert('Vennligst oppgi et gyldig antall billetter.');
        return false;
    }

    if (fornavn.trim() === '') {
        alert('Vennligst skriv inn fornavn.');
        return false;
    }

    if (etternavn.trim() === '') {
        alert('Vennligst skriv inn etternavn.');
        return false;
    }

    if (telefonnr.trim() === '' || !(/^\d{8}$/.test(telefonnr))) {
        alert('Vennligst skriv inn et gyldig telefonnummer (8 sifre).');
        return false;
    }

    if (epost.trim() === '' || !(/\S+@\S+\.\S+/.test(epost))) {
        alert('Vennligst skriv inn en gyldig e-postadresse.');
        return false;
    }

    // If all validation passes, proceed with registration
    // You can add code here to save the ticket information or perform other actions
    return true;
}

// Function to delete all tickets
function slettbilleter() {
    var ut = document.getElementById('Ut');
    ut.innerHTML = ''; // Clear all tickets
}*/

