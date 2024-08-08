let carro1 = "Hrv";
let carro2 = "Civic";
let carro3 = "Jetta";

const carro = [];
carro[0] = "Nivus";
carro[1] = "Renegade";

console.log (carro);
console.table (carro);
console.log (carro.length);
console.clear ();

let carroCopia1 = carro;
console.log (carro);
console.log (carroCopia1);
console.log (carro == carroCopia1);

let carroCopia2 = carro.slice();
let carroCopia3 = [].concat(carro);
let carroCopia4 = Array.from(carro);


let frutas = ["maça", "banana", "laranja"];
console.table(frutas);
frutas.pop();
console.table(frutas);
frutas.push("kiwi selvagem");
console.table(frutas);