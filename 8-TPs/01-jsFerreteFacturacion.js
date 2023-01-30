/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	
    let precioUno;
    let precioDos;
    let precioTres;
    let suma;

    // txtIdPrecioUno . txtIdPrecioDos . txtIdPrecioTres 

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres;

    alert("Tu suma da: " + suma);


}
function Promedio () 
{
	
}
function PrecioFinal () 
{
	let precioUno;
    let precioDos;
    let precioTres;
    let resultado;
    let suma;
    let iva;

    precioUno = parseInt(document.getElementById("txtIdPrecioUno").value);
    precioDos = parseInt(document.getElementById("txtIdPrecioDos").value);
    precioTres = parseInt(document.getElementById("txtIdPrecioTres").value);

    suma = precioUno + precioDos + precioTres;
    
    iva = suma * 0.21;

    resultado = suma + iva;

    alert("Su suma es: " + resultado);


}