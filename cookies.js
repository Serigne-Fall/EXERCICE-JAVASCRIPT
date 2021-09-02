// Créer un cookie
document.cookie = 'prenom=Fallou';

// Afficher tous les cookies
alert(document.cookie);

// Modifier un cookie
document.cookie = 'prenom=Seydina';

// Supprimer un cookie
document.cookie = 'prenom=';

// Options

document.cookie = 'prenom=engires; path=/admin';
document.cookie = 'prenom=engires; path=/admin; domain=engires.com';

let date = new Date(Date.now() + 31536000000);
date = date.toUTCString();
document.cookie = 'prenom=engires; path=/admin; domain=engires.com; expires=' + date;

document.cookie = 'prenom=engires; path=/admin; domain=engires.com; max-age=31536000000';

document.cookie = 'prenom=John; path=/admin; domain=believemy.com; max-age=31536000000; secure';