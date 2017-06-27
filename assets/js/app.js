//$(selector).getJSON(url,data,success(data,status,xhr))

const state = {
	datos: null,
	name: null,
	lastname: null
}



$.getJSON('http://laboratoria.cuadra.co:9339/api/v1/students/',function(data,status,xhr){
	console.log(data);
	console.log(status);
	console.log(xhr);
	state.datos = data;
	console.log(state.datos);


//UBICACIONES
	var array = [];
	var info = "";
	$.each(state.datos, function (index, ele){

		info = ele.name;		

		/*$('ol').append($('li').text(info));*/
		array.push(info);
		
	});
	console.log(array);

	for (var i in array){
		/*$('ol').append($('li').text(info));*/

	}

	$.each(state.datos, function(indice,elemento){
		var li = $('<li></li>');
		"El indice"+indice+"contiene"+$('ol').text(elemento.name);

		console.log("El indice"+indice+"contiene"+$('li').text(elemento.name));


		
	})
	
	

	});


