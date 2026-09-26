const prompt = require("prompt-sync")()

let candidats = [{
cin : "AB123456",
nom : "Boushaba",
prenom : "Soufiane",
partiPolitique : "Indépendant",
age: 40,
electeurs: ["CD98","J9823"]
},
{
cin : "J756089",
nom : "Ahmadi",
prenom : "Karim",
partiPolitique : "Pam",
age: 45,
electeurs: ["C7832"]
},
{
cin : "S9879",
nom : "Alaoui",
prenom : "Jamal",
partiPolitique : "Pam",
age: 47,
electeurs: ["C7892","S987","O9873"]
}

];

   

let choixPrincipal

do {
    menuPrincipal()
    choixPrincipal = prompt("Tapez un numero : ")
   
    choixMenuPrincipal(choixPrincipal)
   
   
} while (choixPrincipal != "0");



 













//Fonctions : ----------------------------------------------------------------------------------

function menuPrincipal(){
    console.log("1 : Ajouter candidat")
    console.log("2 : Afficher la liste des candidats")
    console.log("3 : Voter")
    console.log("4 : Modifier les informations d'un candidat ")
    console.log("5 : Supprimer un candidats")
    console.log("6 : Rechercher des candidats")
    console.log("7 : Statistiques de l'élection")
    console.log("0 : Quitter")
}

function choixMenuPrincipal(choixPrincipal){
 switch (choixPrincipal) {
    case "1":
        
        doAjouterCandidat()
        break;
    case "2" :
        doAfficherListeCandidats()
        break;
    case "3" :
        doVoter()
        break;
    case "4" :
        doModifierCandidat()
        break;
    case "5" :
        doSupprimerCandidat()
        break;
    case "6" :
        doChercherCandidatParNom()
        break;
    case "7" :
        doStats()
        break;
    default:
        break;
    }
}
function doAjouterCandidat(){
            let choixAjouterCandidat
            do {
            menuAjouterCandidat()
            choixAjouterCandidat =prompt("Choisissez un numero : ")
            ajouterCandidat(choixAjouterCandidat)

        } while (choixAjouterCandidat != "0");

}

function menuAjouterCandidat(){
    console.log("1 : Ajouter un seul candidat")
    console.log("2 : Ajouter plusieurs candidats")
    console.log("0 : Revenir au menu principal")
}
function ajouterCandidat(choixAjouterCandidat){
    switch (choixAjouterCandidat) {
        case "1" :
            ajouterUnSeulCandidat()
            break;
        case "2" :
            ajouterPlusieursCandidats()
        default:
            break;
    }
}


function ajouterUnSeulCandidat(){
   
    let cinCandidat=prompt("Cin du candidat: ")
   
    // si cinCandidat existe dans candidats : return 0
    if (candidats.findIndex(x => x.cin == cinCandidat) != -1 ){
        console.log("Votre candidat existe déja. ")
        return 0
    }

    let nomCandidat=prompt("Nom du candidat: ")
   
    let prenomCandidat = prompt("Prenom du candidat : ")

    let partiPolitiqueCandidat = prompt("Parti politique du candidat : ")

    let ageCandidat = Number(prompt("Age du candidat : "))
    let elec = []

    console.log("cin des electeurs, tapez 0 pour arreter")

    
    let i=0

    let cinElecteur
    do {
        cinElecteur= prompt("cin de l'electeur : ")
        if(cinElecteur == "0"){
            break
        }
        elec[i]=cinElecteur
        i++
    } while (true);

    let candidat ={
        cin : cinCandidat,
        nom : nomCandidat,
        prenom : prenomCandidat,
        partiPolitique : partiPolitiqueCandidat,
        age : ageCandidat,
        electeurs : elec

    }
    candidats.push(candidat)

}

function ajouterPlusieursCandidats(){
    let cArret
    do {
        cArret = prompt("Tapez 1 pour ajouter un candidat oubien tapez 0 pour arreter")
        if(cArret == "0"){
            break
        }else if (cArret =="1"){
            ajouterUnSeulCandidat()
        }
       

    } while (true);

}

function doAfficherListeCandidats(){
            let choixAfficherListeCandidats
            do {
                menuAfficherListeCandidats()
                choixAfficherListeCandidats = prompt("Choisissez un numero : ")
                afficherListeCandidats(choixAfficherListeCandidats)

            } while (choixAfficherListeCandidats !="0");
}

function menuAfficherListeCandidats(){
    console.log("1 : Affichage normale")
    console.log("2 : Affichage trié par vote")
    console.log("3 : Affichage des candidats d'un parti politique")
    console.log("0 : Revenir au menu principal")
}


function afficherListeCandidats(choixAfficherListeCandidats){
    switch (choixAfficherListeCandidats) {
        case "1":
            affichageNormale()
            break;
        case "2":
            affichageTrieParVote()

            break;
        case "3" :
            affichageParCin()
       
        default:
            break;
    }
}

function affichageNormale(){
    for (let i=0;i<candidats.length;i++){

        affichageCandidat(i)
    }
   
}

function affichageCandidat(i){
        console.log(`# Candidat ${i+1}:`)
        console.log(`CIN : ${candidats[i].cin}`)
        console.log(`Nom : ${candidats[i].nom}`)
        console.log(`Nombre de votes : ${candidats[i].electeurs.length}`)
        console.log(`---------------`)

}


