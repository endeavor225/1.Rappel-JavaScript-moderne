/* 
    1. Fonction pure.

    Une fonction pure a deux caractéristiques :
    1. Elle retourne toujours la même chose en fonction des mêmes arguments fournis.
    2. Elle n'utilise aucune valeurm mutable et n'a pas d'effets secondaires en dehors de son bloc.

*/

function add(a,b){
    return a+b;
}
console.log(add(12, 9));

let TVA = 18
function getFinalPrice (price){
    return price * (100 + TVA) / 100
}
console.log(getFinalPrice(3500));