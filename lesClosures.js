function timer() {
    let time = 0;
    let maClosure = () => {
        return ++time;
    }
    return maClosure;
}

let monPremierTimer = timer();
console.log(monPremierTimer())
console.log(monPremierTimer())

console.log('---------------------')

let monDeuxiemeTimer = timer();
console.log(monDeuxiemeTimer())
console.log(monDeuxiemeTimer())
//Les closures sauvegardent les fonctions