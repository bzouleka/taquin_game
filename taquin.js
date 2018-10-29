
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
let melange = shuffle(tabT);
// console.log(melange);
afficher(melange);

function paire(tabT){
    let nbrPermutation = 0;
    for (let i = 0; i < tabT.length -1; i++){
        let j = i;
        while( j < tabT.length -1){
            if (tabT[j]+1 < tabT[j] ){
                let temp= tabT[i];
                tabT[i] = tabT[j];
                tabT[j] = temp;
            }
        }
    }
    return tabT;
    console.log("parité " + j)

}



