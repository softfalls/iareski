<?php
    @$codigo = $_REQUEST['codigo'];
    
    if($codigo){ echo "<input type='hidden' id='codigo' value='$codigo'>"; }
    else{ echo "<input type='hidden' id='codigo' value=''>"; }
?>
<!DOCTYPE html>
<!-- commit 4 do git -->
<!--[if lt IE 7]><html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if (IE 7)&!(IEMobile)]><html class="no-js lt-ie9 lt-ie8" lang="en"><![endif]-->
<!--[if (IE 8)&!(IEMobile)]><html class="no-js lt-ie9" lang="en"><![endif]-->
<!--[if (IE 9)]><html class="no-js ie9" lang="en"><![endif]-->
<!--[if gt IE 8]><!--> <html lang="en-US"> <!--<![endif]-->
<head>

<!-- Meta Tags -->
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />

<title>Iareski Imóveis</title>   

<meta name="description" content="Venda e Locação de Imóveis" /> 

<!-- Mobile Specifics -->
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<meta name="HandheldFriendly" content="true"/>
<meta name="MobileOptimized" content="320"/>   

<!-- Mobile Internet Explorer ClearType Technology -->
<!--[if IEMobile]>  <meta http-equiv="cleartype" content="on">  <![endif]-->

<!-- Bootstrap -->
<link href="_include/css/bootstrap.min.css" rel="stylesheet">

<!-- Main Style -->
<link href="_include/css/main.css?03062014" rel="stylesheet">

<!-- Supersized -->
<link href="_include/css/supersized.css" rel="stylesheet">
<link href="_include/css/supersized.shutter.css" rel="stylesheet">

<!-- FancyBox -->
<link href="_include/css/fancybox/jquery.fancybox.css" rel="stylesheet"><!---->
<link href="_include/css/pikachoose/bottom.css"rel="stylesheet">
<!-- Font Icons -->
<link href="_include/css/fonts.css" rel="stylesheet">

<!-- Shortcodes -->
<link href="_include/css/shortcodes.css" rel="stylesheet">

<!-- Responsive -->
<link href="_include/css/bootstrap-responsive.min.css" rel="stylesheet">
<link href="_include/css/responsive.css" rel="stylesheet">

<!-- Supersized -->
<link href="_include/css/supersized.css" rel="stylesheet">
<link href="_include/css/supersized.shutter.css" rel="stylesheet">

<!-- jquery Style -->
<link href="css/jquery-ui-1.9.1.custom.min.css" rel="stylesheet">

<!-- Google Font 
<link href='http://fonts.googleapis.com/css?family=Titillium+Web:400,200,200italic,300,300italic,400italic,600,600italic,700,700italic,900' rel='stylesheet' type='text/css'>
-->

<!-- Fav Icon -->
<link rel="shortcut icon" href="#">

<link rel="apple-touch-icon" href="#">
<link rel="apple-touch-icon" sizes="114x114" href="#">
<link rel="apple-touch-icon" sizes="72x72" href="#">
<link rel="apple-touch-icon" sizes="144x144" href="#">

<!-- Modernizr -->
<script src="_include/js/modernizr.js"></script>
<link  href='_include/css/camera.css' rel='stylesheet' > 

<!-- Analytics -->
<script type="text/javascript">
/*
  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', 'Insert Your Code']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();
*/
</script>
<!-- End Analytics -->
<style>
    header #logo a{
        background: none;
        color: #FFFFFF;
        display: inline;
        font-size: 28px;
        font-weight: bold;    
    }
    .fancybox-opened .fancybox-title { height: 220px; overflow: auto; }
    .fancybox-opened .fancybox-title p { text-align: justify; }
    /*.camera_prev{ text-align: center; line-height: 2.5; }
    .camera_prev:before { content: "<"; }
    
    .camera_next{ text-align: center; line-height: 2.5; }        
    .camera_next:before { content: ">"; }
    
    .camera_next:before { content: ">"; }*/
    
    #linkContato:hover{ color: red;}
    /*#descricao{display: none; height: 100%; margin: auto; width: 1100px;}*/
    
    #descEspecificacao li { width: 385px; overflow: hidden;}
    #linkContato{color: whitesmoke;}
    #likeBox{ background-color: #dde4e9;}
    .item-thumbs{margin-left: 10px;}
    .item-thumbs h3{        
        padding: 15px 10px 3px;
        height: 45px;
        text-align: center;
        text-transform: uppercase;
        color: #7F8289;
        font-size: 12px;
        font-weight: bold;
        margin: 0;
    }
