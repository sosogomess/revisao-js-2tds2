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
