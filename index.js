const listaFuncionarios = []

function adicionarFuncionario(id, nome, cargo, taxaHoraria){
    let funcionario = {
        id: id,
        nome,
        cargo: cargo,
        taxaHoraria: taxaHoraria,
        horasTrabalhadas: []
    }

    listaFuncionarios.push(funcionario)
}

adicionarFuncionario(1, "Bruno", "Professor", 10)
console.log(listaFuncionarios)