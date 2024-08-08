let massas = ["Tradicional", "Integral", "Pan"];
let molhos = ["Molho de Tomate", "Molho Branco", "Molho Pesto"];
let queijos = ["Mussarela", "Queijo Prato", "Provolone", "Gorgonzola"];
let carnes = ["Calabresa", "Pepperoni", "Frango", "Bacon"];
let vegetais = ["Tomate", "Cebola", "Pimentão", "Azeitona", "Manjericão"];

let pizza = [];

pizza.push(massas[0]);
pizza.push(molhos[0]);
pizza.push(queijos[2]);
pizza.push(carnes[3]);
pizza.push(vegetais[4]);

console.log("Pizza montada:");

for (let i = 0; i < pizza.length; i++) {
   if(i == 0 && pizza[i]== massas[1]){
    console.log("hmmm, ta fit");
   }
    console.log(pizza[i]);
}


let armas = ["sniper", "fuzil", "AK47", "misseis", "laser", "chicotada" ];
let ataques = [];

ataques.push("dev so");
ataques.push(armas[5]);
ataques.push(armas[0]);
ataques.push(armas[3]);
ataques.push(armas[5]);

// console.log("Nome do Robô:" +ataques[0]);

    for (let i = 0; i < ataques.length; i++) {
        if (i == 0) {
           //  console.log('Nome do robô: &{ataques[i]}');
           console.log("Nome do robô: " + ataques[i]);

        }else {
           // console.log('ataques & {i}: &{ataques[1]}');
           console.log("Ataque "+ i + ":" + ataques[i]);
        }
    }
