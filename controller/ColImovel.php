<?php

/*
 * To change this template, choose Tools | Templates
 * and open the template in the editor.
 */

Class ColImovel{
    
    public function __construct(){}
    
    function getImovelAtivo(){
        $query = "select * from imo_imovel where ativo=1";
        $result = mysql_query($query);
        while($obj = mysql_fetch_object($result)){
            $array[] = $obj;
        }
        return @$array; 
    }
    
    function getFotos(){
        $query = "select idimovel,idfoto,arquivo from imo_foto where ordem=0 group by idimovel order by idimovel;";
        $result = mysql_query($query);
        while($obj = mysql_fetch_object($result)){
            $array[] = $obj;
        }
        return @$array; 
    }
    
    function getImovelById($obj){
        
        $query = "select *,
            (select b.nome from imo_bairro b where b.idbairro=i.idbairro limit 1) as 'bairro',
            (select c.nome from imo_cidade c  where c.idcidade=i.idcidade limit 1 ) as 'cidade',
            (select c.uf from imo_cidade c  where c.idcidade=i.idcidade limit 1 ) as 'uf'
             from imo_imovel i 
            where idimovel=".$obj->idimovel;
        $result = mysql_query($query);
        $obj = mysql_fetch_object($result);
        return $obj; 
    }
    
    function getFotosById($obj){
        $query = "select idimovel,idfoto,arquivo from imo_foto where idimovel=".$obj->idimovel." order by idimovel;";
        $result = mysql_query($query);
        while($obj = mysql_fetch_object($result)){
            $array[] = $obj;
        }
        return @$array; 
    }
}
?>
