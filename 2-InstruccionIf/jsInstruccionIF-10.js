function mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	let resultado;

	resultado = Math.floor(Math.random()*10+1)

	if (resultado >= 9 && resultado <= 10 )
	{
		alert( "EXCELENTE " + resultado);
	}

	if (resultado >= 4 && resultado <= 8)
	{
		alert("APROBÓ " + resultado);
	}

	else
	{
		alert("Vamos, la proxima se puede");
	}
}