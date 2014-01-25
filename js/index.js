/* 
 * Author: Maison K. Sakamoto - 06/01/2014
 * Arquivo alterando teste
 */


var index={};

index.start=function(){
    index.carregarFotos();   
    $(document).bind("contextmenu",function(e){ alert("Direitos reservados"); return false; });
    //$('#home-slider').css('height','70%'); // ALTERE AQUI E NA DIV COM ID='CAB'
    
};

index.getCodigo=function(){
    var codigo = $('#codigo').val();
    codigo !== '' ? index.descricao(codigo) : '';
};

index.carregarFotos=function(){
    var obj = new Object();    
    var array = index.ajax(obj,'getImovelAtivo','view/vImovel.php');
    var path = 'http://iareskiimoveis.com.br/imagens/imoveis/';
    for(var i=0; i<array.imovel.length; i++){
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
        var img = foto===null? $('<img>') : $('<img>').attr('src',path+'grandes/'+foto.arquivo).prop('codigo',obj.idimovel);
        img.click(function(){ var c = $(this).prop('codigo'); index.descricao(c); });
        li.append(a).append(img);
        foto===null? '' : $('#thumbs').append(li);
    }    
    index.getCodigo();
};

index.descricao=function(idimovel){
    $('.fancybox-close').click();
        
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
        if(obj.venda=='0' && obj.locacao=='0'){retorno='item-thumbs span3 venda vcasa'}
    }
    if(obj.idtipo=='2' || obj.idtipo=='15'){ 
        retorno = obj.venda=='1' ? 'item-thumbs span3 venda vapartamento' : retorno;
        retorno = obj.locacao=='1' ? 'item-thumbs span3 locacao lapartamento' : retorno;
        if(obj.venda=='0' && obj.locacao=='0'){retorno='item-thumbs span3 venda vapartamento'}
    }
    if(obj.idtipo=='3' || obj.idtipo=='4' || obj.idtipo=='6' || obj.idtipo=='8' || obj.idtipo=='12' || obj.idtipo=='16'){ 
        retorno = obj.venda=='1' ? 'item-thumbs span3 venda vcomercial' : retorno;
        retorno = obj.locacao=='1' ? 'item-thumbs span3 locacao lcomercial' : retorno;
        if(obj.venda=='0' && obj.locacao=='0'){retorno='item-thumbs span3 venda vcomercial'}
    }
    if(obj.idtipo=='5' || obj.idtipo=='7' || obj.idtipo=='13' || obj.idtipo=='14'){ 
        retorno = obj.venda=='1' ? 'item-thumbs span3 venda vterreno' : retorno;
        retorno = obj.locacao=='1' ? 'item-thumbs span3 locacao lterreno' : retorno;
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

index.start();
