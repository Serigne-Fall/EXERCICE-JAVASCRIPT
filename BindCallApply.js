let Personne={prenom:"Serigne",nom:"Fall"}

let direBonjour=function(statut,niveau){
    console.log("Bonjour "+this.prenom+" "+this.nom+" statut :"+statut+" "+"niveau :"+niveau);
}
//call
direBonjour.call(Personne,"Etudiant","L3");

//apply
direBonjour.apply(Personne,["Etudiant","L3"]);

//bind

this.value="window";
let monObjet={
    value:"objet",
    getValue:function(){
        console.log(this.value)
    }
}
monObjet.getValue();
let maValeur=monObjet.getValue();
maValeur();
