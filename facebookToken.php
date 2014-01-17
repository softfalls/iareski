<?php
// biblioteca do facebook
require '_include/php/facebook.php';
 
// ATENCAO, configurar os parametros abaixo
$APP_ID = "581643485216695"; // id da app
$SECRET = "b5fefcb2a90553b358ff9ec99abf5ba9"; // secret da app
$PERMS = "publish_stream,manage_pages";
 
// objeto do facebook
$facebook = new Facebook(array(
  'appId'  => $APP_ID,
  'secret' => $SECRET,
));
 
// monta URL atual
$my_url = "http://" . $_SERVER['HTTP_HOST'] . $_SERVER['PHP_SELF'];
//$my_url = "http://www.iareskiimoveis.com.br";
 
// obtem CODE da autenticacao OAUTH
$code = $_REQUEST['code'];
if(empty($code)) {
        $dialog_url = "https://www.facebook.com/dialog/oauth?client_id="
               . $APP_ID . "&redirect_uri=" . urlencode($my_url)
               . "&scope=$PERMS";
 
        header("Location: $dialog_url");
        exit;
}
 
// com o CODE vamos gerar a URL para obter o access token do usuario
$token_url = "https://graph.facebook.com/oauth/access_token?"
       . "client_id=" . $APP_ID . "&redirect_uri=" . urlencode($my_url)
       . "&client_secret=" . $SECRET . "&code=" . $code;
 
$response = file_get_contents($token_url);
$params = null;
parse_str($response, $params);
 
// printando o access token e quando ele ira expirar
echo "Access Token: ";
echo $params['access_token'];
echo "<br />";
if (!empty($params["expires"])) {
        echo "Ir&aacute; expirar em: " . date("d/m/Y H:i:s", time() + $params["expires"]);
}
?>