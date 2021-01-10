var promo = ["Ahmed", "Mohammed", "Houra", "Mohamad Bailo", "Saurav", "Kitty", "Elisabeth", "Nicolas", "Yeshi Tsering", "Mahmoudou", "Allan", "Ewa", "Mosindo", "Hassan", "Sébastien", "Damir", "Hadama", "Thi", "Mohamed", "Atif",];

var printPromo = promo.join(" ")
document.getElementById("tab").innerHTML = printPromo;

var error = document.getElementById('alert-error').style.display = 'none';
var success = document.getElementById('alert-success').style.display = 'none';

function addPeople() {
    var newPeople = document.getElementById('addPeople').value;
    if (promo.indexOf(newPeople) === -1) {
        promo.push(newPeople)
        console.log("Ajouté avec succès")
        success = document.getElementById('alert-success').style.display = 'block';
        document.getElementById("alert-success").innerHTML = "Il a été ajouté avec succès";
        setTimeout(function () {
            error = document.getElementById('alert-success').style.display = 'none';
        }, 3000);
    } else if (promo.indexOf(newPeople) != -1) {
        console.log("Error : il est déjà dans le tab")
        error = document.getElementById('alert-error').style.display = 'block';
        document.getElementById("alert-error").innerHTML = "Erreur: il fait déjà parti du tableau";
        setTimeout(function () {
            error = document.getElementById('alert-error').style.display = 'none';
        }, 3000)
    } else {
        console.log("Error : idk")
    }
    printPromoKonexio(printPromo);
}


function suppPeople() { // doit supp dans array
    var suppPeople = document.getElementById('addPeople').value;

    if (promo.indexOf(suppPeople) === -1) {
        console.log("Il est inexistant")
        error = document.getElementById('alert-error').style.display = 'block';
        document.getElementById("alert-error").innerHTML = "Erreur: il est inexistant";
        setTimeout(function () {
            error = document.getElementById('alert-error').style.display = 'none';
        }, 3000)
    } else if (promo.indexOf(suppPeople) != -1) {
        console.log("Je vais le supprimer")
        error = document.getElementById('alert-success').style.display = 'block';
        document.getElementById("alert-success").innerHTML = `${suppPeople} a bien été supprimé!`;
        setTimeout(function () {
            error = document.getElementById('alert-success').style.display = 'none';
        }, 3000)
    } else {
    }
    printPromoKonexio(printPromo);
}

function printPromoKonexio(printPromo) {
    printPromo = promo.join(" ")
    document.getElementById("tab").innerHTML = printPromo;
}

function tirage() {
    var dice = Math.floor(Math.random() * promo.length)

    while (promo[dice] === "Allan" || promo[dice] === "Sébastien") {
        dice = Math.floor(Math.random() * promo.length)
    }
    document.getElementById('result').innerHTML = promo[dice];
}