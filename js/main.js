const numeros = document.getElementsByClassName("tecla");
const operador= document.getElementsByClassName("operador");
const igual = document.getElementById("igual");
const borrar = document.getElementById("borrar");
const pantalla = document.getElementById("pantalla");
let operando1 = "";
let operacion = "";
let operando2 = "";


for (let i = 0; i<numeros.length; i++){
    numeros[i].addEventListener("click", () => {
        if (operacion === ""){
            pantalla.innerText += numeros[i].innerText;
            operando1 += numeros[i].innerText;
            console.log("El valor del operando 1 es: ",operando1 );
        }else{
            pantalla.innerText += numeros[i].innerText;
            operando2 += numeros[i].innerText;
            console.log("El valor del operando 2 es: ",operando2);
        }    
    })
};


for(let i = 0; i<operador.length; i++){
    
    operador[i].addEventListener("click", () =>{
        
        pantalla.innerText += operador[i].innerText;
        switch (operador[i].innerText){
            case "+":
                operacion = "suma";
                break;

            case "-":
                operacion = "resta";
                break;

            case "/":
                operacion = "division";
                break;

            case "*":
                operacion = "multiplicacion";
                break;
        }
        
        
        console.log(operacion);
        
    })
};


igual.addEventListener("click", () =>{
    operando1 = parseFloat(operando1);
    operando2 = parseFloat(operando2);
    
    switch (operacion){

        case "suma":
            pantalla.innerText = operando1 + operando2;
            break;
        
        case "resta":
            pantalla.innerText = operando1 - operando2;
            break;

        case "multiplicacion":
            pantalla.innerText = operando1 * operando2;
            break;

        case "division":
            pantalla.innerText = operando1 / operando2;
            break;
     
        default:
            console.log("operacion no valida");
    }

});


borrar.addEventListener("click", () =>{
    pantalla.innerText = "";
    operando1 = ""
    operando2 = ""
    operacion = ""

});


















