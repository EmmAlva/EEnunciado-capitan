//$(selector).getJSON(url,data,success(data,status,xhr))

const state = {
	datos: null,
	
}

$.getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/',function(data,status,xhr){
	console.log(data);
	console.log(status);
	console.log(xhr);
	state.datos = data;
	console.log(state.datos);

	$.each(data, function(indice,elemento){
		console.log(elemento);
		let li = $('<li>'+ elemento.name+ '</li>');
		let check = $('<input type="checkbox">');
		//$('li').text(elemento.name);
		li.append(check);
		$('.asistencia').append(li);
		
		//console.log("El indice"+indice+"contiene"+$('li').html(elemento.name));
		//console.log(elemento.name);		
	})
	
});
