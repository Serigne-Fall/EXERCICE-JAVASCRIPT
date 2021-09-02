
//Faire passer une infinite de parametres
function addition(...nombres){
    let resultat=0;
    nombres.forEach(nombre =>{
        resultat +=nombre;
    })
    console.log(resultat);
}
addition(1,2,3,4,5,5)

//fusionner deux tableau
let fruits=['pomme','banane','oraange'];
let aliments=['sucre','riz','viande',...fruits];
console.log(aliments)


//Decouper une chaine de caractere en plussieurs elements
let maPhrase="Bonjour tout le monde";
let elementByElement=[...maPhrase]
console.log(elementByElement)