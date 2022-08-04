const nome = prompt('Digite seu nome:');
const idade = prompt('Digite sua idade:');
const linguagem = prompt('Qual é a linguagem de programação que você está estudando?');

const msg = ("Olá "+nome+" ,você tem "+idade+" anos e já está aprendendo "+linguagem);

alert(msg);

const gosta = prompt("Você gosta de estudar "+linguagem+" Responda com o número 1 - sim e 2 - não");

if(gosta == 1){
	alert("Muito Bom!! Continue estudando e você terá muito sucesso!");
}
if(gosta == 2){
	alert("Ahh que pena... Já tentou aprender outras linguagens?");
}