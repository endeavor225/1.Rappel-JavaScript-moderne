/* 
    1. Spread operator

    La syntaxe de décomposition permet de copier les valeurs d'un élément itérable, comme un tableau, une chaîne ou un objet.
    C'est pratique pour effectuer une copie superficielle ou afficher une liste.
*/

const array = [1, 2, 3, 4, {a:5}]
console.log(...array);

const shallowArrayCopy = [...array, 5, 6, 7, 8]
console.log(shallowArrayCopy);

array[4].a = 5555
console.log(shallowArrayCopy);

const obj = {
    name: 'Laura',
    age: 34,
}
const shallowObjCopy = {...obj, dogName: 'Tim'}
console.log(shallowObjCopy);

// si une propriété est rajoutée alors qu'elle provient d'un objet copié, elle sera remplacée.

const shallowObjCopy2 = {...obj, name: 'Anna'}
console.log(shallowObjCopy2);

// Fonctionne également avec les chaînes de caractères
const str = "Le chat saute, le chien court."
const shallowStrCopy = {...str}
console.log(shallowStrCopy);
