//Velg film
function velg() {
    alert ("Valgt : "+document.getElementById("Film").value);
}

//Antall
function sjekk() {
    const streng = document.getElementById("tall").value;
    const tall = Number(streng);
    if(isNaN(tall)) {
        alert("Ikke et tall!");
    } else{
        alert("Du har valgt " + tall + " Kinobilletter");
    }
}




