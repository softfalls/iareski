<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

    include_once '../controller/OpenDB.php';
    include_once '../controller/ColImovel.php';
    
    $funcao = $_REQUEST['funcao'];
    /* Verifica qual funcao sera chamada no php*/
    call_user_func($funcao);
    
    function getFotosById(){
        $obj = (object) $_REQUEST['obj'];
        //$obj.idimovel; // sitaxe js, neste caso errado
        $obj->idimovel; // sintaxe php
        $o = new OpenDB();
        $c = new colImovel();
        $o->conectar();        
        $fotos = $c->getFotosById($obj);
        $imovel = $c->getImovelById($obj);
        utf8_encode_deep($imovel);
        echo json_encode( array('fotos'=>$fotos,'obj'=>$imovel ) );
        
    }
    
    function utf8_encode_deep(&$input) {
        if (is_string($input)) {
            $input = utf8_encode($input);
        } else if (is_array($input)) {
            foreach ($input as &$value) {
                utf8_encode_deep($value);
            }

            unset($value);
        } else if (is_object($input)) {
            $vars = array_keys(get_object_vars($input));

            foreach ($vars as $var) {
                utf8_encode_deep($input->$var);
            }
        }
    }
?>
