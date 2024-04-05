let nome = "Pedro - 1607";
function saudacaoPersonalizada(nome) {
    console.log("Olá, " + nome + "!");
}
saudacaoPersonalizada(nome);

let modulo = require('./module.js');
modulo.saudacao();