</style>
</head>


<body>

<!-- This section is for Splash Screen -->
<div class="ole">
    
<section id="jSplash">
	<div id="circle">          
        </div>
</section>
</div>
<!-- End of Splash Screen -->

<div id="cab" style=" background: white; margin: auto; text-align: center; padding-bottom: 10px;">
    <div class="row text-center">
        <object type="application/x-shockwave-flash" width="760" height="180" data="swf/BANNERTOPOCRECI.swf" style="z-index: -1"></object>
        <img class="span10" style="float: none; margin: auto; width: 90%" 
             id="logo" title="iareski" src="imagens/logooficialempresa.png" alt="iareski_logo">
    </div>    
    <div class="row">
        <div style="color: #483D8B; font: 900 20px 'Roboto',sans-serif; text-shadow: 0 2px 0 #C0C0C0; margin: 15px;"> 
            <p> IARESKI IMÓVEIS (45) 3574-7043 </p>
        </div>
    </div>            
</div>




<!-- Header -->
<header>
    <div class="sticky-nav">
    	<a id="mobile-nav" class="menu-nav" href="#menu-nav"></a>
        
        <div id="logo">
        	<a id="goUp" href="#cab" title="IARESKI IMÓVEIS">IARESKI</a>
        </div>
        
        <nav id="menu">
        	<ul id="menu-nav">
            	<li class="current"><a href="#cab">Home</a></li>
                <li><a href="#work">Imóveis</a></li>                               
                <li style="display: none;"><a href="#descricao" id="menu-descricao">Descricao</a></li>                               
                <li><a href="#about">Sobre</a></li>
                <li><a href="#contact">Contato</a></li>
                <!--<li><a href="shortcodes.html" class="external">Shortcodes</a></li>-->
            </ul>
        </nav>
        
    </div>
</header>
<!-- End Header -->

