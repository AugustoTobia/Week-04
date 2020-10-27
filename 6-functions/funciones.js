//Funciones


/*a)Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar la función y guardar el
resultado en una variable, mostrando el valor de dicha variable en la consola del navegador.*/
var resultado;
    suma = function(a,b) {
    resultado = a + b;
    return resultado;
};

suma(15, 21);
console.log(resultado);

/*b)A la función suma anterior, agregarle una validación para controlar si alguno de los parámetros no es un número,
mostrar una alerta aclarando que uno de los parámetros tiene error y retornar el valor NaN como resultado.*/
var suma = function(a,b) {
    if(typeof(a) !== 'number' || typeof(b) !== 'number'){
        return 'NaN';
    } else {
        resultado = a + b;
        return resultado;
    }
};
console.log(suma(1,1));

//c)Crear una función validate integer que reciba un número como parámetro y devuelva verdadero si es un número entero.

//opción 1, con el operador Number.isInteger
var numero = 2.2,
    valInteger = function(a){
   console.log(Number.isInteger(a));
};

valInteger(numero);

//Opción 2, validación manual
var valIntegerManual = function(a){
    if((a%1) === 0){
        return true;
    } else {
        return false;
    }
};

alert(valIntegerManual(numero));


/*d)A la función suma del ejercicio 6b) agregarle una llamada que valide que los números sean enteros. En caso que haya
decimales mostrar un alerta con el error y retorna el número convertido a entero (redondeado).*/
var sumaInteger = function(a,b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        return 'NaN';
    } else {
        valIntegerManual(a);
        valIntegerManual(b);

        if (valIntegerManual(a) === false) {
            var rest = a%1;
            alert(a+' Is not an integer Number, it will be rounded');
            
            if (rest > 0.5) {
                var rounded = 1 - rest;
                a = a + rounded;
            } else {
                a = a - rest;
            }
        } 
        if (valIntegerManual(b) === false) {
            var rest = b%1;
            alert(b +' Is not an integer Number, it will be rounded');
            if (rest > 0.5) {
                var rounded = 1 - rest;
                b = b + rounded;
            } else {
                b = b - rest;
            }
        }
        resultado = a + b;
        return resultado;    
    }
};

/*e)Convertir la validación del ejercicio 6b) en una función separada y llamarla dentro de la función suma probando
que todo siga funcionando igual.*/
var checkRest = function(a,b) {
    valIntegerManual(a);
    valIntegerManual(b);

    if (valIntegerManual(a) === false) {
        var rest = a%1;
        alert(a+' Is not an integer Number, it will be rounded');
        
        if (rest > 0.5) {
            var rounded = 1 - rest;
            a = a + rounded;
        } else {
            a = a - rest;
        }
    } 

    if (valIntegerManual(b) === false) {
        var rest = b%1;
        alert(b +' Is not an integer Number, it will be rounded');
        if (rest > 0.5) {
            var rounded = 1 - rest;
            b = b + rounded;
        } else {
            b = b - rest;
        }
    }
};
var checkNumber = function(a,b) {
    if (typeof(a) !== 'number' || typeof(b) !== 'number') {
        return 'NaN';
    };
}
var sumaAuto = function(a,b) {
    checkNumber(a,b);
    checkRest(a,b);
    alert(a+b);
};
console.log(sumaAuto(5.2,4.8));