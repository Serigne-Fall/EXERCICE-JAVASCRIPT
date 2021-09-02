let reponse;
do{
let choix;
let nb1,nb2,res;

do{
    choix= parseInt(prompt("Que souhqitez vous faire?\n1-Addition\n2-Multiplication\n3-Soustraction\n4-division"));

}while (choix<1 || choix>4 || isNaN(choix));
do{
     nb1= parseInt(prompt("Entrer le premier nombre"));
}while (isNaN(nb1));
do{
    nb2= parseInt(prompt("Entrer le deuxieme nombre"));
}while (isNaN(nb2));

function addition(nb1,nb2){
    return nb1+nb2;
}
function multiplication(nb1,nb2){
    return nb1*nb2;
}function soustraction(nb1,nb2){
    return nb1-nb2;
}function division(nb1,nb2){
    if (nb2==0){
        throw new Error("Impossible de diviser avec 0");
    }
    return nb1/nb2;
}


try {
    switch (choix){
        case 1:
            res=addition(nb1,nb2)
            alert(nb1+"+"+nb2+"="+res);
            break;
        case 2:
            res=multiplication(nb1,nb2);
            alert(nb1+"*"+nb2+"="+res);
            break;
        case 3:
            res=soustraction(nb1,nb2);
            alert(nb1+"-"+nb2+"="+res);
            break;
        case 4:
            res=division(nb1,nb2);
            alert(nb1+"/"+nb2+"="+res)
            break;

    }
}catch (error){
    alert(error);
}
 reponse=confirm("Voulez-vous effectuer un autre calcul?");
}while (reponse);
