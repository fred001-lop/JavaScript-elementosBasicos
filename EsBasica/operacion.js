let billAmount = parseFloat(inp[0]); // No cambies esta línea
let tipPercentage = parseFloat(inp[1]); // No cambies esta línea
let numPeople = parseInt(inp[2]); // No cambies esta línea

// Escribe tu código aquí abajo

let tip = billAmount * (tipPercentage / 100);
let total = billAmount + tip;




console.log("Bill Split Calculator");
console.log(`${total}`);

