
let numero = prompt("Olá, Padawan! Digite um número de sua escolha:");

numero = parseFloat(numero);

// Mostrar se o número é maior que 1000
if (numero > 1000) {
    alert("Esse número que você digitou é maior que 1000.");
} else {
    // Mostrar se o número é menor que 1000
    console.log("Esse número que você digitou é menor que 1000.")
}

const texto = prompt("Olá, Padawan. Digite aqui a primeira cor que veio na sua cabeça:")

// Verificando se a cor digitada é Amarelo
if (texto === "Amarelo") {
    console.log("Você digitou a cor 'Amarelo', pensamos iguais!");
} else {
    alert("Ops! Você não digitou a cor 'Amarelo', não pensamos iguais ;(")
}

let outroNumero = prompt("Olá novamente, Padawan! Digite outro número de sua escolha:")

outroNumero = parseFloat(outroNumero);

if (outroNumero >= 10 && outroNumero <= 50) {
    alert("Que legal! O número que você digitou está entre 10 e 50.");
} else {
    console.log("Que legal! O número que você digitou não está entre 10 e 50.");
}