<!-- Our Work Section -->
<div id="work" class="page">
	<div class="container">
    	<!-- Title Page -->
        <div class="row">
            <div class="span12">                
                <!-- Homepage Slider -->
                <div id="home-slider" style="background: transparent; height: 400px; margin-top: 15px;">	
                        <div id="camera" class="camera_wrap camera_black_skin">
                            <div data-src="_include/img/slider-images/image01.jpg">
                                <div class="camera_caption fadeFromBottom">legenda. <em> teste</em></div>
                            </div>
                            <div data-src="_include/img/slider-images/image02.jpg"></div>
                            <div data-src="_include/img/slider-images/image03.jpg"></div>
                            <div data-src="_include/img/slider-images/image04.jpg"></div>
                        </div>                    
                </div>                
            </div>
        </div>
        <!-- End Title Page -->
        
        <!-- Portfolio Projects -->
        <div class="row">
                <div class="span3" >
            	<!-- Filter -->
                <nav id="options" class="work-nav">
                    <ul id="filters" class="option-set" data-option-key="filter">
                    	<li class="type-work">Tipos de Imóveis</li>
                        <li><a href="#filter" data-option-value=".inicio" id="filtro-inicio" class="hidden">Inicio</a></li>
                        <li><a href="#filter" data-option-value="*" class="selected">Todos</a></li>
                        <li>
                            <a href="#filter" data-option-value=".venda">Venda</a>
                            <ul>
                                <li><a href="#filter" data-option-value=".vcasa">Casas & Sobrados</a></li>
                                <li><a href="#filter" data-option-value=".vapartamento">Apartamentos</a></li>
                                <li><a href="#filter" data-option-value=".vcomercial">Imóveis Comerciais</a></li>
                                <li><a href="#filter" data-option-value=".vterreno">Área de Terras & Chácaras</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#filter" data-option-value=".locacao">Locação</a>
                            <ul>
                                <li><a href="#filter" data-option-value=".lcasa">Casas & Sobrados</a></li>
                                <li><a href="#filter" data-option-value=".lapartamento">Apartamentos</a></li>
                                <li><a href="#filter" data-option-value=".lcomercial">Imóveis Comerciais</a></li>
                                <li><a href="#filter" data-option-value=".lterreno">Área de Terras & Chácaras</a></li>
                            </ul>
                        </li>
                        <li><a href="#filter" data-option-value=".video">Video</a></li>                                                
                        <li><a href="#sofrildo">Sofrildo</a></li>    
                    </ul>                    
                    <div id="fb-root"></div>
                    <script>(function(d, s, id) {
                        var js, fjs = d.getElementsByTagName(s)[0];
                        if (d.getElementById(id)) return;
                        js = d.createElement(s); js.id = id;
                        js.src = "//connect.facebook.net/pt_BR/sdk.js#xfbml=1&appId=356295134507337&version=v2.0";
                        fjs.parentNode.insertBefore(js, fjs);
                      }(document, 'script', 'facebook-jssdk'));
                    </script>
                    <div id="likeBox" style="margin-left: 10px" class="fb-like-box" 
                         data-href="https://www.facebook.com/pages/Iareski-Im%C3%B3veis/102306513206682" 
                         data-width="200" data-height="390" data-colorscheme="light" 
                         data-show-faces="true" data-header="true" data-stream="false" data-show-border="true"></div>
                    
                </nav>
                <!-- End Filter -->
            </div>
            
            <div class="span9">
            	<div class="row">
                    <section id="projects">
                    	<ul id="thumbs"></ul>
                    </section>                    
            	</div>
            </div>
        </div>
        <!-- End Portfolio Projects -->
    </div>
</div>
<!-- End Our Work Section -->

<!-- descricao Section -->
<div id="descricao" class="page" title="" >    
    <div class="container">
        <!-- Title Page -->
        <div class="row">
            <div class="span12">
                <div class="title-page" style="margin:0;" >
                    <h2 class="title" style="font-size: 35px;">Descrição</h2>                    
                </div>
            </div>
        </div>
        <!-- End Title Page -->
    
        <div class="row" >
            <div class="span12" style="font-weight: bold; line-height: 1.5; font-size: 13px;" >
                <div class="row-fluid" >
                    <div class="pikachoose span8" >
                        <ul id="pikame" class="jcarousel-skin-pika span12" >
                            <!--<li><a href="http://www.pikachoose.com"><img src="../../1.jpg"/></a><span>This is an example of the basic theme.</span></li>-->            
                        </ul>
                    </div>
                    <div id="descDescricao" class="span4" style="margin-left: 20px; text-align: justify; overflow: auto;"></div>
                    <div class="span4" style="margin-left: 20px; text-align: justify; overflow: auto;">
                        <!--<ul id="descEspecificacao" style=" float: right; height: 300px; margin: 10px -30px 0 0; overflow: hidden; 
                            text-align: justify; width: 390px;">
                        <ul id="descEspecificacao">-->
                            <span id="descCodigo">Código </span> <br/>
                            <span id="descVendaLoc">Imóvel para </span> <br/>
                            <span id="descTipo">Tipo de imóvel </span> <br/>
                            <span id="descAreaTerreno">Área do terreno </span> <br/>
                            <span id="descAreaConst">Área construída </span> <br/>
                            <span id="descQuarto">Qtd Quarto </span> <br/>
                            <span id="descSuite">Qtd Suíte </span> <br/>
                            <span id="descSala">Qtd Sala </span> <br/>
                            <span id="descCozinha">Qtd Cozinha </span> <br/>
                            <span id="descEstado">Estado </span> <br/>
                            <span id="descCidade">Cidade </span> <br/>
                            <span id="descBairro">Bairro </span> <br/>
                            <span id="descEndereco">Endereço </span> <br/>
                            <span id="descValor">Valor do imóvel </span>
                        <!--</ul>--->
                    </div>
                    
                </div>
                <div class="row-fluid">
                    <div id="map" class="span8" style="float: left;"> </div>  
                    <div class="span4"> 
                        <h3 class="title">Entre em Contato</h3>
                        <form id="contact-form" class="contact-form" action="#">
                            <p class="contact-name"> <input id="contact_codigo" type="text" value="" readonly="readonly" name="contact_codigo" /> </p>
                            <p class="contact-name"> <input id="contact_name"  class="campo" type="text" placeholder="Nome Completo" value="" name="name" /> </p>
                            <p class="contact-email"> <input id="contact_email" class="campo" type="text" placeholder="endereço de Email" value="" name="email" /> </p>
                            <p class="contact-message"> <textarea id="contact_message" class="campo" placeholder="Sua Mensagem" name="message" rows="7" cols="40"></textarea> </p>
                            <p class="contact-submit"> <a id="contact-submit" class="submit" href="#">Enviar Email</a> </p>

                            <div id="response"></div>
                        </form>         
                    </div>                   
                </div>                
            </div>
        </div>        
    </div>
