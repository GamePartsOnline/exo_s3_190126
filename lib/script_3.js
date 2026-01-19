// Demander le nombre d'étages
let etages = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

// Convertir en nombre entier
etages = parseInt(etages);

// Construire la pyramide
for (let i = 1; i <= etages; i++) {
    // Créer les espaces
    let espaces = "";
    for (let j = 1; j <= etages - i; j++) {
        espaces = espaces + " ";
    }
    
    // Créer les dièses
    // Créer les dièses
    let dieses = "";
    for (let k = 1; k <= i; k++) {
        dieses = dieses + "#";
    }
    
    // Afficher la ligne complète
    console.log(espaces + dieses);
}