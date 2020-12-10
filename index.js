var promo = ["Ahmed", "Mohammed", "Houra", "Mohamad Bailo", "Saurav", "Kitty", "Elisabeth", "Nicolas", "Yeshi Tsering", "Mahmoudou", "Allan", "Ewa", "Mosindo", "Hassan", "Sébastien", "Damir", "Hadama", "Thi", "Mohamed", "Atif",];
function addPeople() {
    var newPeople = document.getElementById('addPeople').value;
    if (promo.indexOf(newPeople) == -1) {
        promo.push(newPeople)
        console.log(promo)
    } else if (promo.indexOf(newPeople) != -1) {
        console.log("IL EST DANS LE TAB")
    } else {
        console.log()
    }
}

// trouver une fonction qui trouve l'index de chaque item dans la liste

function suppPeople() {
    var suppPeople = document.getElementById('addPeople').value;
    var promo = ["Ahmed", "Mohammed", "Houra", "Mohamad Bailo", "Saurav",];
    var suppPeople = "Ahmed";
    if (promo.indexOf(suppPeople) != -1) {
        console.log("JE VAIS LE SUPP")
        promo.filter(suppPeople)
        console.log(promo)
    } else if (promo.indexOf(suppPeople) == -1) {
        console.log("J'ai pas trouvé")
        console.log(promo)
    } else {
    }
    console.log(promo)
}


function tirage() {
    var dice = Math.floor(Math.random() * promo.length)

    while (promo[dice] === "Sébastien" || promo[dice] === "Allan") {
        dice = Math.floor(Math.random() * promo.length)
    }
    document.getElementById('result').innerHTML = promo[dice];
}