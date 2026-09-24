const prompt = require("prompt-sync")()


menuPrincipal()


let choix = prompt("Tapez un numero : ")

switch (choix) {
    case "1":
        
        break;
    case "2" :

        break;
    case "3" :
        break;
    default:
        break;
}













//Fonctions : ----------------------------------------------------------------------------------

function menuPrincipal(){
    console.log("1 : Afficher candidat")
    console.log("2 : Afficher la liste des candidats")
    console.log("3 : Voter")
    console.log("4 : Modifier les informations d'un candidat ")
    console.log("5 : Supprimer un candidats")
    console.log("6 : Rechercher des candidats")
    console.log("7 : Statistiques de l'élection")
}

function choix(){

}