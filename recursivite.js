
//Fonction Recursive

let nbr=Number(prompt("Entre un nbre"))
function sum(nombre){
    if (nombre==1){
        return 1;
    }
    return nombre+sum(nombre-1);
}
alert(sum(nbr));


