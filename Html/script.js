// const turno = prompt("Digite seu turno atual: ")

// switch (turno.toLowerCase().trim()){
//     case "dia":
//         alert("Bom Dia!")
//         break
//     case "tarde":
//         alert("Boa Tarde!")
//         break
//     case "noite":
//         alert("Boa Noite!")
//         break
//     default:
//         alert("Opção Inválida")
//         break
// }

// const dia = prompt("Qual o dia da semana? ")

// switch (dia.toLowerCase().trim()){
//     case "1":
//         alert("Domingo")
//         break
//     case "2":
//         alert("Segunda-Feira")
//         break
//     case "3":
//         alert("Terça-feira")
//         break
//     case "4":
//         alert("Quarta-feira")
//         break
//     case "5":
//         alert("Quinta-feira")
//         break
//     case "6":
//         alert("Sexta-feira")
//         break
//     case "7":
//         alert("Sábado")
//         break
//     default:
//         alert("Número Inválido")
//         break
// }
//-------------------------------------------------------------------
// let contador = 1

// while(contador <= 10){
//     console.log(contador)
//     contador++
// }
//-------------------------------------------------------------------
// let resposta

// do{
//     resposta = Number(prompt("Escolha uma opção:\n 1 - Olá\n 2 - Bom dia! \n 3 - Sair"))

//     switch (resposta) {
//         case 1:
//             alert("Olá")
//             break
//         case 2:
//             alert("Bom dia!")
//             break
//         case 3:
//             break
//         default:
//             alert("Opção Inválida")
//             break
//     }
// }while(resposta !== 3)

// --------------------------------------------------------------------

// while (true){
//     const fruta = prompt("Digite qualquer coisa")
//     if (fruta.toLowerCase() === "sair") {
//         break;
//     }
// }
//----------------------------------------------------------------------

// let soma = 0
// let quantidade = 0

// while (true){
//     const nota = Number(prompt("Digite uma nota: "))
//     if (nota === 11){
//         break
//     }else{
//         soma += nota
//         quantidade ++
//     }
// }

// const media = soma / quantidade
// if(media >= 7){
//     alert(`Com a média ${media.toFixed(2)} você foir aprovado`)

// }else{
//     alert(`Com a média ${media.toFixed(2)} você foir reprovado`)
// }

//--------------------------------------------------------------------------

// for(let i = 0; i <= 5; i++){
//     const numero = Number(prompt(`Digite o ${i} número: `))
//     if(numero % 2 ===0){
//         alert(`O número ${numero} é par`)
//     }else{
//         alert(`O número ${numero} é impar`)
//     }
// }
//---------------------------------------------------------------------------

// const nome = prompt("Digite seu nome: ")
// let contador = 0
// const todos_os_as = "aãâáà"

// for(let letra_atual of nome.toLowerCase()){
//     if(todos_os_as.includes(letra_atual)){
//         contador++
//     }
// }

// alert(`O nome ${nome} possuí ${contador} letras A`)


//-------------------------------------------------------------------------

//Contador de Palavras

// let contador = 0
// let frase = prompt("Digite uma frase: ")

// for(let palavra of frase.trim().split(/\s+/)){
//     contador++
// }

// alert(`A frase ${frase} possuis ${contador} palvras`)

//------------------------------------------------------------------

//Qual o menor valor digitado
// let contador = 0
// let primeiro = Number(prompt("Digite um número: "))
// let maior = primeiro
// let menor = primeiro
// let soma = primeiro
// while(contador < 9){
//     let numero = Number(prompt("Digite um número: "))
//     if(numero < menor){
//         menor = numero
//     }
//     if(numero > maior){
//         maior = numero
//     }
//     contador ++
//     soma += numero
// }

// let media = soma / 10

// alert(`O número ${menor} é o menor número \n O número ${maior} é o maior número\n E a média é ${media}`)

// Validador de notas
// Todas as notas devem estar entre 0 e 10

// let nota;
// let soma = 0;
// let contador = 0;
// let media;

// while (true) {
//   nota = Number(prompt("Digite sua nota (ou -1 para sair): "));

//   if (nota === -1) {
//     break; // sai do loop se o usuário digitar -1
//   }

//   if (isNaN(nota)) {
//     alert("Entrada inválida. Por favor, digite um número.");
//   } else if (nota < 0 || nota > 10) {
//     alert("Nota inválida. Digite um valor entre 0 e 10.");
//   } else {
//     soma += nota;
//     contador++;
//   }
// }

// if (contador > 0) {
//   media = soma / contador;
//   alert(`Sua média foi ${media.toFixed(2)}`);
// } else {
//   alert("Nenhuma nota válida foi inserida.");
// }