</div>
<!-- End descricao Section -->

<!-- sofrildo Section -->
<div id="sofrildo" class="page-alternate">
    <div class="container">
        <!-- Title Page -->
        <div class="row">
            <div class="span12">
                <div class="title-page">
                    <h2 class="title">Sofrildo</h2>                    
                </div>
            </div>
        </div>
        <!-- End Title Page -->
        
        <div class="row">    	
            <div class="span12">
                <object type="application/x-shockwave-flash" class="span12" height="640" data="sofrildo.swf">
                    <param name="movie" value="arquivo.swf" />                
                </object>
            </div>
        </div>
    </div>
</div>
<!-- End sofrildo Section -->




<!-- Contact Section -->
<div id="contact" class="page">
<div class="container">
    <!-- Title Page -->
    <div class="row">
        <div class="span12">
            <div class="title-page">
                <h2 class="title">Entre em Contato</h2>
                <h3 class="title-description">Escreva para nós. Estamos ansiosos para servir você.</h3>
            </div>
        </div>
    </div>
    <!-- End Title Page -->
    
    <!-- Contact Form -->
    <div class="row">
    	<div class="span9">        
            <form id="contact-form" class="contact-form" action="#">
            	<p class="contact-name">
                    <input id="contact_name" class="campo" type="text" placeholder="Nome Completo" value="" name="name" />
                </p>
                <p class="contact-email">
                    <input id="contact_email" class="campo" type="text" placeholder="endereço de Email" value="" name="email" />
                </p>
                <p class="contact-message">
                    <textarea id="contact_message" class="campo" placeholder="Sua Mensagem" name="message" rows="15" cols="40"></textarea>
                </p>
                <p class="contact-submit">
                    <a id="contact-submit" class="submit" href="#">Enviar Email</a>
                </p>                
                <div id="response"></div>
            </form>         
        </div>
        
        <div class="span3">
        	<div class="contact-details">
        		<h3>Contato</h3>
                <ul>
                    <li><a href="#">iareski@hotmail.com</a></li>
                    <li> ++55 (45) 3574-7043</li>
                    <li>
                        Edmilson Iareski
                        <br>
                        Foz do Iguaçu, PR
                        <br>
                        Brasil
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <!-- End Contact Form -->
</div>
</div>
<!-- End Contact Section -->

