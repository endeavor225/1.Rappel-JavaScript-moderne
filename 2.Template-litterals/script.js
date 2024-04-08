/* 
  Les "template literals" ou "template strings" sont des chaînes utilisant une syntaxe extrêmement pratique.
  
  On peut les utiliser pour :
  - Intégrer des expressions JS à une chaîne
  - Intégrer des sauts de ligne
  - Concaténer des chaînes
  - Créer des templates (morceau de code).

  On crée un gabarit(traduction fr) en utilisant les backticks ``.
  Pour intégrer une expression, on utilise la syntaxe ${expression} entre les backticks.
*/

/* Ajout d'expression */

const a = 5
const b = 10

console.log("le calcul de a plus b est égal à:", a + b);
console.log(`le calcul de a plus b est égal à: ${a + b}`);

/* Saut de ligne */
console.log("Voici du texte \n qui passe à la linge");
console.log(`Voici du texte
 qui passe à la linge`);


/* Utilisation de l'expression retournée par une fonction. */

function foo(){
  return "abc"
}
console.log(`L'aphabet commence par : ${foo()}`);