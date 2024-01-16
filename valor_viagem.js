const precoCombustivel = 5.79;
const kmPorLitros = 10;
const distancia = 100;

// Calcula o custo da viagem
const custoViagem = (distancia / kmPorLitros) * precoCombustivel;
console.log("O custo da viagem é: " + custoViagem.toFixed(2));