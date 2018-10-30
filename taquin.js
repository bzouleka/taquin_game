
let tabT = [' ',1,2,3,4,5,6,7,8];

function afficher(tab){
    for(let i = 0; i<tab.length;i++){
       document.getElementById(i).innerHTML = tab[i];
    }
}
function shuffle(tabT) {
    for (let i = tabT.length- 1; i>0; i--){
        let j = Math.floor(Math.random() * (1 + 1));
        let temp= tabT[i];
        tabT[i] = tabT[j];
        tabT[j] = temp;
    }
    return tabT;
}


function permutation(tabT){
    let nbrPermutation = 0;
    for (let i = 0; i < tabT.length ; i++){
        let j = i;
        while( j < tabT.length -1){
            if (tabT[j+1] > tabT[j] ){ //comparaison
                //Ne pas faire de swap pour chercher le nombre de parité

                nbrPermutation++;
            }
            j++
        }
    }
    return nbrPermutation;
}
function paire(melange) {
    let paire = permutation(melange);
    if (paire % 2 === 0) {

        console.log("Il y a " + paire + " permutations.");
        return true;
        // permutation(melange);
    } else {
        console.log("Pas de Taquin dispo!!!");
        return false;
    }
}


function removeTable(){
    let impaire= shuffle();
    if (impaire % 2 !== 0 ){
        return tabT;
    }else{
        paire(tabT);
    }
}

function start() {
    let t = shuffle(tabT);
    afficher(t);
    if (paire(t) === true) {
        paire(t);
        document.getElementById('message').innerHTML = ("Good luck!!");
    } else {
        removeTable();
        document.getElementById('message').innerHTML = ("Pas de solution valide!!");
    }
}










// function keyCommand(keyCodeNumber){
//
//     let button = document.getElementById("bouton");
//     // utiliser les fleches du clavier pour bouger les case du taquin
//     let gauche = 37;
//     let haut = 38;
//     let droite = 39;
//     let bas = 40;
//
//     switch (keyCodeNumber) {
//         case gauche:
//             button.innerHTML = 'Gauche';
//             break;
//         case haut:
//             button.innerHTML = 'Haut';
//             break;
//         case droite:
//             button.innerHTML = 'Droite';
//             break;
//         case bas:
//             button.innerHTML = 'Bas';
//             break;
//     }
// }








