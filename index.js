var promo = ["Ahmed", "Mohammed", "Thi", "Kitty", "Sébastien", "Allan"];

function addPeople() {
    var newPeople = document.getElementById('addPeople').value;
    if (newPeople == promo.indexOf()) {
        console.log('déjà inscrit')
    }
    else {
        promo.unshift(newPeople)
        console.log('bien ajouté au tableau!')
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