function affichageTrieParVote(){
    //indexCandidat : tableau d'objet contenant index du candidat et nombre d'electeurs
    let indexCandidats=[]
    let max=0

    for (let i = 0; i < candidats.length; i++) {
        let indexCandidat = {
            index : i,
            nombreElecteurs :  candidats[i].electeurs.length
        }
        indexCandidats.push(indexCandidat)
       
    }

    //trier indexCandidat du plus grand au plus petit
    let tmp
    for(let i = indexCandidats.length-1;i>=1;i--){
       
        for(let j=0; j<=i-1;j++){
            if (indexCandidats[j+1].nombreElecteurs < indexCandidats[j].nombreElecteurs){
                tmp =indexCandidats[j]
                indexCandidats[j]=indexCandidats[j+1]
                indexCandidats[j+1]=tmp
            }
        }
    }



    //affichage du plus grand au plus petit (commencer le tableau par la droite)

   
   
   
    for ( let i=indexCandidats.length-1; i>=0;i--){
        //console.log(candidats[indexCandidats[i].index])
        affichageCandidat(indexCandidats[i].index)
    }
}


function affichageParCin(){
    let partiSaisit=prompt("saisissez le parti du candidat: ")
    let result=candidats.filter((candidat)=> candidat.partiPolitique == partiSaisit)

    //let result = candidats.findIndex(x => x.partiPolitique == partiSaisit)
   
    if(result.length == 0){
        console.log("parti non trouvé")
    }else{
        affichageParObjet(result)
    }

   
}

function affichageParObjet(result){
    for(let i =0;i<result.length;i++){
        console.log(`# Candidat ${i+1}:`)
        console.log(`CIN : ${result[i].cin}`)
        console.log(`Nom : ${result[i].nom}`)
        console.log(`Nombre de votes : ${result[i].electeurs.length}`)
        console.log(`---------------`)
    }
}
function doVoter(){
    let cinElecteur
    do {
         cinElecteur= prompt("Saisissez votre Cin, 0 pour quitter : ")
        if(cinElecteur == "0"){
            break
        }
        voter(cinElecteur)
    } while (true);
}

function voter(cinElecteur){
    for(let i =0;i<candidats.length;i++){
        //verifier si cinElecteur est dans les tableau electeurs
        if (candidats[i].electeurs.indexOf(cinElecteur) != -1 ){
            console.log("vous avez deja voté pour un candidat")
            break
        }

    }
    affichageNormale()
    let cinCandidat = prompt("Saisissez la cin du candidat : ")

    // trouver l'index du candidat qui a pour cin :  cinCandidat
    let indexCandidat = candidats.findIndex(x => x.cin ==cinCandidat)
    if (indexCandidat != -1){
        candidats[indexCandidat].electeurs.push(cinElecteur)

    }else{
        console.log("candidat introuvable")
    }
}

function doModifierCandidat(){
    affichageNormale()
    let cinCandidat = prompt("Saisissez la cin du candidat : ")
    // trouver index du candidat selon cin
    let indexCandidat = candidats.findIndex(x => x.cin == cinCandidat)
    if (indexCandidat == -1){
        console.log("candidat introuvable")
    }else{
        console.log("age : "+candidats[indexCandidat].age)
        candidats[indexCandidat].age= Number(prompt("nouvel age du candidat"))
        candidats[indexCandidat].partiPolitique=prompt("nouveau parti politique du candidat")
    }
}
function doSupprimerCandidat(){
    affichageNormale()
    let cinCandidat = prompt("Saisissez la cin du candidat : ")
    // trouver index du candidat selon cin
    let indexCandidat = candidats.findIndex(x => x.cin == cinCandidat)
    if (indexCandidat == -1){
        console.log("candidat introuvable")
    }else{
        //suppression du candidat
        candidats.splice(indexCandidat,1)
    }
}

function doChercherCandidatParNom(){
    let nomCandidat=prompt("Saisissez le nom du candidat : ")
    let indexCandidat = candidats.findIndex(x => x.nom == nomCandidat)
        if (indexCandidat == -1){
        console.log("candidat introuvable")
    }else{
        //affichage du candidat
        affichageCandidat(indexCandidat)
       
    }
}
function doStats(){
    let cStats
    do {
       
        menuStats()
        cStats = prompt("Choisissez un numero : ")
        stats(cStats)

    } while (cStats != "0");
}
function menuStats(){
        console.log("1 : Affichage le nombre total de candidats")
        console.log("2 : Affichage du nombre total de vote exprimé dans toute l'élection")
        console.log("3 : Affichage du Top 3 des candidats ayant le plus de votes.")
        console.log("4 : Affichage du nombre de candidats par parti politique")
        console.log("0 : Revenir au menu principal")

}

function stats(cStats){
    switch (cStats) {
        case "1":
            afficherNombreTotalCandidats()
            break;
        case "2":
            nombreTotalVotes()
            break;
        case "3":
            console.log("comming soon...")
            break;
        case "4":
            console.log("comming soon...")
            break;

        default:
            break;
    }
}
function afficherNombreTotalCandidats(){
    console.log(`Nombre total des candidats : ${candidats.length}`)
}
function nombreTotalVotes(){
    let nombreTotalVotes=0
    for(let i=0;i<candidats.length;i++){
        nombreTotalVotes += candidats[i].electeurs.length
    }
    console.log(`Nombre total de votes exprimés dans toute l'élection : ${nombreTotalVotes}`)
}
//------------------------------------------------------------
