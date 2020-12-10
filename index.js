var promo = ["Ahmed", "Mohammed", "Thi", "Kitty", "Sébastien", "Allan"];

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


function tirage() {
    var dice = Math.floor(Math.random() * promo.length)

    while (promo[dice] === "Sébastien" || promo[dice] === "Allan") {
        dice = Math.floor(Math.random() * promo.length)
    }
    document.getElementById('result').innerHTML = promo[dice];
}


var newPeople = "Sébastien";

if (promo.indexOf(newPeople) == -1) {
    console.log("PAS DANS LE TAB")
} else if (promo.indexOf(newPeople) != -1) {
    console.log("IL EST DANS LE TAB")
} else {
    console.log()
}
