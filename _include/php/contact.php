<?php
/*
* Contact Form Class
*/


/*header('Cache-Control: no-cache, must-revalidate');
header('Expires: Mon, 26 Jul 1997 05:00:00 GMT');
header('Content-type: application/json');
*/
$admin_email = 'maison.sakamoto@gmail.com'; // Your Email
$message_min_length = 5; // Min Message Length

include_once ("Class.PhpMailer.php");

class Contact_Form{
	function __construct($details, $email_admin, $message_min_length){
		$cod = stripslashes(@$details['contact_codigo']);
                $mes = stripslashes($details['message']);
		$this->name = stripslashes($details['name']);
		$this->email = trim($details['email']);
		$this->subject = 'Email do site Iareski'; // Subject 
		$this->message = $cod . ' ' . $mes;
	
		$this->email_admin = $email_admin;
		$this->message_min_length = $message_min_length;
		
		$this->response_status = 1;
		$this->response_html = '';
                $this->retorno = '';
	}


	private function validateEmail(){
		$regex = '/^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i';
	
		if($this->email == '') { 
			return false;
		} else {
			$string = preg_replace($regex, '', $this->email);
		}
	
		return empty($string) ? true : false;
	}


	private function validateFields(){
		// Check name
		if(!$this->name)
		{
			$this->response_html .= '<p>Por favor preencha seu nome</p>';
			$this->response_status = 0;
		}

		// Check email
		if(!$this->email)
		{
			$this->response_html .= '<p>Por favor preencha seu e-mail</p>';
			$this->response_status = 0;
		}
		
		// Check valid email
		if($this->email && !$this->validateEmail())
		{
			$this->response_html .= '<p>Favor digitar um e-mail valido</p>';
			$this->response_status = 0;
		}
		
		// Check message length
		if(!$this->message || strlen($this->message) < $this->message_min_length)
		{
			$this->response_html .= '<p>Sua mensagem deve conter no minimo '.$this->message_min_length.' characteres</p>';
			$this->response_status = 0;
		}
	}


        private function enviarEmail(){
            $mail = new PHPMailer();
            $mail->IsSMTP(); // Define que a mensagem será SMTP
            $mail->Mailer = "smtp";
            $mail->Host = "ssl://smtp.googlemail.com";
            $mail->Port = 465;        
            //$mail->Host = "smtp.gmail.com";
            //$mail->Port = 465;
            //$mail->Port = 25;
            $mail->SMTPAuth = true; // turn on SMTP authentication
            $mail->Username = "maison.sakamoto@gmail.com"; // SMTP username - Seu e-mail
            $mail->Password = "!rainha!123"; // SMTP password        
            $mail->From = $this->email; // Seu e-mail
            $mail->FromName = $this->name; // Seu nome
            
            $mail->AddAddress('maison.sakamoto@gmail.com','maison.sakamoto@gmail.com'); // DESTINATARIO
            //$mail->AddBCC('maison.sakamoto@gmail.com','Maison Sakamoto'); // Cópia Oculta
            $mail->IsHTML(true); // Define que o e-mail será enviado como HTML
            $mail->Subject = $this->subject; // Assunto da mensagem
            $mail->Body = $this->message;
            
            // Envia o e-mail
            $enviado = $mail->Send();

            // Limpa os destinatários e os anexos
            $mail->ClearAllRecipients();
            $mail->ClearAttachments();

            // Exibe uma mensagem de resultado
            if ($enviado) {
                $this->response_status = 1;
                $this->response_html = '<p>Enviada com sucesso, Obrigado!</p>';                
            }
    }


        private function sendEmail(){                
		$mail = mail($this->email_admin, $this->subject, $this->message,
                        "From: ".$this->name." <".$this->email.">\r\n"
			."Reply-To: ".$this->email."\r\n"
		."X-Mailer: PHP/" . phpversion());
	
		if($mail)
		{
			$this->response_status = 1;
			$this->response_html = '<p>Enviada com sucesso, Obrigado!</p>';                        
		}
	}


	function sendRequest(){
		$this->validateFields();
		if($this->response_status)
		{
			//$this->sendEmail();
                        $this->enviarEmail();
		}

		$response = array();
		$response['status'] = $this->response_status;	
		$response['html'] = $this->response_html;		
		echo json_encode($response);
	}
}


$contact_form = new Contact_Form($_POST, $admin_email, $message_min_length);
$contact_form->sendRequest();

?>