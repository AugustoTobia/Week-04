//Strings

/*a) Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en mayúscula 
(utilizar toUpperCase).*/
var lowercase = 'hello world';
console.log(lowercase.toUpperCase());

/*b) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los primeros 5 caracteres
guardando el resultado en una nueva variable (utilizar substring).*/
var substringOne = lowercase.substring(0,5);
console.log(substringOne);

/*c) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con los últimos 3 caracteres 
guardando el resultado en una nueva variable (utilizar substring).*/
var substringTwo = lowercase.substring(8);
console.log(substringTwo);

/*d) Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string con la primera letra 
en mayúscula y las demás en minúscula. Guardar el resultado en una nueva variable (utilizar substring, toUpperCase, 
toLowerCase y el operador +).*/
var capitalLetter = lowercase.substring(0,1),
    lowcaseLetters = lowercase.substring(1),
    newString = capitalLetter.toUpperCase() + lowcaseLetters.toLowerCase();
console.log(newString);

/*e) Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco. Encontrar la posición 
del primer espacio en blanco y guardarla en una variable (utilizar indexOf).*/
var blankspace = lowercase.indexOf(' ');
console.log(blankspace);

/*f) Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún espacio entre medio). 
Utilizar los métodos de los ejercicios anteriores para generar un nuevo string que tenga la primera letra de 
ambas palabras en mayúscula y las demás letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase 
y el operador +).*/
var longString = 'bEaUtifUL uNiveRSE',
    blank = longString.indexOf(' '),
    firstCapLetter = longString.substring(0,1).toUpperCase(),
    firstWord = longString.substring(1,blank).toLowerCase(),
    secondCapLetter = longString.substring(blank+1,blank+2).toUpperCase(),
    secondWord = longString.substring(blank+2).toLowerCase(),
    result = firstCapLetter + firstWord + ' ' + secondCapLetter + secondWord;
    console.log(result);