//---------------------------------------------------------------------------

// Contador de Vogáis

// const nome = prompt("Digite seu nome: ")

// let contador = 0
// const vogais = "aáàâãäeéèêëiíìîïoóòôõöuúùûü"

// for(let letra of nome.toLowerCase()){
//     if(vogais.includes(letra)){
//         contador++
//     }
// }

// alert(`O nome ${nome} possuí ${contador} vogais`)

//--------------------------------------------------------------------------

// Validador de senhas fortes
// Uma senha forte deve ter: Letras Maiuscúlas, caracter especial e numeros

// const especiais = "-+_)(*&^%$#@!";
// const numeros = "0123456789";

// const senha = prompt("Digite sua senha: ");

// let temMaiuscula = false;
// let temNumero = false;
// let temEspecial = false;

// for (let caracter of senha) {
//   if (caracter === caracter.toUpperCase() && caracter !== caracter.toLowerCase()) {
//     temMaiuscula = true;
//   }
//   if (numeros.includes(caracter)) {
//     temNumero = true;
//   }
//   if (especiais.includes(caracter)) {
//     temEspecial = true;
//   }
// }

// if (temMaiuscula && temNumero && temEspecial) {
//   alert("Sua senha é forte!");
// } else {
//   alert("Sua senha é fraca. Ela precisa conter letra maiúscula, número e caractere especial.");
// }

//-----------------------------------------------------------------------------------------------------------

// Crie um programa que receba um CPF digitado pelo usuário e diga se ele tem 11 dígitos numéricos e está formatado corretamente (XXX.XXX.XXX-XX).

// let cpf = prompt("Digite seu CPF:");
// cpf = cpf.replace(/\D/g, ''); // remove tudo que não é dígito
// let tamanho = cpf.length;

// if(tamanho != 11){
//   alert("CPF Inválido")
// }else{
//   alert("CPF Válido")
// }

//------------------------------------------------------------------------------------------------------------

// Cadastre um login e senha em variáveis e peça para o usuário digitar. Se os dados forem iguais aos cadastrados, exiba "Acesso permitido", senão "Acesso negado".

// const usuarios = {
//   "allan" : "1234",
//   "ana" : "4321"
// }

// const login = prompt("Digite seu login: ")
// const senha = prompt("Digite sua senha: ")

// if (usuarios[login] && usuarios[login] === senha) {
//   alert("Acesso permitido!");
// } else {
//   alert("Usuário ou senha incorretos.");
// }

//---------------------------------------------------------------------------------------

// Contador de vogais e consoantes 

// const vogais = "aeiou";
// const consoantes = "bcdfghjklmnpqrstvwxyz";

// const palavra = prompt("Digite uma palavra: ").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();

// let temVogal = false;
// let temConsoante = false;
// let contador_vogal = 0;
// let contador_consoante = 0;

// for (let caracter of palavra) {
//   if (vogais.includes(caracter)) {
//     temVogal = true;
//     contador_vogal++
//   }
//   if (consoantes.includes(caracter)) {
//     temConsoante = true;
//     contador_consoante ++
//   }
// }

// if (temVogal === true) {
//   alert(`Sua palavra tem ${contador_vogal} vogais`);
// }  

// if(temConsoante === true){
//   alert(`Sua palavra tem ${contador_consoante} consonates`);
// }

//---------------------------------------------------------------------------------------------------

// //Verificador de palíndromo

// const entrada = prompt("Digite uma palavra ou frase: ");

// const palavra = entrada
//   .normalize("NFD")                     // remove acentos
//   .replace(/[\u0300-\u036f]/g, "")     // remove marcas de acento
//   .replace(/[^a-zA-Z0-9]/g, "")        // remove tudo que não for letra ou número
//   .toLowerCase();                      // padroniza para minúsculo


// const invertida = palavra.split("").reverse().join("");

// if (invertida === palavra){
//   alert(`${palavra} é um palíndrofo: ${invertida}`)
// }else{
//   alert("Não é um Palíndrofo")
// }

//---------------------------------------------------------------------------------

// Conversor de temperatura

// const celsius = Number(prompt("Digite a temperatura em Celsius:"));

// const fahrenheit = (celsius * 9/5) + 32;
// const kelvin = celsius + 273.15;

// alert(`Temperatura:
// 🌡️ ${celsius}°C
// 🔥 ${fahrenheit.toFixed(2)}°F
// ❄️ ${kelvin.toFixed(2)} K`);

//----------------------------------------------------------------------------


