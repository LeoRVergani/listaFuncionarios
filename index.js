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
    listaFuncionarios.map((funcionario) => {
        if (funcionario.id == idFuncionario){
            funcionario.horasTrabalhadas.push(numHoras)
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




    listaFuncionarios.map((funcionario) => {

        let totalHoras = 0
        funcionario.horasTrabalhadas.map((hora) => {
            totalHoras += hora
        })

        let salarioBruto = calcularSalarioMensal(funcionario)
        let inss = calcularInss(funcionario)
        console.log("-------- FUNCIONÁRIO -------- ")
        console.log(`Nome: ${funcionario.nome}`)
        console.log(`Cargo: ${funcionario.cargo}`)
        console.log(`Total de horas trabalhadas: R$${totalHoras}`)
        console.log(`Valor do INSS: R$${inss.toFixed(2)}`)
        console.log(`Salário bruto: R$${salarioBruto.toFixed(2)}`)
        console.log(`Salário líquido: R$${(salarioBruto - inss.toFixed(2))}`)
        console.log("----------------------------- \n")
    })
}

adicionarFuncionario(1, "Bruno", "Professor", 10)
registrarHoras(1, 8)
registrarHoras(1, 6)

adicionarFuncionario(2, "Leonardo", "Desenvolvedor", 60)
registrarHoras(2, 8)
registrarHoras(2, 6)

adicionarFuncionario(3, "João", "QA", 25)
registrarHoras(3, 8)
registrarHoras(3, 6)

// console.log(listaFuncionarios)

// let total = calcularSalarioMensal(listaFuncionarios[0])
// let inss = calcularInss(listaFuncionarios[0])

// console.log(`Total do salário bruto: ${total}`)
// console.log(`Total do INSS: ${inss}`)

gerarRelatorioPagamento()

