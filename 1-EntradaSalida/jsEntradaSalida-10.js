/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseFloat), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
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
