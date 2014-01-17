<!--
To change this template, choose Tools | Templates
and open the template in the editor.
-->
<!DOCTYPE html>
<html>
    <head>
        <title></title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    </head>
    <body>
       <div id="content-outer">
       <link href="css/highslide.css" type="text/css" rel="stylesheet" media="all">
       <link rel="stylesheet" href="css/style.css" type="text/css" media="all">
       <link rel="stylesheet" href="css/flip.css" type="text/css" media="all">
       <link rel="stylesheet" href="css/jquery-ui-1.9.1.custom.min.css" type="text/css" media="all">
       <style type="text/css">
        .highslide-image { border: 1px solid black; }
        .highslide-controls { width: 90px !important; }
        .highslide-controls .highslide-close { display: none; }
        .highslide-caption { padding: .5em 0; }
        .highslide-gallery{}
        .highslide img{border: none; border-radius: 5px; box-shadow: 0 5px 12px rgba(0, 0, 0, 0.3); margin: 10px 10px 25px; max-width: 600px;
        float: left;
        }
        .especificacoes{float: left; width: 550px; }
        .especificacoes label{font-size: 14px;}
        .especificacoes li { font-size: 14px; font-weight: bold; line-height: 20px; }
        .a{width: 110px; padding-left: 20px; display: inline-table; font-weight: bold; }
        .b{width: 410px; padding-left: 0px; display: inline-table; }
        #Inicial{ min-height: 500px;}
        </style>
        <input type="hidden" id="idimovel" value="<?php echo $_REQUEST['codigo'] ?>" />
        <div id="conteudo" style="display: block;">
        <div id="Inicial">
        <h1 class="cinzaTitulo fontBranco">Descrição</h1>
        <div class="highslide-gallery">    
    
        <a id="thumb1" class="highslide" onclick="return hs.expand(this)" href="fotos/modelo02.jpg">
        <img title="Click para aumentar" alt="Foto 02" src="fotos/modelo02.jpg">
        </a>
                
        <div class="hidden-container">
            <!--a class="highslide" onclick="return hs.expand(this, { thumbnailId: 'thumb1' })" href="fotos/modelo01.jpg"></a>-->            
        </div>
</div>
<div class="especificacoes">
<h1 class="fontBranco cinzaTitulo">Apto no Edf Torre Azul</h1>
<label class="a">Código</label>
<label class="b">223</label><br>
<label class="a">Imóvel para</label>
<label class="b">Venda</label><br>
<label class="a">Tipo de imóvel</label>
<label class="b">Apartamento</label><br>
<label class="a">Endereço</label>
<label class="b">Rua Jorge Sanwais</label><br>
<label class="a">Bairro</label>
<label class="b">Centro</label><br>
<label class="a">Cidade</label>
<label class="b">Foz do Iguaçu</label><br>
<label class="a">Estado</label>
<label class="b">PR</label><br>
<label class="a">Área do terreno</label>
<label class="b">0 x 0 ( 0 m²)</label><br>
<label class="a">Área construída</label>
<label class="b">143 m²</label><br>
<label class="a">Valor do imóvel</label>
<label class="b">R$ 420.000,00</label><br>
<h1 class="cinzaTitulo fontBranco">Especificações</h1>
<ul>
<li>01 Suite Master com Closed</li>
<li>03 Qtos</li>
<li>Sala</li>
<li>Cozinha</li>
<li>Dependência de Empregada</li>
<li>Área de Serviços</li>
<li>04 WC</li>
<li>Churrasqueira na varanda</li>
</ul>
</div>
</div>
</div>
</div>
        <script src="js/jquery-1.8.2.js"></script> <!-- Bootstrap -->
        <script src="js/descricao.js?nocache=asdfkj"></script> <!-- Index JS -->
    </body>
</html>
