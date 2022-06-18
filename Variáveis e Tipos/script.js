//Var e let

/*var a = 1;
var b = 2;

if(a === 1){
    var a = 11; //The scope is global
    let b = 22; //the scope is inside the if-black

    console.log(a); //11
    console.log(b); //22
  
}
console.log(a);//11
console.log(b);//2 */

//Var e let tem escopos diferentes

//Hoisting - Atribuir uma variavel antes de declarar ela...

numerOne = 1;

console.log(numerOne + 2);

var numerOne;

//Redeclaração - Não pode redeclarar o let, porem vc pode atribuir...

//Reatribuição - O nome da variavel sem a palavra reservada na frente, e igualar ela a outro valor.

//camelCase


/*Constantes
   .Declarada em SNAKE_UPPER_CASE ------------> Ex:.MY_NAME
   .Escopo de blobo
   Não faz hoisting

   Exemplo: const FIRST_NAME = 'Alexsandro';
                  FIRST_NAME = 'leal'
    OBS: não pode reatribuir a constante ou redeclarar....*/

/*Hosting
    
   Errado
    
   Ex.: FIRST_NAME = "Sandro";
   console.log(FIRST_NAME);
   const FIRST_NAME --------> vai dar erro, pois a const precisa ser inicializada

   Correto

   const FIRST_NAME = "Sandro";
   console.log(FIRST_NAME);*/

   
   

 