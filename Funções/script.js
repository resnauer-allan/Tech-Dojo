// function saudacao(nome,horario){
//     if(horario < 1200){
//         return`Bom dia, ${nome}!`
//     }else if(horario < 1800){
//         return`Boa tarde, ${nome}!`
//     }else{
//         return`Boa noite, ${nome}!`
//     }
// }

// const nome = prompt("Qual seu nome? ")
// const horario = prompt("Qual o horário ")

// alert(saudacao(nome, horario))

// Calculadora de notas

while(true){
    const menu = Number(
        prompt(
            "Escolha uma opções \n 1 - Calcular com 2 notas\n 2 - Calcular com 3 notas \n 0 - Sair "
        )
    )

    if(menu === 1){
        const n1 = Number(prompt("Digite sua primeira nota: "))
        const n2 = Number(prompt("Digite sua segunda nota: "))
        alert(verificarAprovacao(calcularMedia2(n1, n2)))
    }else if(menu === 2){
        const n1 = Number(prompt("Digite sua primeira nota: "))
        const n2 = Number(prompt("Digite sua segunda nota: "))
        const n3 = Number(prompt("Digite sua terceira nota: "))
        alert(verificarAprovacao(calcularMedia3(n1, n2)))
    }else if(menu === 0){
        alert("Fim do programa")
        break
    }else{
        alert("Opção Inválida")
        break
    }
}

function calcularMedia2(n1 = 0, n2 = 0) {
    if (isNaN(n1) || isNaN(n2)) {
      alert("Valor inválido! Digite um número válido.");
      return; 
    }
    return (n1 + n2) / 2;
}

function calcularMedia3(n1 = 0, n2 = 0, n3 = 3) {
    if (isNaN(n1) || isNaN(n2) || isNaN(n3)) {
      alert("Valor inválido! Digite um número válido.");
      return; 
    }
    return (n1 + n2 + n3) / 3;
}

function verificarAprovacao(media){
    if (media >= 7){
        return`Parabéns, você foi aprovado com a média de: ${media.toFixed(1)}`
    }else{
        return `Infelizmente, você foi reporvado com a média de: ${media.toFixed(1)}`
    }
}



