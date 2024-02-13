



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


