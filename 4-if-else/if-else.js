/*If Else


/*a)Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es mayor o igual que 0,5 
mostrar una alerta con el mensaje “Greater than 0,5” y sino un alerta con el mensaje “Lower than 0,5”*/
var randomNumber = Math.random();
console.log(randomNumber);

if (randomNumber >= 0.5) {
    alert('Greater than 0,5');
} else {
    alert('Lower than 0,5');
}

/*b)Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los siguientes mensajes de alerta:
“Bebe” si la edad es menor a 2 años
“Nino” si la edad es entre 2 y 12 años
“Adolecente” si la edad es entre 13 y 19 años
“Joven” si la edad está entre 20 y 30 años
“Adulto” entre 31 y 60 años
“Adulto mayor” entre 61 y 75 años
“Anciano” si es mayor a 75 años*/
var Age = Math.floor(Math.random()*101)

if (Age < 2){
    alert('Bebé');
} else if (Age <= 12) {
    alert('Niño');
} else if (Age <= 19) {
    alert('Adolecente');
} else if (Age <=30) {
    alert('Joven');
} else if (Age <=60) {
    alert('Adulto');
} else if (Age <= 75) {
    alert('Adulto Mayor');
} else {
    alert('Anciano');
}
console.log('the age is ' + Age);