<!-- About Section -->
<div id="about" class="page-alternate">
<div class="container">
    <!-- Title Page -->
    <div class="row">
        <div class="span12">
            <div class="title-page">
                <h2 class="title">Sobre</h2>
                <h3 class="title-description">Saiba mais sobre nossa equipe e Cultura.</h3>
            </div>
        </div>
    </div>
    <!-- End Title Page -->
    
    <!-- People -->
    <div class="row">
    	
        <!-- Start Profile -->
    	<div class="span4 profile">
        	
            <h3 class="profile-name">Visão</h3>
            <p class="profile-description">
                Ser reconhecida no mercado como empresa referência no mercado imobiliário de Foz e região.
            </p>
            	
          
        </div>
        <!-- End Profile -->
        
        <!-- Start Profile -->
    	<div class="span4 profile">            
            <h3 class="profile-name">Missão</h3>
            <p class="profile-description">
            Buscar excelência nos serviços imobiliários, através de um relacionamento de credibilidade confiança
            e continuidade com todos os clientes envolvidos.
            </p>
            
        </div>
        <!-- End Profile -->
        
        <!-- Start Profile -->
    	<div class="span4 profile">        	
            <h3 class="profile-name">Valores</h3>
            <p class="profile-description">
            <ul style="text-align: justify">
                <li>Honestidade, palavra.</li>
                <li>Não realizamos negócios de maneira a prejudicar a imagem da empresa perante os clientes.</li>
                <li>Relacionamento de confiança com o Cliente e Comprometimento com a empresa.</li>
            </ul>
            </p>
        </div>
        <!-- End Profile -->        
        </div>
    <!-- End People -->
    </div>
</div>
<!-- End About Section -->

<!-- Twitter Feed
<div id="twitter-feed" class="page-alternate">
	<div class="container">
    	<div class="row">
            <div class="span12">
                <div class="follow">
                    <a href="#" title="Follow Me on Twitter" target="_blank"><i class="font-icon-social-twitter"></i></a>
                </div>
                    
                <div id="ticker" class="query"> 
                </div>
            </div>
        </div>
    </div>
</div> -->
<!-- End Twitter Feed -->

<!-- Bancos financiamento Section -->
<div id="bancos" class="page" >
    <div class="container">
        <!-- Title Page -->
        <div class="row">
            <div class="span12">
                <div class="title-page" style="margin-bottom: 0;">
                    <h2 class="title" >Simulações de Financiamento</h2>                    
                </div>
            </div>
        </div>
        <!-- End Title Page -->

        <div class="row" style="text-align: center;">    	
            <div class="span12">
                <img class="span12" border="0" usemap="#Map10" src="http://www.iareskiimoveis.com.br/templates/novo/imagens/simuladores.png">
                <map id="Map10" name="Map10">
                    <area target="_blank" href="http://www.santander.com.br/portal/wps/script/templates/GCMRequest.do?page=5516" coords="16,70,117,138" shape="rect">
                    <area target="_blank" href="https://www42.bb.com.br/portalbb/creditoImobiliario/Proposta,2,2250,2250.bbx" coords="132,69,234,136" shape="rect">
                    <area target="_blank" href="http://www8.caixa.gov.br/siopiinternet/simulaOperacaoInternet.do?method=inicializarCasoUso" coords="251,71,351,137" shape="rect">
                    <area target="_blank" href="http://www.itau.com.br/imobline/" coords="467,69,569,137" shape="rect">
                    <area target="_blank" href="http://www.shopcredit.com.br/simuladores/conteudo/simulador/stsmtipocredimob.aspx?Prf=8&Prd=1&SiteOrigem=Imoveis" coords="360,69,456,139" shape="rect">
                </map>
            </div>
        </div>
    </div>
</div>


