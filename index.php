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
<link href="_include/css/main.css" rel="stylesheet">

<!-- Supersized -->
<link href="_include/css/supersized.css" rel="stylesheet">
<link href="_include/css/supersized.shutter.css" rel="stylesheet">

<!-- FancyBox -->
<link href="_include/css/fancybox/jquery.fancybox.css" rel="stylesheet">

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

<!-- Google Font -->
<link href='http://fonts.googleapis.com/css?family=Titillium+Web:400,200,200italic,300,300italic,400italic,600,600italic,700,700italic,900' rel='stylesheet' type='text/css'>

<!-- Fav Icon -->
<link rel="shortcut icon" href="#">

<link rel="apple-touch-icon" href="#">
<link rel="apple-touch-icon" sizes="114x114" href="#">
<link rel="apple-touch-icon" sizes="72x72" href="#">
<link rel="apple-touch-icon" sizes="144x144" href="#">

<!-- Modernizr -->
<script src="_include/js/modernizr.js"></script>

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
    #descricao{display: none;}
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

<div id="cab" style="height: 18%; background: white; margin-left: 0px; margin-right: -20px;"> <!--#7F8289-->
    <img title="iareski" src="imagens/logooficialempresa.png" alt="iareski_logo" style="width: 300px; margin-left:100px">
    <div style="margin-top: -65px; color: #483D8B; font: 900 20px 'Roboto',sans-serif; text-shadow: 0 2px 0 #C0C0C0; width: 250px; margin-left:800px"> 
            <p> IARESKI IMÓVEIS (45) 3574-7043 </p>
    </div>
</div>

<!-- Homepage Slider -->
<div id="home-slider">	
    <div class="overlay"></div>

    <div class="slider-text">
    	<div id="slidecaption">
            <div class="slide-content"></div>
        </div>
    </div>   
	
    <div class="control-nav">
        <a id="prevslide" class="load-item"><i class="font-icon-arrow-simple-left"></i></a>
        <a id="nextslide" class="load-item"><i class="font-icon-arrow-simple-right"></i></a>
        <ul id="slide-list"></ul>
        
        <a id="nextsection" href="#work"><i class="font-icon-arrow-simple-down"></i></a>
    </div>
</div>
<!-- End Homepage Slider -->


<!-- Header -->
<header>
    <div class="sticky-nav">
    	<a id="mobile-nav" class="menu-nav" href="#menu-nav"></a>
        
        <div id="logo">
        	<a id="goUp" href="#home-slider" title="IARESKI IMÓVEIS">IARESKI</a>
        </div>
        
        <nav id="menu">
        	<ul id="menu-nav">
            	<li class="current"><a href="#home-slider">Home</a></li>
                <li><a href="#work">Imóveis</a></li>                               
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
                <div class="title-page">
                    <h2 class="title">Imóveis</h2>
                    <h3 class="title-description">Veja nossos Destaques <a href="#">Aqui</a>.</h3>
                </div>
            </div>
        </div>
        <!-- End Title Page -->
        
        <!-- Portfolio Projects -->
        <div class="row">
        	<div class="span3">
            	<!-- Filter -->
                <nav id="options" class="work-nav">
                    <ul id="filters" class="option-set" data-option-key="filter">
                    	<li class="type-work">Tipos de Imóveis</li>
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
                    </ul>
                    <ul>
                        <li><a href="#sofrildo">Sofrildo</a></li>    
                    </ul>
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
<div id="descricao" class="page-alternate" title="">
    <div id="descFotoPrincipal"></div>
    <ul id="descEspecificacao">
        <li id="descCodigo">Código </li>                        
        <li id="descVendaLoc">Imóvel para </li>                        
        <li id="descTipo">Tipo de imóvel </li>                        
        <li id="descQuarto">Qtd Quarto </li>
        <li id="descSuite">Qtd Suíte </li>
        <li id="descSala">Qtd Sala </li>
        <li id="descCozinha">Qtd Cozinha </li>
        <li id="descEndereco">Endereço </li>                        
        <li id="descBairro">Bairro </li>                        
        <li id="descCidade">Cidade </li>                        
        <li id="descEstado">Estado </li>                        
        <li id="descAreaTerreno">Área do terreno </li>                        
        <li id="descAreaConst">Área construída </li>                        
        <li id="descValor">Valor do imóvel </li>                                                                      
    </ul>  
    <div id="descDescricao"></div>
    <div id="map"> </div>
    
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
            <div class="span4 profile">
                <object type="application/x-shockwave-flash" width="900" height="650" data="sofrildo.swf">
                    <param name="movie" value="arquivo.swf" />                
                </object>
            </div>
        </div>
    </div>
