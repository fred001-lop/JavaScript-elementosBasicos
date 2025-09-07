/*Los operadores lógicos tienen una tabla especial llamada "Tabla de verdad" que muestra lo que devuelve la combinación de operadores lógicos.

Tabla de verdad para el operador &&:

a	b	a && b
false	false	false
false	true	false
true	false	false
true	true	true
La única forma de obtener un true para el operador && es si tanto a como b son true

Tabla de verdad para el operador ||:

a	b	a || b
false	false	false
false	true	true
true	false	true
true	true	true
En este caso, para obtener un resultado true, a o b deben ser true.

Tabla de verdad para el operador !:

a	!a
false	true
true	false
Aquí el valor de a se invierte. Si a es false, entonces !a es true*/

// Escribe tu código a continuación
let b1 = 3;
let b2 = 4;
let b3 = !((b1 + b2) > (b1 * b2))

// No cambies la línea de abajo
console.log(`b3 = ${b3}`)