<!-- Socialize
<div id="social-area" class="page">
	<div class="container">
    	<div class="row">
            <div class="span12">
                <nav id="social">
                    <ul>
                        <!--<li><a href="#" title="Follow Me on Twitter" target="_blank"><span class="font-icon-social-twitter"></span></a></li>
                        <li><a href="#" title="Follow Me on Dribbble" target="_blank"><span class="font-icon-social-dribbble"></span></a></li>
                        <li><a href="#" title="Follow Me on Forrst" target="_blank"><span class="font-icon-social-forrst"></span></a></li>
                        <li><a href="#" title="Follow Me on Behance" target="_blank"><span class="font-icon-social-behance"></span></a></li>-->
                        <!--<li><a href="https://www.facebook.com/pages/Iareski-Im%C3%B3veis/102306513206682" title="Follow Me on Facebook" target="_blank"><span class="font-icon-social-facebook"></span></a></li>
                        <!--<li><a href="#" title="Follow Me on Google Plus" target="_blank"><span class="font-icon-social-google-plus"></span></a></li>
                        <li><a href="#" title="Follow Me on LinkedIn" target="_blank"><span class="font-icon-social-linkedin"></span></a></li>
                        <li><a href="#" title="Follow Me on ThemeForest" target="_blank"><span class="font-icon-social-envato"></span></a></li>
                        <li><a href="#" title="Follow Me on Zerply" target="_blank"><span class="font-icon-social-zerply"></span></a></li>-->
                   <!--</ul>
                </nav>
            </div>
        </div>
    </div>
</div>
<!-- End Socialize -->

<!-- Footer -->
<footer>
	<p class="credits">&copy;2013 <span href="#" title="IARESKI IMÓVEIS">Iareski Imóveis </span> by <span href="#" title="Maison K. Sakamoto | Web Designer &amp; Front-end Developer">Maison K. Sakamoto - maison.sakamoto@gmail.com</span></p>
</footer>
<!-- End Footer -->

<!-- Back To Top -->
<a id="back-to-top" href="#">
	<i class="font-icon-arrow-simple-up"></i>
</a>
<!-- End Back to Top -->


<!-- Js -->
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js"></script> <!-- jQuery Core -->
<!--<script src="js/jquery-1.8.2.js"></script> <!-- Bootstrap -->
<script src="_include/js/bootstrap.min.js"></script> <!-- Bootstrap -->
<!--<script src="_include/js/supersized.3.2.7.min.js"></script> <!-- BRUSHED.slider carrega com supersized -->
<script src='_include/js/jquery.easing.1.3.js'></script>
<script src='_include/js/camera.js'></script> 
<script src="_include/js/waypoints.js"></script> <!-- WayPoints -->
<script src="_include/js/waypoints-sticky.js"></script> <!-- Waypoints for Header -->
<script src="_include/js/jquery.isotope.js"></script> <!-- Isotope Filter -->
<script src="_include/js/jquery.fancybox.pack.js"></script>  <!--Fancybox -->
<!--<script src="_include/js/jquery.fancybox-media.js"></script>  Fancybox for Media -->
 <!--<script src="_include/js/jquery.fancybox-thumbs.js"></script>Fancybox for Media -->
<script src="_include/js/jquery.jcarousel.min.js"></script>
<script src="_include/js/jquery.pikachoose.min.js"></script>
<!--<script src="_include/js/jquery.touchwipe.min.js"></script>-->
<script src="_include/js/jquery.tweet.js"></script> <!-- Tweet -->
<script src="_include/js/plugins.js"></script> <!-- Contains: jPreloader, jQuery Easing, jQuery ScrollTo, jQuery One Page Navi -->

<script src="js/jquery-ui-1.9.1.custom.min.js"></script> <!-- Index JS -->
<script src='http://maps.google.com/maps/api/js?sensor=false' type='text/javascript'></script>
<script src="js/descricao.js?03062014"></script><!--  Index JS -->
<script src="js/index.js?03062014"></script><!-- Index JS -->
<script src="js/custom_jquery.js"></script><!-- Index JS -->
<script src="_include/js/main.js?03062014"></script> <!-- Default JS -->

<!-- End Js -->

</body>
</html>