</div>
<!-- End sofrildo Section -->

<!-- About Section -->
<!--<div id="about" class="page-alternate">
<div class="container">
    <!-- Title Page -->
    <!--<div class="row">
        <div class="span12">
            <div class="title-page">
                <h2 class="title">Sobre</h2>
                <h3 class="title-description">Saiba mais sobre nossa equipe e Cultura.</h3>
            </div>
        </div>
    </div>
    <!-- End Title Page -->
    
    <!-- People -->
    <!--<div class="row">
    	
        <!-- Start Profile -->
    	<!--<div class="span4 profile">
        	<div class="image-wrap">
                <div class="hover-wrap">
                    <span class="overlay-img"></span>
                    <span class="overlay-text-thumb">Analista de Sistemas</span>
                </div>
                <img src="_include/img/profile/maison-curriculo.jpg" alt="Maison K. Sakamoto" style="width: 370px;">
            </div>
            <h3 class="profile-name">Maison K. Sakamoto</h3>
            <p class="profile-description">
                - Coordenador/supervisor do departamento de T.I.<br/>
                - Analise e desenvolvimento de sistemas de sistemas web. <br/>
                - Administrador da rede, site da empresa e sistemas. <br/>
                - Monitoramento dos servidores/sistemas das filiais. <br/>
                - Desenvolvimento de ERP personalizado da empresa. <br/>
                - Treinamento de usuários ao sistema ERP. <br/>
                - Gerenciamento de novos projetos referentes ao departamento de TI. <br/>
                - Líder de equipe de programadores e suporte.
            </p>
            	
            <div class="social">
            	<ul class="social-icons">
                	<li><a href="#"><i class="font-icon-social-twitter"></i></a></li>
                    <li><a href="#"><i class="font-icon-social-dribbble"></i></a></li>
                    <li><a href="#"><i class="font-icon-social-facebook"></i></a></li>
                </ul>
            </div>
        </div>
        <!-- End Profile -->
        
        <!-- Start Profile -->
    	<!--<div class="span4 profile">
        	<div class="image-wrap">
                <div class="hover-wrap">
                    <span class="overlay-img"></span>
                    <span class="overlay-text-thumb">Creative Director</span>
                </div>
                <img src="_include/img/profile/profile-02.jpg" alt="Jane Helf">
            </div>
            <h3 class="profile-name">Edmilson Iareski</h3>
            <p class="profile-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat <a href="#">hendrerit dictum</a>. 
            Praesent porta, purus eget sagittis imperdiet, nulla mi ullamcorper metus, id hendrerit metus diam vitae est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            	
            <div class="social">
            	<ul class="social-icons">
                	<li><a href="#"><i class="font-icon-social-twitter"></i></a></li>
                    <li><a href="#"><i class="font-icon-social-email"></i></a></li>
                </ul>
            </div>
        </div>
        <!-- End Profile -->
        
        <!-- Start Profile -->
    	<!--<div class="span4 profile">
        	<div class="image-wrap">
                <div class="hover-wrap">
                    <span class="overlay-img"></span>
                    <span class="overlay-text-thumb">Lead Designer</span>
                </div>
                <img src="_include/img/profile/profile-03.jpg" alt="Joshua Insanus">
            </div>
            <h3 class="profile-name">Mike Iareski</h3>
            <p class="profile-description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac augue at erat <a href="#">hendrerit dictum</a>. 
            Praesent porta, purus eget sagittis imperdiet, nulla mi ullamcorper metus, id hendrerit metus diam vitae est. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            	
            <div class="social">
            	<ul class="social-icons">
                	<li><a href="#"><i class="font-icon-social-twitter"></i></a></li>
                    <li><a href="#"><i class="font-icon-social-linkedin"></i></a></li>
                    <li><a href="#"><i class="font-icon-social-google-plus"></i></a></li>
                    <li><a href="#"><i class="font-icon-social-vimeo"></i></a></li>
                </ul>
            </div>
        </div>
        <!-- End Profile -->
        
        <!--</div>
    <!-- End People -->
    <!--</div>
