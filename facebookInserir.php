<?php
// biblioteca do facebook
require '_include/php/facebook.php';
 
// ATENCAO, configurar os parametros abaixo
$APP_ID = "581643485216695"; // id da app
$SECRET = "b5fefcb2a90553b358ff9ec99abf5ba9"; // secret da app
$FANPAGE_ID = "102306513206682"; // id da fanpage que vai publicar
$IMAGEM_UPLOAD = "por_do_sol.jpg"; // local do arquivo de imagem do upload
$IMAGEM_UPLOAD2 = "roupeiro_malva.jpg"; // local do arquivo de imagem do upload
//$ACCESS_TOKEN = "CAAIRAG1Sf7cBACniZBOfnJQTvhZAjX13i52gxtAiNWVPQsOhLhcITl0kxDnApwLiQyZAQTlVaIrpT7dNGZBtWZAZAbpMhQ6dZCKatETXmAdCNxJDizRKPZAa1ZC5VnZCUu5pX6Kka6B8eYG16IkAilKnaqcnyTvNtFXcVMGCEZAiGbIFb4rzbCZB67oP"; // token obtido pelo gera-token.php
                   
// objeto do facebook
$facebook = new Facebook(array(
  'appId'  => $APP_ID,
  'secret' => $SECRET,
));
 
// obtendo o access token da fanpage a partir do access token do usuario administrador
//$graph_url = "https://graph.facebook.com/me/accounts?access_token=" . $ACCESS_TOKEN;

//temporariamente comentado
//$accounts = json_decode(file_get_contents($graph_url));

// temporariamente comentado 
/*$FANPAGE_ACCESS_TOKEN = null;
foreach($accounts->data as $result) {
        if($result->id == $FANPAGE_ID) {
                $FANPAGE_ACCESS_TOKEN = $result->access_token;
        }
}*/
//PASSANDO NA MAO
$FANPAGE_ACCESS_TOKEN = "CAAIRAG1Sf7cBAGwnB0C170mqIEHJ75UtZC4ZAfvI6HEb71IXcaDZAYOrlzGKBDaQShePm8FTM04PxmqWGdJBpcBpgcqe59SMuOimdX1JhdZBN6oN0mRXOPB10INz43RNFOb0a03ZAGIHSpRAcImtOMdAG6VfPXkYbV9dYDvmKipZCgDozQv5wT";
// encontrou o access token da fanpage
if($FANPAGE_ACCESS_TOKEN) {
        // determina que sera realizado upload de arquivos
        $facebook->setFileUploadSupport(true);
 
        /*try {
                // parametros da postagem
                $post_data = array(
                        "message" => "teste 03 - post duas fotos",
                        "image" => '@' . realpath($IMAGEM_UPLOAD),                        
                        'access_token' => $FANPAGE_ACCESS_TOKEN
                );
 
                // postando a imagem na fanpage
                $data['photo'] = $facebook->api("/$FANPAGE_ID/photos", 'post', $post_data);
                echo "publicado com sucesso";
 
        } catch (FacebookApiException $e) {
                var_dump($e);
                $user = null;
        }*/
        
        try{     
            //Create an album
            $post_data = array(
                    'message'=> 'teste - Mensagem do Album',
                    'name'=> 'teste - Nome do Album',
                    'access_token' => $FANPAGE_ACCESS_TOKEN
            );
            $create_album = $facebook->api("/me/albums", 'post', $post_data);

            //Get album ID of the album you've just created
            $album_uid = $create_album['id'];

            //Upload a photo to album of ID...
            $photo_details = array( 
                'message'=> 'Photo message1', 
                'image'=> '@' . realpath($IMAGEM_UPLOAD),
                'access_token' => $FANPAGE_ACCESS_TOKEN
            );                   
            $facebook->api('/'.$album_uid.'/photos', 'post', $photo_details);
            
            //Upload a photo to album of ID...
            $photo_details = array( 
                'message'=> 'Photo message2', 
                'image'=> '@' . realpath($IMAGEM_UPLOAD2),
                'access_token' => $FANPAGE_ACCESS_TOKEN
            );                   
            $facebook->api('/'.$album_uid.'/photos', 'post', $photo_details);

          
            echo "publicado com sucesso";
        }catch (FacebookApiException $e) {
            echo $e;
                /*var_dump($e);
                $user = null;*/
        }
}
?>