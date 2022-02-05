function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
};

const pessoa1 = {
    nome: "João",
    idade: 35
};
const pessoa2 = {
    nome: "Pedro",
    idade: 16
};
const animal = {
    nome: "Charles",
    idade: 2,
    especie: "Gato"
};

console.log(calculaIdade.apply(animal, [5]));