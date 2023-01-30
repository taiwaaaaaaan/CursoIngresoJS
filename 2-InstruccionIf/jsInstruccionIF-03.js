function mostrar()
{
	//tomo la edad  
	let edadIngresada;

	edadIngresada = document.getElementById("txtIdEdad").value; 
	
	if (edadIngresada > 17)

	{
		alert("Usted es mayor de edad");

	}

	else

	{
		alert("Usted es menor de edad");
	}
}//FIN DE LA FUNCIÓN txtIdEdad

/*
//tomo la edad  
	let edadIngresada;
//uso el tab para identar
	edadIngresada = document.getElementById("txtIdEdad").value;
	edadIngresada = parseInt(edadIngresada);
	
	if (edadIngresada > 17)
	{
    	alert("usted es mayor de edad");
	}
	else 
	{
		//no lleva punto y coma el if
		alert("usted es menor de edad"); //no hace falta preguntar de mas, el else es lo excluyente del if
	}
	*/