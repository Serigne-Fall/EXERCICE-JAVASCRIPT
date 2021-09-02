let nbre=[1,2,3,3,4,5,6,7,8,65,3,3];
let monSet=new Set(nbre);
console.log(monSet)


let utilisateurs=new Map();
utilisateurs.set('admin',{
    email:'admin@gmail.com',
    mdp:'passer'
})
utilisateurs.set('engires',{
    email:'engires@gmail.com',
    mdp:'passer'
})
console.log(utilisateurs)
console.log(utilisateurs.get('engires').email)