var retorno = window.location.href

retorno = retorno.split("/");
pretorno = retorno.length - 1;
retorno = retorno[pretorno];
retorno = retorno.split("?");
retorno = retorno[0];

if(retorno == ''){
	retorno = 'index.php'
}

function visita(){
	$.ajax({
	  type: "POST",
	  url: 'api/api-visitante-adicionar.php',
	  data: {
	  	informacaoid: informacaoid,
	  	pagina: retorno
	  }
	});	
}

function online(){
	$.ajax({
	  type: "POST",
	  url: 'api/api-online-adicionar.php',
	  data: {
	  	informacaoid: informacaoid,
	  	pagina: retorno
	  }
	});	
}

visita();
online();

setInterval(function(){
	online()
}, 1000);