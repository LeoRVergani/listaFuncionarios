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

function registrarHoras(idFuncionario, numHoras){
    listaFuncionarios.map((func) => {
        if (func.id == idFuncionario){
            func.horasTrabalhadas.push(numHoras)
        }
    })
}

function calcularSalarioMensal(funcionario) {
    let totalHoras = 0
    funcionario.horasTrabalhadas.map( hora => {
        totalHoras += hora
    } )

    return totalHoras * funcionario.taxaHoraria
}

function calcularInss(funcionario){
    let inss = 0
    let salarioBruto = calcularSalarioMensal(funcionario)


    if(salarioBruto > 4000.04) {
        inss = salarioBruto * 14 / 100
    } else if (salarioBruto > 2666.69) {
        inss = salarioBruto * 12 / 100
    } else if (salarioBruto > 1412.01) {
        inss = salarioBruto * 9 / 100
    } else {
        inss = salarioBruto * 7.5 / 100
    }

    if(inss > 908.85) {
        inss = 908.85
    }

    return inss
}

function gerarRelatorioPagamento(){
    console.log("-------- RELATÓRIO DE PAGAMENTOS -------- \n")

    let totalHoras = 0
    func.horasTrabalhadas.map((hora) => {

    })

    listaFuncionarios.map((func) => {
        console.log(`Nome: ${func.nome}`)
        console.log(`Cargo: ${func.cargo}`)
        console.log(`Total de horas trabalhadas: ${func.horasTrabalhadas}`)
        console.log(`Total de horas trabalhadas: ${func.calcularSalarioMensal}`)
    })
}

adicionarFuncionario(1, "Bruno", "Professor", 10)
registrarHoras(1, 8)
registrarHoras(1, 6)
console.log(listaFuncionarios)

let total = calcularSalarioMensal(listaFuncionarios[0])
let inss = calcularInss(listaFuncionarios[0])

console.log(`Total do salário bruto: ${total}`)
console.log(`Total do INSS: ${inss}`)

