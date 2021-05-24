let date = new Date();

let hours = date.getHours();
let min = date.getMinutes();

let saudacao;
if(hours <= 11){
    saudacao = "Bom dia!";
} else if(hours <= 17){
    saudacao = "Boa tarde!";
}
else{
    saudacao = "Boa noite";
}

console.log('Olá! '+saudacao);
console.log('Agora são ' + hours + ' horas e ' + min + ' minutos.');