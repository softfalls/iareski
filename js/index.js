/* 
 * Author: Maison K. Sakamoto - 06/01/2014
 * Arquivo alterando teste
 */

(function($){
    $.getUrlVar = function(key){
    var result = new RegExp(key + "=([^&]*)", "i").exec(window.location.search);
    return result && unescape(result[1]) || "";
    };
})(jQuery);

$.fn.googleMap = function(address, options) {
    var defaults = {
        lat: 44.081996,
        long: -123.0286928,
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    options = $.extend(defaults, options || {});

    var center = new google.maps.LatLng(options.lat, options.long);
    var map = new google.maps.Map(this.get(0), $.extend(options, {center: center}));

    var geocoder = new google.maps.Geocoder();
    geocoder.geocode(
        {address: address}, 
        function(results, status) {
            if (status == google.maps.GeocoderStatus.OK && results.length) {
                if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                    map.setCenter(results[0].geometry.location);
                    var marker = new google.maps.Marker({
                        position: results[0].geometry.location,
                        map: map                        
                    });
                    //google.maps.event.addDomListener(window, 'load', desc.show());
                    google.maps.event.addDomListener(window, 'load', null);
                    
                }
            }
        });
};


var index={};
index.globalInit = 0;
index.start=function(){        
    console.log('index.start');
    $(document).bind("contextmenu",function(e){ alert("Direitos reservados"); return false; });
    //$('#home-slider').css('height','70%'); // ALTERE AQUI E NA DIV COM ID='CAB'
    var id = $.getUrlVar('descricao');
    id != "" ?  desc.start(id): $("#descricao").hide();    
    jQuery(function(){ jQuery('#camera').camera({fx: 'scrollLeft', time: 2000, pagination: true }); });    
    $('.item-thumbs h3').each(function(){ index.removeScroll($(this)); });          
};

index.getCodigo=function(){
    var codigo = $('#codigo').val();
    codigo !== '' ? index.descricao(codigo) : '';
};

index.carregarFotos=function(){
    var obj = new Object();    
    var array = index.ajax(obj,'getImovelAtivo','view/vImovel.php');
    index.arrayGlobal = array;
    array.imovel = index.shuffle(array.imovel);
    var path = 'http://iareskiimoveis.com.br/imagens/imoveis/';
    for(var i=0; i< array.imovel.length; i++){
        var obj = array.imovel[i];
        var classe = index.getClassImovel(obj);
        var foto = index.getFoto(obj.idimovel,array.fotos);
        var li = $('<li>').addClass(classe).attr('idimovel',obj.idimovel);        
        var a = foto===null? $('<a>') :  
            $('<a>').addClass('hover-wrap fancybox').attr('data-fancybox-group','gallery').attr('title',obj.nome).attr('href','javascript:index.descricao('+obj.idimovel+')');
            // linha abaixo comentada pois nao será aberto a galeria de imagens e sim a tela de descrição diretamente
            //$('<a>').addClass('hover-wrap fancybox').attr('data-fancybox-group','gallery').attr('title',obj.nome).attr('href',path+'grandes/'+foto.arquivo);
        a.append("<span class='overlay-img'></span><span class='overlay-img-thumb font-icon-plus'></span>");
        //obj.descricao = obj.descricao+"<br/><a href='javascript:index.descricao("+obj.idimovel+")'>[+]Mais Informações</a>";
        //var img = foto===null? $('<img>') : $('<img>').attr('src',path+'grandes/'+foto.arquivo).attr('alt',obj.descricao);        
        //var img = foto===null? $('<img>') : $('<img>').attr('src',path+'grandes/'+foto.arquivo).prop('codigo',obj.idimovel);
        var img = foto===null? $('<img>') : $('<img>').attr('src',path+'grandes/'+foto.arquivo).prop('codigo',obj.idimovel);
        img.click(function(){ var c = $(this).prop('codigo'); index.descricao(c); });
              
        var nome = "<br>"+obj.nome;
        var cidade = index.getContrato(obj)+" - "+obj.cidade;
        var h3 = "<h3>"+cidade+nome+"</h3>";
        li.append(h3).append(a).append(img);
        if(foto !==null){ 
            i < 12 ? li.addClass('inicio') : '';                            // MOSTRAR ATÉ 12 ELEMENTOS
            $('#thumbs').append(li); 
        }
        
    }    
    index.getCodigo();
    console.log('index.carregarFotos');
    
};

