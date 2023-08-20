let altura = document.getElementById("altura"); 
let peso = document.getElementById("peso"); 
let descricao = document.getElementById("descricao");
const definicao = "Seu IMC é classificado como: ";

document.getElementById("calcBtn").onclick = function(){
    let resultado = peso.value/ (altura.value * altura.value); 
    if(resultado <= 18.5){
        descricao.innerHTML = definicao + "Magreza " + resultado.toFixed(2);
    }
    else if(resultado >= 18.5 && resultado <= 24.9){
        descricao.innerHTML = definicao + "Peso normal " + resultado.toFixed(2);
    }

    else if(resultado >= 25 && resultado <= 29.9){
        descricao.innerHTML = definicao + "Sobrepeso "+ resultado.toFixed(2);
    }

    else if(resultado >= 30 && resultado <= 34.9){
        descricao.innerHTML = definicao + "Obesidade grau I "+ resultado.toFixed(2);
    }

    else if(resultado >= 35 && resultado <= 40){
        descricao.innerHTML = definicao + "Obesidade grau II "+ resultado.toFixed(2);
    }

    else if(resultado > 40){
        descricao.innerHTML = definicao + "Obesidade grau III "+ resultado.toFixed(2);
    }
    
}