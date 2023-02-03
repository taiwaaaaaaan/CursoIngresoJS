/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

// Primer paso: Declarar las variables.

    let numeroUno;
    let numeroDos;
    let resultado;

// Segundo paso: Darles un valor por ID y pasarlos a enteros con parseInt.

    numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    
    numeroDos = parseInt(document.getElementById("txtIdNumeroDos").value);

// Tercer paso: Darle un valor a la variable resultado.

    resultado = numeroUno + numeroDos;

//  Cuarto paso: Mostrar el resultado mediante una alerta.

    alert("La suma es " + resultado);

	// txtIdNumeroUno . txtIdNumeroDos
}
 /* 
    let numeroUno;
    let numeroDos;
    let resultado;

    numeroUno = parseInt(document.getElementById(txtIdNumeroUno).value);
    numeroDos = parseInt(document.getElementById(txtIdNumeroDos).value);

    resultado = numeroUno + numeroDos;

    alert("La suma es " + resultado);  */
