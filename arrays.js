/*Arrays

a)Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre",
"Octubre", "Noviembre", "Diciembre"] mostrar por consola los meses 5 y 11 (utilizar console.log)

b)Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).

c)Agregar un elemento al principio y al final del array (utilizar unshift y push).

d)Quitar un elemento del principio y del final del array (utilizar shift y pop).

e)Invertir el orden del array (utilizar reverse)

f)Unir todos los elementos del array en un único string donde cada mes este separado por un guión - (utilizar join).

g)Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar slice).*/

var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
    "Noviembre", "Diciembre"];
//a)
console.log(meses[5]);
console.log(meses[11]);

//b)
var mesesAlpha = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
    "Noviembre", "Diciembre"];
console.log(mesesAlpha.sort());

//c)
var catorceMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
    "Noviembre", "Diciembre"];
catorceMeses.unshift('Mes Cero');
catorceMeses.push('Mes Trece');
console.log(catorceMeses);

//d)
var diezMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
    "Noviembre", "Diciembre"];
diezMeses.shift();
diezMeses.pop();
console.log(diezMeses);

//e)
var invertMeses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", 
    "Noviembre", "Diciembre"];
console.log(invertMeses.reverse());

//f)
console.log(meses.join('-'));

//g)
var mesesCopy = meses.slice(4,11);
console.log(mesesCopy);