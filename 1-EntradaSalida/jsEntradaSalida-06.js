/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{

    let numeroUno;
    let numeroDos;
    let resultado;

    numeroUno = parseInt(document.getElementById("txtIdNumeroUno").value);
    
    numeroDos = parseInt(document.getElementById("txtIdNumeroUno").value);

    resultado = numeroUno + numeroDos;

    alert("La suma es " + resultado);

	// txtIdNumeroUno . txtIdNumeroUno
}

