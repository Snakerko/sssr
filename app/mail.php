<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';
$name = $_POST['name'];
$tel = $_POST['tel'];
$date = $_POST['date'];
$mail = new PHPMailer(true);                              // Passing `true` enables exceptions
$mail->CharSet = 'UTF-8';
$mail->setLanguage('ru', 'vendor/phpmailer/phpmailer/language/');

//Server settings
$mail->SMTPDebug = 0;                                 // Enable verbose debug output
$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';                         // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'cccpmailer@mail.ru';               // SMTP username
$mail->Password = 'admin8084';                        // SMTP password
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to

//Recipients
$mail->setFrom('cccpmailer@mail.ru', 'cccpbar.ru');   // Add a recipient
$mail->addAddress('snakerko@gmail.com', '');          // Name is optional

//Content
$mail->isHTML(true);                                  // Set email format to HTML
$mail->Subject = 'Заявка с сайта';
$mail->Body    = "<p>Имя: ".$name.", Телефон: ".$tel.", Дата: ".$date."</p>";

$mail->send();
echo 'Message has been sent';
?>