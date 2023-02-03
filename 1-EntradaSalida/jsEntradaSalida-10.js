/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseFloat), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"
Theo Garcia E/S Ejer. 10
*/
function mostrarAumento()
{
    let importe;
    let descuento;
    let resultado;

    importe = document.getElementById("txtIdImporte").value;
    importe = parseFloat(importe);

    descuento = (importe /100) * 25;
    resultado = importe - descuento;
    
    document.getElementById("txtIdResultado").value = resultado;
}

/* 

 En la nota de arriba lo pide con float, igualmente acá estaría hecho con Int.

    let importe;
    let descuento;
    let resultado;

    importe = document.getElementById("txtIdImporte").value;

    importe = parseInt(importe);

    descuento = (importe / 100) * 25;

    resultado = importe - descuento;

    document.getElementById("txtIdResultado").value = resultado;  */