index.shuffle = function shuffle(array) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
};

index.getContrato=function(obj){    
    if(obj.venda == '1' && obj.locacao == '1'){ return "Venda & Locação"; }
    else if(obj.venda == '1'){ return "Venda"; }
    else{ return "locação"; }
};

index.descricao=function(idimovel){
   // $('.fancybox-close').click();
        
    desc.start(idimovel);    
};

index.getFoto=function(idimovel,arrayFotos){
    for(var i=0; i<arrayFotos.length; i++){
        var obj = arrayFotos[i];
        if(obj.idimovel == idimovel){ return obj; }        
    }
    return null;
};

index.getClassImovel=function(obj){   
    var retorno;
    if(obj.idtipo=='1' || obj.idtipo=='9' || obj.idtipo=='10' || obj.idtipo=='11'){ 
        retorno = obj.venda=='1' ? 'item-thumbs span3 venda vcasa' : retorno;
        retorno = obj.locacao=='1' ? 'item-thumbs span3 locacao lcasa' : retorno;
        retorno = obj.locacao=='1' && obj.venda=='1' ? 'item-thumbs span3 venda vcasa locacao lcasa' : retorno;
        if(obj.venda=='0' && obj.locacao=='0'){retorno='item-thumbs span3 venda vcasa'}
    }
    if(obj.idtipo=='2' || obj.idtipo=='15'){ 
        retorno = obj.venda=='1' ? 'item-thumbs span3 venda vapartamento' : retorno;
        retorno = obj.locacao=='1' ? 'item-thumbs span3 locacao lapartamento' : retorno;
        retorno = obj.locacao=='1' && obj.venda=='1' ? 'item-thumbs span3 venda vapartamento locacao lapartamento' : retorno;
        if(obj.venda=='0' && obj.locacao=='0'){retorno='item-thumbs span3 venda vapartamento'}
    }
    if(obj.idtipo=='3' || obj.idtipo=='4' || obj.idtipo=='6' || obj.idtipo=='8' || obj.idtipo=='12' || obj.idtipo=='16'){ 
        retorno = obj.venda=='1' ? 'item-thumbs span3 venda vcomercial' : retorno;
        retorno = obj.locacao=='1' ? 'item-thumbs span3 locacao lcomercial' : retorno;
        retorno = obj.locacao=='1' && obj.venda=='1' ? 'item-thumbs span3 venda vcomercial locacao lcomercial' : retorno;
        if(obj.venda=='0' && obj.locacao=='0'){retorno='item-thumbs span3 venda vcomercial'}
    }
    if(obj.idtipo=='5' || obj.idtipo=='7' || obj.idtipo=='13' || obj.idtipo=='14'){ 
        retorno = obj.venda=='1' ? 'item-thumbs span3 venda vterreno' : retorno;
        retorno = obj.locacao=='1' ? 'item-thumbs span3 locacao lterreno' : retorno;
        retorno = obj.locacao=='1' && obj.venda=='1' ? 'item-thumbs span3 venda vterreno locacao lterreno' : retorno;
        if(obj.venda=='0' && obj.locacao=='0'){retorno='item-thumbs span3 venda vterreno'}
    }
    
    return retorno;
};

index.ajax=function(obj,funcao,view){ // FUNÇÃO AJAX
    var data = {'obj':obj,'funcao':funcao}; // SETA OS PARAMETROS
    var retorno; // VAR DE RETORNO
    var request = $.ajax({type:"POST", url:view, dataType:"json", async:false, data:data, // FAZ UM AJAX SINCRONIZADO COM A FUNCAO
        success: function(json) { retorno = json; }, // RETORNO DO AJAX NO SUCCESS
        error: function(jqXHR, textStatus, errorThrown) { console.log('Error: ' + textStatus + ' ' + errorThrown); } // RETORNO DO AJAX NO ERROR
    }); // FIM DO AJAX   
    return retorno; // RETORNO DA FUNÇÃO
};

index.removeScroll=function(jQuery){
    var e = jQuery[0];
    if ((e.clientHeight < e.scrollHeight) || (e.clientWidth < e.scrollWidth)) {
        var fontSize = jQuery.css('font-size');
        var toRemove = 'px';
        var size = parseInt(fontSize.replace(toRemove, ''));
        size = size - 1;
        jQuery.css('font-size', size + 'px');
        index.removeScroll(jQuery);
    }            
};

 //index.start(); // INICIA NO ARQUIVO MAIN.JS