const lista = [
    {
        nome: 'Sabao em po',
        preco: 10,
    },
    {
        nome: 'Toalha',
        preco: 30,
    },
    {
        nome: 'Cereal',
        preco: 8,
    },
];

const saldoDisponivel = 100;

function calculaSaldo(saldoDisponivel, lista) {
    return lista.reduce(function(prev, current, index){
        console.log('Rodada', index + 1);
        console.log({ prev });
        console.log({ current });
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));