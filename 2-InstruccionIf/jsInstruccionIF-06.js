function mostrar()
{
	//tomo la edad  
	let edad;

	edad = document.getElementById("txtIdEdad").value; 

	if (edad >= 18)
	{

		alert("Usted es mayor de edad");

	}

	else if (edad <= 17 && edad >= 13)

	{

		alert("Usted es adolescente");

	}

	else 
	{

		alert("Usted es un niño");

	}

	



}

//txtIdEdad

//FIN DE LA FUNCIÓN