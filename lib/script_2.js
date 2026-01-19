
function factorielle(n) {
    let resultat = 1;
    
    for (let i = 1; i <= n; i++) {
        resultat = resultat * i;
    }
    
    return resultat;
}

// Demander un nombre à l'utilisateur
let nombre = prompt("De quel nombre veux-tu calculer la factorielle ?");

// Convertir en nombre entier
nombre = parseInt(nombre);

// Appeler la fonction et stocker le résultat
let resultatFactorielle = factorielle(nombre);

// Afficher le résultat dans la console
console.log("Le résultat est : " + resultatFactorielle);