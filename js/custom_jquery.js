    var custom = {};
    
    custom.isDate=function(d){                                                  // FUNÇÃO PARA VERIFICAR SE A DATA É VÁLIDA        
        try{                                                                    // TENTAR EXECUTAR
            $.datepicker.parseDate('dd/mm/yy', d);                              // UTILIZA-SE DA API JQUERY            
            return true;                                                        // CASO DEU CERTO RETORNAR TRUE
        }                                                                       // FIM DO TRY
        catch (e){return false;}                                                // CASO DER ERRADO RETORNAR FALSE        
    };
    
    function getDate(){
            hoje = new Date();
            dia = hoje.getDate();
            mes = hoje.getMonth()+1;
            ano = hoje.getFullYear();
            if (dia < 10){
                dia = "0" + dia;
            }
            if (mes < 10){
                mes = "0" + mes;
            }
            //O mes começa em Zero, então soma-se 1
            return emissao = (dia + "/" + mes + "/" + ano);
    }
    /***BUSCA PROPRIETARIO***/
    function getProprietario(){
                    var prop_numero = $("#prop_numero").val();
                    var prop_nome = $("#prop_nome").val();                
                    var obj = {'prop_numero' : prop_numero, 'prop_nome' : prop_nome};
                    var data;

                    $.post("../view/consultaFrete.php",{'obj': obj},function(callBack){
                        data= callBack;//onde vou escrever o resultado	
                    data = data.split("|");

                    if(data[2]=="J"){//JURIDICO
                            $("#cart_tipo_cliente").val("JURIDICO");
                            $("#prop_rntrc").val(data[4]);
                            $("#prop_rntrc_venc").val(data[5]);
                            $("#prop_rntrc").show();
                            $("#prop_rntrc_venc").show();
                            $("#campo_prop_rntrc").show();
                            $("#campo_prop_rntrc_venc").show();
                            zerarImpostos();
                    }
                    else if(data[2]=="F"){//FISICO
                            $("#cart_tipo_cliente").val("FISICO");
                            $("#prop_rntrc").val(data[4]);
                            $("#prop_rntrc_venc").val(data[5]);
                            $("#prop_rntrc").show();
                            $("#prop_rntrc_venc").show();
                            $("#campo_prop_rntrc").show();
                            $("#campo_prop_rntrc_venc").show();

                            //CONSULTA IMPOSTOS
                            $.post("../view/consultaFrete.php",{cart_prop_prop: data[1]},function(callBack){
                                $("#jaDescontado").val(callBack);                    
                            });
                            $.post("../view/consultaFrete.php",{limiteInss: data[1]},function(callBack){
                                $("#lInss").val(callBack);                    
                            });



                    }
                    else if(data[2]=="E"){//ESTRANGEIRO
                            $("#cart_tipo_cliente").val("ESTRANGEIRO");
                            $("#prop_rntrc").hide();
                            $("#campo_prop_rntrc").hide();
                            $("#prop_rntrc_venc").hide();
                            $("#campo_prop_rntrc_venc").hide();			
                            zerarImpostos();
                    }
                    else{
                        alert('Proprietario Nao Cadastrado!');
                        $("#prop_numero").focus(); //SETANDO FOCUS
                    }
                    //ABAIXO SEMPRE ACONTECE
                    $("#cart_prop_simples").val(data[9]);
                    $("#valor").val("0,00"); //PARA CASO SEJA MUDADO O PROPRIETARIO ZERAR O VALOR PARA O EVENTO CHANGE ACONTECER DENOVO
                    $("#cart_cod_cliente").val(data[1]);                                
                    $("#prop_nome").val(""+data[0]);
                    $("#tipo_pagamento").val(data[8]);


                    //CONSULTA DA PLACA DO VEICULO
                    var codigo="";
                    codigo = data[1]+"|"+data[2];
                    $.post("../view/consultaFrete.php",{prop_id: codigo},function(callBack){
                        $('#veiculos').html(callBack);//onde vou escrever o resultado
                    });

            });

    }
    /********** END BUSCA PROPRIETARIO **********/  

    /*** INICIO BUSCA MOTORISTA ***/
    function getMotorista(){
        //FUNCAO RETORNO DA CONSULTA MOTORISTA POR CPF ou CEDULA PY
        var data;
        var mot_numero = $("#mot_numero").val();

        $.post("../view/consultaMotorista.php",{mot_numero: mot_numero},function(callBack){
            data= callBack;//onde vou escrever o resultado	
            data = data.split("|");

            $("#cart_cod_mot").val(data[1]);
            $("#mot_nome").val(data[0]);
            $("#mot_habilitacao").val(data[2]);
            $("#mot_hab_venc").val(data[3]);

            if(data[0]==''){
                alert('Motorista Nao Cadastrado!');
                $("#mot_numero").focus(); //SETANDO FOCUS
            }else{
                if(data[2] =='' ){//VERIFICANDO SE É BRASILEIRO OU ESTRANGEIRO
                        $("#cart_tipo_mot").val("ESTRANGEIRO");	
                        $("#mot_habilitacao").hide();
                        $("#mot_hab_venc").hide();
                }		
                else{
                        $("#cart_tipo_mot").val("BRASILEIRO");
                        $("#mot_habilitacao").show();
                        $("#mot_hab_venc").show();
                }
            }
    });
    }
    /*** END BUSCA MOTORISTA ***/

    
    function getCidade(){                        
        $('#cid_nome').autocomplete({                                                       // AUTOCOMPLETAR A PLACA DO VEICULO
            minLength: 2,                                                                   // TAMANHO MINIMO PARA AUTOCOMPLETAR
            source: function( request, response ) {                                         // ORIGEM DA INFORMAÇÃO                
                var obj = new Object();                                                     // NOVO OBJETO
                obj.maxRows = 10;                                                           // MAXIMO DE REGISTROS NO RETORNO
                obj.letra = request.term;                                                   // TERMO DA PESQUISA
                var data = custom.ajax(obj,'','../view/consultaCidade.php');                // CONSULTA EM BANCO
                response( $.map( data, function( item ) {                                   // FUNCAO RESPONSE 
                    return {label: item.cid_nome+'->'+item.cid_estado,obj: item} }));       // RETORNO
            },                                                                              // FIM DA ORIGEM DOS DADOS
            select: function( event, ui ) {                                                 // PARAMETRO SELECT                                
                $( "#cid_nome" ).val( ui.item.obj.cid_nome );                               // PREENCHE RETORNO DA CONSULTA
                $( "#cid_cod_nome" ).val(ui.item.obj.cid_id);                               // PREENCHE RETORNO DA CONSULTA            
            }                                                                               // FIM DO PARAMETRO SELECT
        });
        $('#cid_nome2').autocomplete({                                                      // AUTOCOMPLETAR A PLACA DO VEICULO
            minLength: 2,                                                                   // TAMANHO MINIMO PARA AUTOCOMPLETAR
            source: function( request, response ) {                                         // ORIGEM DA INFORMAÇÃO                
                var obj = new Object();                                                     // NOVO OBJETO
                obj.maxRows = 10;                                                           // MAXIMO DE REGISTROS NO RETORNO
                obj.letra = request.term;                                                   // TERMO DA PESQUISA
                var data = custom.ajax(obj,'','../view/consultaCidade.php');                // CONSULTA EM BANCO
                response( $.map( data, function( item ) {                                   // FUNCAO RESPONSE 
                    return {label: item.cid_nome+'->'+item.cid_estado,obj: item} }));       // RETORNO
            },                                                                              // FIM DA ORIGEM DOS DADOS
            select: function( event, ui ) {                                                 // PARAMETRO SELECT                                
                $( "#cid_nome2" ).val( ui.item.obj.cid_nome );                              // PREENCHE RETORNO DA CONSULTA
                $( "#cid_cod_nome2" ).val(ui.item.obj.cid_id);                              // PREENCHE RETORNO DA CONSULTA            
            }                                                                               // FIM DO PARAMETRO SELECT
        });
    }
    
    /**
     * custom.ajax(obj,funcao,view)<br/>
     * paramentros:<br/>
     * &nbsp; obj = obj com os parametros<br/>
     * &nbsp; funcao = nome da funcao a ser executada<br/>
     * &nbsp; view = nome view a ser chamada<br/>
     * return:<br/>
     * &nbsp; json
     */
    custom.ajax=function(obj,funcao,view){                                                  // FUNÇÃO AJAX
        var data = {'obj':obj,'funcao':funcao};                                             // SETA OS PARAMETROS
        var retorno;                                                                        // VAR DE RETORNO
        $.ajax({type:"POST", url:view, dataType:"json", data:data,async:false,              // FAZ UM AJAX SINCRONIZADO COM A FUNCAO
            success: function(json) { retorno = json; },                                    // RETORNO DO AJAX NO SUCCESS
            error: function(json) { retorno=json; },                                        // RETORNO DO AJAX NO ERROR
            beforeSend: function() { $('body').css('cursor','wait'); },                     // RETORNO DO AJAX NO ERROR
            complete: function(){ $('body').css('cursor','default'); }
        });                                                                                 // FIM DO AJAX        
        return retorno;                                                                     // RETORNO DA FUNÇÃO
    };                                                                                      // FIM DA FUNÇÃO
    
    /**
     * custom.autocomplet(jQuery,strLabel,ajaxFuncao,ajaxView)<br/>
     * paramentros:<br/>
     * &nbsp; jQuery = elemento jQuery ex: $('#ex')<br/>
     * &nbsp; strLabel = string atributo da tab que vai no input <br/>
     * &nbsp; strFuncao = string funcao php a ser chamada<br/>
     * &nbsp; strView = string view a ser chamada<br/>
     * return:<br/>
     * &nbsp; para o RETORNO use a seguinte assinatura: <br/>
     * &nbsp; custom.autocomplet.retorno=function(obj){<br/> &nbsp;...<br/> &nbsp;};
     */
    custom.autocomplet=function(jQuery,strLabel,strFuncao,strView){                       // FUNÇÃO AUTOCOMPLETAR        
        jQuery.autocomplete({                                                               // AUTOCOMPLETAR O FORNECEDOR
            minLength: 3,                                                                   // CARACTERES MINIMO PARA AUTOCOMPLETAR
            source: function(request, response) {                                           // ORIGEM DA INFORMAÇÃO                
                var obj = new Object();                                                     // NOVO OBJETO
                obj.maxRows = 10;                                                           // MAXIMO DE REGISTROS NO RETORNO
                obj.letra = request.term;                                                   // TERMO DA PESQUISA
                var data = custom.ajax(obj, strFuncao, strView);                          // DATA RECEBE RESULTADOS DO AJAX
                response($.map(data, function(item) {                                       // FUNCAO RESPONSE 
                    return {label: item[strLabel], obj: item}                               // LABEL E OBJ DE RETORNO
                }));                                                                        // RETORNO
            },                                                                              // FIM DA ORIGEM DOS DADOS
            select: function(event, ui) {                                                   // PARAMETRO SELECT                                
                var obj = ui.item.obj;                                                      // RECEBE O OBJETO DE RETORNO                
                jQuery.val(obj[strLabel]);                                                  // PREENCHE RETORNO DA CONSULTA                
                custom.autocomplet.retorno(obj);
            }                                                                               // FIM DO PARAMETRO SELECT
        });                                                                                 // FIM DO JQUERYAUTOCOMPLETE        
    };                                                                                      // FIM DA FUNCAO
    custom.autocomplet.retorno=function(obj){};
    
    
    /**
     * custom.listarNaTable($(table),arrayDeObjetos)<br/>
     * paramentros:<br/>
     * &nbsp; $(table) = table selecionada no Jquey onde será inserido<br/>
     * &nbsp; arrayDeObjetos = array de Objetos<br/>
     * &nbsp; cab = com cabecalho(true) ou sem cabecalho(false)<br/>
     * return:<br/>
     * &nbsp; Não possui retorno
     */
    custom.listarNaTable=function(jQueryTable,json,cab){                                    // FUNÇÃO LISTAR NA TABLE
        jQueryTable.find('tbody').empty();                                                  // LIMPA THEAD
        if(json === null){ return 0;}                                                       // CASO JSON NAO TENHA NENHUM ELEMENTO        
        if(cab){                                                                            // VERIFICA SE VAI ESCREVER O CABEÇALHO DA TABELA
            jQueryTable.find('thead').remove();                                              // LIMPA THEAD
            var c;                                                                          // VAR LOCAL
            var obj = json[0];                                                              // OBJ LOCAL
            c = "<tr>";                                                                     // NOVA TR
            for(var k in obj) { c = c + "<th id=th"+k+" >"+k+"</th>"; }                  // SETANDO OS ATRIBUTOS DO OBJECT            
            c = c +"</tr>";                                                                 // FECHA A TR
            $('<thead></thead>').append(c).appendTo(jQueryTable);                           // ADD CABEÇALHO E FAZ APPEND NA TABLE
        }                                                                                   // FIM DO IF 
        for(var i =0; i < json.length; i++){                                                // LAÇO DE REPETIÇÃO
            var obj = json[i];                                                              // PEGA OBJETO                                                
            var colunas = '';                                                               // VAR COLUNAS
            for(var k in obj) {                                                             // LAÇO PARA PEGAR OS ATRIBUTOS DO OBJETO
                colunas = colunas +                                                         // COLUNA RECEBE O QUE JÁ TEM NELA +
                "<td id='td"+k+"'>"+obj[k]+"</td>";                                      // O QUE ESTA NO OBJETO
            }                                                                               // FIM DO LAÇO
            $('<tr></tr>').append(colunas).appendTo(jQueryTable);          // APPEND PARA O TABLE
        }                                                                                   // FIM DO FOR
    };                                                                                      // FIM DA FUNÇÃO
    
    custom.addNaTable=function(jQueryTable,json){
        if(json === null){ return 0;}                                                       // CASO JSON NAO TENHA NENHUM ELEMENTO                                                                                               // FIM DO IF 
        for(var i =0; i < json.length; i++){                                                // LAÇO DE REPETIÇÃO
            var obj = json[i];                                                              // PEGA OBJETO                                                
            var colunas = '';                                                               // VAR COLUNAS
            for(var k in obj) {                                                             // LAÇO PARA PEGAR OS ATRIBUTOS DO OBJETO
                colunas = colunas +                                                         // COLUNA RECEBE O QUE JÁ TEM NELA +
                "<td id='td"+k+"'>"+obj[k]+"</td>";                                      // O QUE ESTA NO OBJETO
            }                                                                               // FIM DO LAÇO
            $('<tr></tr>').append(colunas).appendTo(jQueryTable);          // APPEND PARA O TABLE
        }                                                                                   // FIM DO FOR
    };
    
    function calcularImpostos(){//  INSS    -   SEST    -   SENAT

        var aux = "" + $("#valor").val();
        aux = aux.replace(".","");//primeiro remover os pontos da mascara
        aux = aux.replace(",",".");//segundo substituir a virgula por ponto (para formato float)

        //VALOR USADO NO METODO calcularImpostos(), nao remover
        var valor = aux;
        var limiteInss = new Number( $("#lInss").val() );    
        var totJaDescontado = new Number( $("#jaDescontado").val() );//preenchido junto com o evento de autocomplete

        //base de calculo é 20% do valor da carta
        var base = new Number( parseFloat(  (valor*20)/100 ) );    

        var limitDeducao= (parseFloat(limiteInss) - parseFloat(totJaDescontado)).toFixed(2);

        var inssNormal= (base*11)/100;//inss é 11% do valor da base
        var inssDeduzir = 0;
        //CASO 1 - Deducao InSSNormal quando houver saldo no limitDeducao
        if( (limitDeducao-inssNormal) >= 0 ) {
            inssDeduzir = inssNormal;
        }    
        //CASO 2 - Deducao InSSNormal é superior
        else if(inssNormal > limitDeducao){

            if(limitDeducao < 0){ //caso houver estouro no totJaDescontado        
                inssDeduzir = 0;
            }
            else{
                inssDeduzir = limitDeducao;    
            }

        }

        $("#inss").val( parseFloat( inssDeduzir ).toFixed(2) );

        //sest é 1.5% do valor da base
        $("#sest").val( parseFloat( ( (base*1.5)/100) ).toFixed(2) ) ;

        //inss é 1% do valor da base
        $("#senat").val(parseFloat( ((base*1)/100 ) ).toFixed(2) );
    }

    function zerarImpostos(){
        $("#inss").val("0");

        //sest é 1.5% do valor da base
        $("#sest").val("0") ;

        //inss é 1% do valor da base
        $("#senat").val("0");
    }
    
    function getDatePickerDefault(){ //USADO PARA TRANSFORMAR O jQuery.Calendar em portugues
        return {dateFormat: 'dd/mm/yy',
                dayNames: ['Domingo','Segunda','Terça','Quarta','Quinta','Sexta','Sábado','Domingo'],
                dayNamesMin: ['Dom','Seg','Ter','Qua','Qui','Sex','Sab','Dom'],
                dayNamesShort: ['Dom','Seg','Ter','Qua','Qui','Sex','Sáb','Dom'],
                monthNames: ['Janeiro','Fevereiro','Março','Abril','Maio','Junho','Julho','Agosto','Setembro', 'Outubro','Novembro','Dezembro'],
                monthNamesShort: ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set', 'Out','Nov','Dez'],
                nextText: 'Próximo',
                prevText: 'Anterior'
            };
    } 

    function convertFloatToMoeda(result){
            var neg=false;
            if(result == null){ return "0,00"; }

            for (i=0;i<result.length;i++){
                if (result.toString().charAt(i)==','){ return alert('erro convertFloatToMoeda =>' +result+' nao é tipo float' ); }
                if (result.toString().charAt(i)=='-'){ neg=true; }
            }

            array = result.toString().split('.');
            result = array[0];
            var ponto = result.length;

            if(neg == true){
                while( ponto > 3 ){
                    ponto = ponto - 3;
                    result = splice( result,ponto, 0, "." );
                    result = result.replaceAll('-.','-');
                }
            }
            else{
                while( ponto > 3 ){            
                    ponto = ponto - 3;
                    result = splice( result,ponto, 0, "." );
                }
            }

            var tam = array.length; //tamanho do array (para ver se tem decimais)
            if(tam > 1){            //caso tenha decimais
                if(array[1].length <= 1){       //caso tenha um digito tipo 10,3 (virgula trinta)
                    array[1] = array[1] + '0';
                }
                return result + ',' + array[1]; //decimais
            }
            return result+',00'; //retorna decimais zerados se nao houver decimais
    }
        
    /*USADO NO convertFloatToMoeda*/
    function splice(valor, idx, rem, s ) {
        return (valor.toString().slice(0,idx) + s + valor.toString().slice(idx + Math.abs(rem)));
    }

    /*truncar numero exemplo: 2.125  usar roundNumber(2.125) return 2.12
    *CUIDADO O ARREDONDAMENTO gera outro resultado (2.125).toFixed(2) igual a 2.13
    **/
    function roundNumber(numero, casas) { 
            if(numero.toString().indexOf(',') != -1){
                return 'truncar() erro: formato invalido => ' + numero;
            }
            else if(numero.toString().indexOf('.') != -1){
                return numero.toString().substr(0,numero.toString().indexOf('.')+(casas+1));
            }
            else
                return numero;
    }

    /*convert tipo string em Float funciona com tipo moeda ex: 1.500,33 (return 1500.33) */
    function convertFloatNumber(str){ var r = custom.convertFloatNumber(str); return r;}
    custom.convertFloatNumber = function(str){
        try{
            if(str.indexOf(',') != -1){//STR NAO CONTEM O CHAR ',' ( != NEGACAO CONTEM)
                str = str.replaceAll('.','').replace(',','.');    //PARA FORMATAR PADRAO FLOAT                
            }            
            return parseFloat(str);
        }catch(error){
            console.log(error)
        }
    };

    function removeMaskNumber(str){ //ex: entrada 3,200.57 -> saida 3200.57
        if(str.indexOf(',') != -1){//STR NAO CONTEM O CHAR ',' ( != NEGACAO CONTEM)
            str = str.replace(',','');   //PARA FORMATAR PADRAO FLOAT
        }
        return new Number(str);
    }

    /*VALIDAR CPF*/
    function valida_cpf(cpf){ var r = custom.valida_cpf(cpf); return r; }
    custom.valida_cpf=function(cpf){
        cpf = cpf.replaceAll('.', '');
        cpf = cpf.replaceAll('-', '');

        var numeros, digitos, soma, i, resultado, digitos_iguais;
        digitos_iguais = 1;
        if (cpf.length < 11)
            return false;
        for (i = 0; i < cpf.length - 1; i++)
            if (cpf.charAt(i) != cpf.charAt(i + 1))
            {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais)
        {
            numeros = cpf.substring(0, 9);
            digitos = cpf.substring(9);
            soma = 0;
            for (i = 10; i > 1; i--)
                soma += numeros.charAt(10 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;
            numeros = cpf.substring(0, 10);
            soma = 0;
            for (i = 11; i > 1; i--)
                soma += numeros.charAt(11 - i) * i;
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false;
            return true;
        }
        else
            return false;
    };

    /*ALGORITMO PARA VALIDAR PIS*/
    function ChecaPIS(pis){
            pis = pis.replaceAll('.', '');
            pis = pis.replaceAll('-', '');

            var ftap="3298765432";
            var i;
            var total=0;
            var resto=0;
            var numPIS=0;
            var strResto="";

            numPIS=pis;

            if (numPIS=="" || numPIS==null)
            {
                    return false;
            }

            for(i=0;i<=9;i++)
            {
                    resultado = (numPIS.slice(i,i+1))*(ftap.slice(i,i+1));
                    total=total+resultado;
            }

            resto = (total % 11)

            if (resto != 0)
            {
                    resto=11-resto;
            }

            if (resto==10 || resto==11)
            {
                    strResto=resto+"";
                    resto = strResto.slice(1,2);
            }

            if (resto!=(numPIS.slice(10,11)))
            {
                    return false;
            }

            return true;
    }

    /*VALIDACAO CNPJ*/
    function valida_cnpj(cnpj){ var r = custom.valida_cnpj(cnpj); return r; } // MANTER ESTA LINHA POIS ARQUIVOS ANTIGOS USAVA ASSIM
    custom.valida_cnpj = function(cnpj) {
        cnpj = cnpj.replaceAll('.', '');
        cnpj = cnpj.replaceAll('/', '');
        cnpj = cnpj.replaceAll('-', '');
        var numeros, digitos, soma, i, resultado, pos, tamanho, digitos_iguais;
        digitos_iguais = 1;
        if (cnpj.length < 14 && cnpj.length < 15)
            return false;
        for (i = 0; i < cnpj.length - 1; i++)
            if (cnpj.charAt(i) != cnpj.charAt(i + 1))
            {
                digitos_iguais = 0;
                break;
            }
        if (!digitos_iguais)
        {
            tamanho = cnpj.length - 2
            numeros = cnpj.substring(0, tamanho);
            digitos = cnpj.substring(tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--)
            {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(0))
                return false;
            tamanho = tamanho + 1;
            numeros = cnpj.substring(0, tamanho);
            soma = 0;
            pos = tamanho - 7;
            for (i = tamanho; i >= 1; i--)
            {
                soma += numeros.charAt(tamanho - i) * pos--;
                if (pos < 2)
                    pos = 9;
            }
            resultado = soma % 11 < 2 ? 0 : 11 - soma % 11;
            if (resultado != digitos.charAt(1))
                return false;
            return true;
        }
        else
            return false;
    };

    function removeMascara(string){ var s = custom.removeMascara(string); return s;}
    custom.removeMascara=function(string){
        string = string.replaceAll('.', '');
        string = string.replaceAll('/', '');
        string = string.replaceAll('-', '');
        return string;  
    };
    
    
    
    custom.convertDatePortuguestoSql=function(date){
        var s = date.split("/");
        var ano = s[2];
        var mes = s[1];
        var dia = s[0];
        return ano+"-"+mes+"-"+dia;
    };        
    
    custom.convertDateSqltoPortugues=function(date){
        if(date != null){
            var s = date.split("-");
            var ano = s[0];
            var mes = s[1];
            var dia = s[2];
            return dia+"/"+mes+"/"+ano;
        }
    };
    
    function convertDateSqltoPortugues(date){ return custom.convertDateSqltoPortugues(date); }    
    function convertDatePortuguestoSql(date){ return custom.convertDatePortuguestoSql(date); }
    
    /*FUNÇÃO PARA RETORNAR O DIGITO VERIFICADOR DO RUC DO PARAGUAY
     * ex : passar o ruc 80014287-9 ele verifica se soma é igual o 9 então retorna true */
    custom.calcRuc = function(p_numero){
        var digito = p_numero.substr(9);
        p_numero = p_numero.substr(0,8);
        
        var v_total=0, v_resto=0, k=0, v_numero_aux=0, v_digit=0, v_numero_al="";
        p_numero = new String(""+p_numero);
   
        v_numero_al = p_numero;
        k = 2;
        v_total = 0;
        var p_basemax=11;
        
        for(var i = v_numero_al.length - 1; i >= 0; i--) {  
                k = k > p_basemax ? 2 : k;                
                v_numero_aux = v_numero_al.charAt(i);                
                v_total += v_numero_aux * k++;
        }

        v_resto = v_total % 11;        
        v_digit = v_resto > 1 ? 11 - v_resto : 0;

        var b;
        v_digit != digito ?  b= false : b=true;
        return b;
        
    }

    /*Criando uma funcao nativa para substituir todas as ocorrencias  de, para
    *ex: 10.123.123
    *resultara em 10123123
    **/
    String.prototype.replaceAll = function(de, para){
        var str = this;
        var pos = str.indexOf(de);
        while (pos > -1){
                    str = str.replace(de, para);
                    pos = str.indexOf(de);
            }
        return (str);
    }
 ;   
 /*! jquery.fixedHeaderTable. The jQuery fixedHeaderTable plugin
 */(function(e){e.fn.fixedHeaderTable=function(t){var n={width:"100%",height:"100%",themeClass:"fht-default",borderCollapse:!0,fixedColumns:0,fixedColumn:!1,sortable:!1,autoShow:!0,footer:!1,cloneHeadToFoot:!1,autoResize:!1,create:null},r={},i={init:function(t){r=e.extend({},n,t);return this.each(function(){var t=e(this);if(s._isTable(t)){i.setup.apply(this,Array.prototype.slice.call(arguments,1));e.isFunction(r.create)&&r.create.call(this)}else e.error("Invalid table mark-up")})},setup:function(){var t=e(this),n=this,o=t.find("thead"),u=t.find("tfoot"),a=0,f,l,c,h,p;r.originalTable=e(this).clone();r.includePadding=s._isPaddingIncludedWithWidth();r.scrollbarOffset=s._getScrollbarWidth();r.themeClassName=r.themeClass;r.width.search("%")>-1?p=t.parent().width()-r.scrollbarOffset:p=r.width-r.scrollbarOffset;t.css({width:p});if(!t.closest(".fht-table-wrapper").length){t.addClass("fht-table");t.wrap('<div class="fht-table-wrapper"></div>')}f=t.closest(".fht-table-wrapper");r.fixedColumn==1&&r.fixedColumns<=0&&(r.fixedColumns=1);if(r.fixedColumns>0&&f.find(".fht-fixed-column").length==0){t.wrap('<div class="fht-fixed-body"></div>');e('<div class="fht-fixed-column"></div>').prependTo(f);h=f.find(".fht-fixed-body")}f.css({width:r.width,height:r.height}).addClass(r.themeClassName);t.hasClass("fht-table-init")||t.wrap('<div class="fht-tbody"></div>');c=t.closest(".fht-tbody");var d=s._getTableProps(t);s._setupClone(c,d.tbody);if(!t.hasClass("fht-table-init")){r.fixedColumns>0?l=e('<div class="fht-thead"><table class="fht-table"></table></div>').prependTo(h):l=e('<div class="fht-thead"><table class="fht-table"></table></div>').prependTo(f);l.find("table.fht-table").addClass(r.originalTable.attr("class"));o.clone().appendTo(l.find("table"))}else l=f.find("div.fht-thead");s._setupClone(l,d.thead);t.css({"margin-top":-l.outerHeight(!0)});if(r.footer==1){s._setupTableFooter(t,n,d);u.length||(u=f.find("div.fht-tfoot table"));a=u.outerHeight(!0)}var v=f.height()-o.outerHeight(!0)-a-d.border;c.css({height:v});t.addClass("fht-table-init");typeof r.altClass!="undefined"&&i.altRows.apply(n);r.fixedColumns>0&&s._setupFixedColumn(t,n,d);r.autoShow||f.hide();s._bindScroll(c,d);return n},resize:function(){var e=this;return e},altRows:function(t){var n=e(this),i=typeof t!="undefined"?t:r.altClass;n.closest(".fht-table-wrapper").find("tbody tr:odd:not(:hidden)").addClass(i)},show:function(t,n,r){var i=e(this),s=this,o=i.closest(".fht-table-wrapper");if(typeof t!="undefined"&&typeof t=="number"){o.show(t,function(){e.isFunction(n)&&n.call(this)});return s}if(typeof t!="undefined"&&typeof t=="string"&&typeof n!="undefined"&&typeof n=="number"){o.show(t,n,function(){e.isFunction(r)&&r.call(this)});return s}i.closest(".fht-table-wrapper").show();e.isFunction(t)&&t.call(this);return s},hide:function(t,n,r){var i=e(this),s=this,o=i.closest(".fht-table-wrapper");if(typeof t!="undefined"&&typeof t=="number"){o.hide(t,function(){e.isFunction(r)&&r.call(this)});return s}if(typeof t!="undefined"&&typeof t=="string"&&typeof n!="undefined"&&typeof n=="number"){o.hide(t,n,function(){e.isFunction(r)&&r.call(this)});return s}i.closest(".fht-table-wrapper").hide();e.isFunction(r)&&r.call(this);return s},destroy:function(){var t=e(this),n=this,r=t.closest(".fht-table-wrapper");t.insertBefore(r).removeAttr("style").append(r.find("tfoot")).removeClass("fht-table fht-table-init").find(".fht-cell").remove();r.remove();return n}},s={_isTable:function(e){var t=e,n=t.is("table"),r=t.find("thead").length>0,i=t.find("tbody").length>0;return n&&r&&i?!0:!1},_bindScroll:function(e){var t=e,n=t.closest(".fht-table-wrapper"),i=t.siblings(".fht-thead"),s=t.siblings(".fht-tfoot");t.bind("scroll",function(){if(r.fixedColumns>0){var e=n.find(".fht-fixed-column");e.find(".fht-tbody table").css({"margin-top":-t.scrollTop()})}i.find("table").css({"margin-left":-this.scrollLeft});(r.footer||r.cloneHeadToFoot)&&s.find("table").css({"margin-left":-this.scrollLeft})})},_fixHeightWithCss:function(e,t){r.includePadding?e.css({height:e.height()+t.border}):e.css({height:e.parent().height()+t.border})},_fixWidthWithCss:function(t,n,i){r.includePadding?t.each(function(){e(this).css({width:i==undefined?e(this).width()+n.border:i+n.border})}):t.each(function(){e(this).css({width:i==undefined?e(this).parent().width()+n.border:i+n.border})})},_setupFixedColumn:function(t,n,i){var o=t,u=o.closest(".fht-table-wrapper"),a=u.find(".fht-fixed-body"),f=u.find(".fht-fixed-column"),l=e('<div class="fht-thead"><table class="fht-table"><thead><tr></tr></thead></table></div>'),c=e('<div class="fht-tbody"><table class="fht-table"><tbody></tbody></table></div>'),h=e('<div class="fht-tfoot"><table class="fht-table"><tfoot><tr></tr></tfoot></table></div>'),p=u.width(),d=a.find(".fht-tbody").height()-r.scrollbarOffset,v,m,g,y,b;l.find("table.fht-table").addClass(r.originalTable.attr("class"));c.find("table.fht-table").addClass(r.originalTable.attr("class"));h.find("table.fht-table").addClass(r.originalTable.attr("class"));v=a.find(".fht-thead thead tr > *:lt("+r.fixedColumns+")");g=r.fixedColumns*i.border;v.each(function(){g+=e(this).outerWidth(!0)});s._fixHeightWithCss(v,i);s._fixWidthWithCss(v,i);var w=[];v.each(function(){w.push(e(this).width())});b="tbody tr > *:not(:nth-child(n+"+(r.fixedColumns+1)+"))";m=a.find(b).each(function(t){s._fixHeightWithCss(e(this),i);s._fixWidthWithCss(e(this),i,w[t%r.fixedColumns])});l.appendTo(f).find("tr").append(v.clone());c.appendTo(f).css({"margin-top":-1,height:d+i.border});m.each(function(t){if(t%r.fixedColumns==0){y=e("<tr></tr>").appendTo(c.find("tbody"));r.altClass&&e(this).parent().hasClass(r.altClass)&&y.addClass(r.altClass)}e(this).clone().appendTo(y)});f.css({height:0,width:g});var E=f.find(".fht-tbody .fht-table").height()-f.find(".fht-tbody").height();f.find(".fht-tbody .fht-table").bind("mousewheel",function(t,n,r,i){if(i==0)return;var s=parseInt(e(this).css("marginTop"),10)+(i>0?120:-120);s>0&&(s=0);s<-E&&(s=-E);e(this).css("marginTop",s);a.find(".fht-tbody").scrollTop(-s).scroll();return!1});a.css({width:p});if(r.footer==1||r.cloneHeadToFoot==1){var S=a.find(".fht-tfoot tr > *:lt("+r.fixedColumns+")"),x;s._fixHeightWithCss(S,i);h.appendTo(f).find("tr").append(S.clone());x=h.find("table").innerWidth();h.css({top:r.scrollbarOffset,width:x})}},_setupTableFooter:function(t,n,i){var o=t,u=o.closest(".fht-table-wrapper"),a=o.find("tfoot"),f=u.find("div.fht-tfoot");f.length||(r.fixedColumns>0?f=e('<div class="fht-tfoot"><table class="fht-table"></table></div>').appendTo(u.find(".fht-fixed-body")):f=e('<div class="fht-tfoot"><table class="fht-table"></table></div>').appendTo(u));f.find("table.fht-table").addClass(r.originalTable.attr("class"));switch(!0){case!a.length&&r.cloneHeadToFoot==1&&r.footer==1:var l=u.find("div.fht-thead");f.empty();l.find("table").clone().appendTo(f);break;case a.length&&r.cloneHeadToFoot==0&&r.footer==1:f.find("table").append(a).css({"margin-top":-i.border});s._setupClone(f,i.tfoot)}},_getTableProps:function(t){var n={thead:{},tbody:{},tfoot:{},border:0},i=1;r.borderCollapse==1&&(i=2);n.border=(t.find("th:first-child").outerWidth()-t.find("th:first-child").innerWidth())/i;t.find("thead tr:first-child > *").each(function(t){n.thead[t]=e(this).width()+n.border});t.find("tfoot tr:first-child > *").each(function(t){n.tfoot[t]=e(this).width()+n.border});t.find("tbody tr:first-child > *").each(function(t){n.tbody[t]=e(this).width()+n.border});return n},_setupClone:function(t,n){var i=t,s=i.find("thead").length?"thead tr:first-child > *":i.find("tfoot").length?"tfoot tr:first-child > *":"tbody tr:first-child > *",o;i.find(s).each(function(t){o=e(this).find("div.fht-cell").length?e(this).find("div.fht-cell"):e('<div class="fht-cell"></div>').appendTo(e(this));o.css({width:parseInt(n[t],10)});if(!e(this).closest(".fht-tbody").length&&e(this).is(":last-child")&&!e(this).closest(".fht-fixed-column").length){var i=Math.max((e(this).innerWidth()-e(this).width())/2,r.scrollbarOffset);e(this).css({"padding-right":i+"px"})}})},_isPaddingIncludedWithWidth:function(){var t=e('<table class="fht-table"><tr><td style="padding: 10px; font-size: 10px;">test</td></tr></table>'),n,i;t.addClass(r.originalTable.attr("class"));t.appendTo("body");n=t.find("td").height();t.find("td").css("height",t.find("tr").height());i=t.find("td").height();t.remove();return n!=i?!0:!1},_getScrollbarWidth:function(){var t=0;if(!t)if(/msie/.test(navigator.userAgent.toLowerCase())){var n=e('<textarea cols="10" rows="2"></textarea>').css({position:"absolute",top:-1e3,left:-1e3}).appendTo("body"),r=e('<textarea cols="10" rows="2" style="overflow: hidden;"></textarea>').css({position:"absolute",top:-1e3,left:-1e3}).appendTo("body");t=n.width()-r.width()+2;n.add(r).remove()}else{var i=e("<div />").css({width:100,height:100,overflow:"auto",position:"absolute",top:-1e3,left:-1e3}).prependTo("body").append("<div />").find("div").css({width:"100%",height:200});t=100-i.width();i.parent().remove()}return t}};if(i[t])return i[t].apply(this,Array.prototype.slice.call(arguments,1));if(typeof t=="object"||!t)return i.init.apply(this,arguments);e.error('Method "'+t+'" does not exist in fixedHeaderTable plugin!');};})(jQuery);