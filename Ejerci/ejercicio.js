1. var num1 = 5;
var num2 = 10;
var suma = num1 + num2;

2.
var string1 = "Hola, ";
var string2 = "mundo!";
var resultado = string1 + string2;

console.log(resultado);

3.
var string1 = "Hola";
var string2 = "mundo";
var longitudTotal = string1.length + string2.length;

console.log("La longitud total es: " + longitudTotal);

4. var texto = "ejemplo de texto";
var textoEnMayusculas = texto.toUpperCase();

console.log(textoEnMayusculas);

5. var texto = "abcdefghij";
var primerosCincoCaracteres = texto.substring(0, 5);

console.log(primerosCincoCaracteres);

6.var texto = "abcdefghij";
var ultimosTresCaracteres = texto.substring(texto.length - 3);

console.log(ultimosTresCaracteres);

7. var texto = "eJEMPLO DE tExTO";
var primeraLetra = texto.substring(0, 1).toUpperCase(); // Extraemos la primera letra y la convertimos a mayúscula
var restoDelTexto = texto.substring(1).toLowerCase(); // Extraemos el resto del texto y lo convertimos a minúsculas
var nuevoTexto = primeraLetra + restoDelTexto; // Concatenamos la primera letra con el resto del texto

console.log(nuevoTexto); 

8. var texto = "cadena con espacios";
var posicionPrimerEspacio = texto.indexOf(" ");

console.log(posicionPrimerEspacio);

9. var texto = "elefante caballo";
var primerEspacio = texto.indexOf(" ");
var primeraLetraPrimeraPalabra = texto.substring(0, 1).toUpperCase();
var primeraLetraSegundaPalabra = texto.substring(primerEspacio + 1, primerEspacio + 2).toUpperCase();
var restoPalabra = texto.substring(1).toLowerCase();
var restoSegundaPalabra = texto.substring(primerEspacio + 2).toLowerCase();

var nuevoTexto = primeraLetraPrimeraPalabra + restoPalabra + " " + primeraLetraSegundaPalabra + restoSegundaPalabra;

console.log(nuevoTexto);

10. 
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(meses[4]); 
console.log(meses[10]);

11. 
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.sort();

console.log(meses);

12. var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.unshift("Principio");
meses.push("Final"); 

console.log(meses);

13. var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.shift(); // Elimina el primer elemento del array
meses.pop();   // Elimina el último elemento del array

console.log(meses);

14. var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

meses.reverse();

console.log(meses);

15. 
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var mesesUnidos = meses.join("-");

console.log(mesesUnidos);

16. 
var meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

var mesesCopia = meses.slice(4, 11); // Índice 4 para "Mayo" y Índice 11 para "Noviembre"

console.log(mesesCopia);

17. 
var numeroAleatorio = Math.random();


if (numeroAleatorio >= 0.5) {
        alert("Greater than 0.5");
} else {
        alert("Lower than 0.5");
}

18.
var age = Math.floor(Math.random() * 101); 
if (age < 2) {
    alert("Bebe");
} else if (age >= 2 && age <= 12) {
    alert("Niño");
} else if (age >= 13 && age <= 19) {
    alert("Adolescente");
} else if (age >= 20 && age <= 30) {
    alert("Joven");
} else if (age >= 31 && age <= 60) {
    alert("Adulto");
} else if (age >= 61 && age <= 75) {
    alert("Adulto mayor");
} else {
    alert("Anciano");
}

19.
var palabras = ["Hola", "Mundo", "JavaScript", "Programación", "OpenAI"];


for (var i = 0; i < palabras.length; i++) {
    // Mostrar una alerta con cada palabra del array
    alert(palabras[i]);
}

20.
var palabras = ["hola", "mundo", "javascript", "programación", "openai"];

for (var i = 0; i < palabras.length; i++) {
    var palabraModificada = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    alert(palabraModificada);
}

21.
var palabras = ["hola", "mundo", "javascript", "programación", "openai"];
var sentence = "";

for (var i = 0; i < palabras.length; i++) {
    sentence += palabras[i] + " ";
}

alert(sentence);

22.
var numeros = []; 
for (var i = 0; i < 10; i++) {
    numeros.push(i); 
}

console.log(numeros); 

23.function suma(num1, num2) {
    return num1 + num2;
}

var resultado = suma(5, 7);
console.log(resultado);

24.
function suma(num1, num2) {
    
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        alert("Uno de los parámetros tiene error.");
        return NaN;     }
    
       return num1 + num2;
}

var resultado = suma(5, 7);
console.log(resultado); 

25.
function validateInteger(numero) {
        return numero === Math.floor(numero);
}

console.log(validateInteger(5));  console.log(validateInteger(5.5));  
console.log(validateInteger(-10));  console.log(validateInteger(10.2)); 

26. 
function validateInteger(numero) {
    return numero === Math.round(numero);
}

function suma(num1, num2) {
    // Validar si los números son enteros
    if (!validateInteger(num1) || !validateInteger(num2)) {
        alert("Al menos uno de los parámetros no es un número entero.");
        // Convertir los números a enteros redondeándolos
        num1 = Math.round(num1);
        num2 = Math.round(num2);
    }
    
    return num1 + num2;
}

// Ejemplo de uso de la función suma con números enteros y decimales
console.log(suma(5, 7));    // Devolverá 12 (ambos números son enteros)
console.log(suma(5.5, 7));  // Mostrará una alerta y devolverá 13 (5.5 redondeado a 6)
console.log(suma(5, 7.5));  // Mostrará una alerta y devolverá 13 (7.5 redondeado a 8)
console.log(suma(5.2, 7.8)); 

27.
function validateInteger(numero) {
    return numero === Math.round(numero);
}

function validarEnteros(num1, num2) {
    // Validar si los números son enteros
    if (!validateInteger(num1) || !validateInteger(num2)) {
        alert("Al menos uno de los parámetros no es un número entero.");
        // Convertir los números a enteros redondeándolos
        num1 = Math.round(num1);
        num2 = Math.round(num2);
    }
    return [num1, num2];
}

function suma(num1, num2) {
    [num1, num2] = validarEnteros(num1, num2);
    return num1 + num2;
}

// Ejemplo de uso de la función suma con números enteros y decimales
console.log(suma(5, 7));    // Devolverá 12 (ambos números son enteros)
console.log(suma(5.5, 7));  // Mostrará una alerta y devolverá 13 (5.5 redondeado a 6)
console.log(suma(5, 7.5));  // Mostrará una alerta y devolverá 13 (7.5 redondeado a 8)
console.log(suma(5.2, 7.8));