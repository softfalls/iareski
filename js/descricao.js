/* 
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */


var desc = {};

desc.start=function(idimovel){
    $("#menu-descricao").click();
    window.history.pushState('Object', 'Iareski Imóveis', '?descricao='+idimovel);
    var obj = new Object();
    obj.idimovel = idimovel;
    var json = desc.ajax(obj,'getFotosById','view/vDescricao.php');  
    desc.carregarFotos(json);    
    desc.preencherDados(json);
    
    
    //var $target = $('#descricao').offset().top-55;
    //$('body, html').animate({scrollTop : $('#descricao').offset().top-55}, 750, 'easeOutExpo');
    //$("#menu-descricao").attr('href','#descricao='+idimovel).click();
    //window.location.hash = "descricao="+idimovel;
    
    
    //setTimeout(function(){ $("#menu-descricao").click(); },1000);
    
    
    
    
    //$("#descricao").dialog({ height: 750, width:1100, modal: true, closeOnEscape: false });
    
//$('#linkContato').hover(function(){ $(this).css('color','red') });
//    $(".ui-widget-header").css('background','#555').css('border','none');   
//   $('#btContato').click(function(){ desc.posicaoContato(); }); 
};

desc.carregarFotos=function(json){      
    $('#pikame').empty();
    var a = new Array();
    for(var i=0; i<json.fotos.length; i++){                
        var obj = json.fotos[i];  
        var pathFoto = "http://iareskiimoveis.com.br/imagens/imoveis/grandes/"+obj.arquivo;
        var pequenas = "http://iareskiimoveis.com.br/imagens/imoveis/pequenas/"+obj.arquivo;
        var obj = new Object();
        obj.image = pathFoto; obj.link = pathFoto;
        a.push(obj);        
    }   
    $("#pikame").PikaChoose({data: a, carousel:true,stopOnClick: true,hoverPause:true});
};

desc.preencherDados=function(json){
    var obj = json.obj;
    obj.venda = obj.venda=='1' ? 'venda' : '';
    obj.locacao = obj.locacao=='1' ? 'locacao' : '';
    $("#descricao").attr('title',obj.nome);
    $("#descCodigo").text("Código: "+obj.idimovel);
    $("#descVendaLoc").text("Imóvel para: "+obj.venda+' '+obj.locacao);
    $("#descTipo").text("Tipo de imóvel: "+desc.getTipoImovel(obj.idtipo));
    $("#descQuarto").text("Qtd Quarto: "+obj.qtd_quarto);
    $("#descSuite").text("Qtd Suíte: "+obj.qtd_suite);
    $("#descSala").text("Qtd Sala: "+obj.qtd_sala);    
    $("#descCozinha").text("Qtd Cozinha: "+obj.qtd_cozinha);            
    $("#descEndereco").text("Endereço: "+obj.logradouro);
    $("#descBairro").text("Bairro: "+obj.bairro);
    $("#descCidade").text("Cidade: "+obj.cidade);
    $("#descEstado").text("Estado: "+obj.uf);
    $("#descAreaTerreno").text("Área do terreno: "+obj.terreno_largura+'X'+obj.terreno_comprimento);
    $("#descAreaConst").text("Área construída: "+obj.area_construida);
    $("#descValor").text("Valor do imóvel: ("+obj.valor_aluguel+' aluguel) ('+obj.valor_venda+' venda)');
    $("#descDescricao").text(obj.descricao);
    
    var mapaLink = obj.logradouro+" "+obj.numero+", "+obj.cidade;
    
    $('#map').load('map.php',function(){ $('#map-container').googleMap(mapaLink);});
    
    
};

desc.getTipoImovel=function(idtipo){
    switch (idtipo){
        case '1' : return 'Casa';
        case '2' : return 'Apartamento';
        case '3' : return 'Galpão';
        case '4' : return 'Sala comercial';
        case '5' : return 'Terreno';
        case '6' : return 'Barracão';
        case '7' : return 'Chácara';
        case '8' : return 'Prédio Comercial';
        case '9' : return 'Condomínio Fechado';
        case '10' : return 'Area de Lazer Com Piscina';
        case '11' : return 'Sobrado';
        case '12' : return 'Fundo de Comércio';
        case '13' : return 'Fazenda';
        case '14' : return 'Area de Terras';
        case '15' : return 'Quitinete';
        case '16' : return 'Comercial e Residencial';
    }
};

desc.posicaoContato=function(){
    var codigo = $("#descCodigo").text();
    $(".ui-dialog-titlebar-close").click();
    $("#contact_message").val('Referente ao imóvel '+codigo+' - Mensagem:');    
    $('body, html').animate({scrollTop : $("#contact").offset().top }, 750, 'easeOutExpo');
    
};


desc.ajax=function(obj,funcao,view){ // FUNÇÃO AJAX
    var data = {'obj':obj,'funcao':funcao}; // SETA OS PARAMETROS
    var retorno; // VAR DE RETORNO
    var request = $.ajax({type:"POST", url:view, dataType:"json", async:false, data:data, // FAZ UM AJAX SINCRONIZADO COM A FUNCAO
        success: function(json) { retorno = json; }, // RETORNO DO AJAX NO SUCCESS
        error: function(jqXHR, textStatus, errorThrown) { console.log('Error: ' + textStatus + ' ' + errorThrown); } // RETORNO DO AJAX NO ERROR
    }); // FIM DO AJAX   
    return retorno; // RETORNO DA FUNÇÃO
};
