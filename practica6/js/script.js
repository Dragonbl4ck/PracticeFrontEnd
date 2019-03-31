// let contenido = document.getElementById("titulo").textContent;

// // var parrafos = document.getElementsByTagName("p");
// // for(let i=0; i<parrafos.length;i++){
// //     parrafos[i].innerHTML ="Nuevo contenido "+contenido +" "+i;
// // }

// document.querySelector("#segundo").innerHTML = "Modificado con querySelector";

window.onload = function(){
    document.getElementById("btnSuma").onclick = sumaNumeros;
    document.getElementById("btnCambio").onclick = cambioNumeros;
    document.getElementById("btnMultiplicar").onclick = cambioMultiplicar;
    document.getElementById("btnSeries").onclick = seriesNumeros;
}

function sumaNumeros(num1, num2){
    let resultado = 0;
    num1 = document.querySelector("#txtNum1").value;
    num2 = document.querySelector("#txtNum2").value;
    resultado = parseInt(num1) + parseInt(num2);
    alert(resultado);
}

function cambioNumeros(){
    let input1 = document.getElementById("txtNum1").value;
    let input2 = document.getElementById("txtNum2").value;
    document.getElementById("txtNum1").value = input2;
    document.getElementById("txtNum2").value  = input1;
}

function cambioMultiplicar(){
    let input1 = document.getElementById("txtNum1").value;
    let input2 = document.getElementById("txtNum2").value;

    for (let i=1;i<=input1;i++) {
        document.getElementById("valoruno").innerHTML +="<td>"+i+"</td><br/>";
        for (let n=1;n<=input2;n++) {
            document.getElementById("valordos").innerHTML ="<td>"+n+"</td><br/>";
            var total = i * n;  
         }
         document.getElementById("resultado").innerHTML += "<td>"+total+"</td><br/>";
     }
}

function seriesNumeros(){
    let series="";

    if(document.querySelector("#serie1").checked){
        series += "Del 1 al 100: <br/>";
        for(let i=1; i<=100; i++){
            series += i + "-";
        }
        series+="<br/>";
    }

    if(document.querySelector("#serie2").checked){
        series += "Pares del 2 al 200: <br/>";
        for(let i=2; i<=200; i+=2){
            series+= i + "-";
        }
        series += "<br/>";
    }

    if(document.querySelector("#fibo").checked){
        series +="Fibonacci: <br/>";
        let numero = 0;
        let previo = 1;
        let previo2 = 0;
        for(let i=0; i<20;i++){
            series += numero +"-";
            previo2 = previo;
            previo = numero;
            numero = previo + previo2;
        }
    }
    document.querySelector("#areaSeries").innerHTML = series;
}