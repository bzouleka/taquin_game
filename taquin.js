
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

function start() {
    let t = shuffle(tabT);
    afficher(t);
    if (paire(t) === true) {
        paire(t);
        document.getElementById('message').innerHTML = ("Good luck!!");
    } else {
        document.getElementById('message').innerHTML = ("Pas de solution valide!!");
    }
}


function move(){

    let vide = ' ';
    let G = document.getElementById("gauche");
    let D = document.getElementById("droite");

    for (let i = 0; i < tabT.length; i++){
        if (vide){}


    }

}








