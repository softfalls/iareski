<?php
/* Este arquivo conecta um banco de dados MySQL
 * Na function conectar() apontar para qual servido você deseja se conectar
 * Autor: Marcio Souza
 * Revisao: 0
 * Data: 09/12/2011
 */

class OpenDB{	
	private $dbname; // Indique o nome do banco de dados que será aberto	
	
	public function __construct(){ $this->setDbName("iareskiimoveis"); }
	private function setDbName($nome){ $this->dbname = $nome; }	
	private function getDbName(){ return $this->dbname; }
	
	public function conectar(){	
		$server = '200.234.202.98';
                $username = 'iareskiimoveis';
                $password = 'dd09c1e36fa0e';
                mysql_connect($server, $username, $password);
                $status = mysql_error();

                if( !strcmp($status,"") == 0){             
                    return false;
                }
                else{
                    mysql_select_db('iareskiimoveis');    
                    $status = mysql_error();
                    if( !strcmp($status,"") == 0){
                        return false;
                    }
                    else{
                        return true;
                    }
                }                
	}	
        
}
?>