<!--</div>
<!-- End About Section -->


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
            		<input id="contact_name" type="text" placeholder="Nome Completo" value="" name="name" />
                </p>
                <p class="contact-email">
                	<input id="contact_email" type="text" placeholder="endereço de Email" value="" name="email" />
                </p>
                <p class="contact-message">
                	<textarea id="contact_message" placeholder="Sua Mensagem" name="message" rows="15" cols="40"></textarea>
                </p>
                <p class="contact-submit">
                	<a id="contact-submit" class="submit" href="#">Enviar Email</a>
                </p>
                
                <div id="response">
                
                </div>
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

<!-- Socialize -->
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
                        <li><a href="https://www.facebook.com/pages/Iareski-Im%C3%B3veis/102306513206682" title="Follow Me on Facebook" target="_blank"><span class="font-icon-social-facebook"></span></a></li>
                        <!--<li><a href="#" title="Follow Me on Google Plus" target="_blank"><span class="font-icon-social-google-plus"></span></a></li>
                        <li><a href="#" title="Follow Me on LinkedIn" target="_blank"><span class="font-icon-social-linkedin"></span></a></li>
                        <li><a href="#" title="Follow Me on ThemeForest" target="_blank"><span class="font-icon-social-envato"></span></a></li>
                        <li><a href="#" title="Follow Me on Zerply" target="_blank"><span class="font-icon-social-zerply"></span></a></li>-->
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
<!-- End Socialize -->

<!-- Footer -->
<footer>
	<p class="credits">&copy;2013 <a href="#" title="IARESKI IMÓVEIS">Iareski Imóveis </a> by <a href="#" title="Maison K. Sakamoto | Web Designer &amp; Front-end Developer">Maison K. Sakamoto - maison.sakamoto@gmail.com</a></p>
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
<script src="_include/js/supersized.3.2.7.min.js"></script> <!-- Slider -->
<script src="_include/js/waypoints.js"></script> <!-- WayPoints -->
<script src="_include/js/waypoints-sticky.js"></script> <!-- Waypoints for Header -->
<script src="_include/js/jquery.isotope.js"></script> <!-- Isotope Filter -->
<script src="_include/js/jquery.fancybox.pack.js"></script> <!-- Fancybox -->
<script src="_include/js/jquery.fancybox-media.js"></script> <!-- Fancybox for Media -->
<script src="_include/js/jquery.tweet.js"></script> <!-- Tweet -->
<script src="_include/js/plugins.js"></script> <!-- Contains: jPreloader, jQuery Easing, jQuery ScrollTo, jQuery One Page Navi -->
<script src="_include/js/main.js?nocache=123"></script> <!-- Default JS -->
<script src="js/jquery-ui-1.9.1.custom.min.js"></script> <!-- Index JS -->
<script src='http://maps.google.com/maps/api/js?sensor=false' type='text/javascript'></script>
<script src="js/descricao.js?23"></script> <!-- Index JS -->
<script src="js/index.js?2"></script> <!-- Index JS -->

<!-- End Js -->

</body>
</html>