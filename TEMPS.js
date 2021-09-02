//format normale
let date =Date()
console.log(date)
//format seconde :nbre de seconde depuis 1er janvier 1970
let dateEnSeconde=Date.now()
console.log(dateEnSeconde)



// Au-dessus :
//   - annee (obligatoire)
//   - mois (obligatoire) qui commence par 0

//   - jour (facultatif) qui commence par 1
//   - heure (facultatif) qui commence par 0
//   - minute (facultatif) qui commence par 0
//   - secondes (facultatif) qui commence par 0
//   - millisecondes (facultatif) qui commence par 0 a 999

//------------------------------------------------------------------------------//
//Lobjet date

let dateActuelle=new Date()
console.log("l'annee actuelle:"+dateActuelle.getFullYear())
console.log("l'annee actuelle en  UTC:"+dateActuelle.getUTCFullYear())
console.log("le jour actuelle"+dateActuelle.getDay()) //ca commence par dimanche avec index 0
console.log("le jour du moi actuelle"+dateActuelle.getDate())
console.log(dateActuelle.getMonth()) // 0 a 11

//Date au format local
// toLocaleDateString = jour, mois, l'année
// toLocaleTimeString = l'heure
// toLocaleString     = jour, mois, l'année, l'heure
// ON CHOISI LES OPTIONS QU'ON VEUT
let datelocal=dateActuelle.toLocaleString( "fr-FR",{
    weekday: 'long', // short (3 premières lettres), narrow (première lettre), long (toutes les lettres)
    year: 'numeric', // numeric (xxxx), 2-digit (xx)
    month: 'long', // short, narrow, long, numeric
    day: 'numeric', // numeric, 2-digit
    hour: 'numeric', // ...
    minute: 'numeric',
    second: 'numeric'
})
console.log(datelocal)