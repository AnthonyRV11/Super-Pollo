<?php
if(isset($_POST['submit'])) {
    // Destinatario del correo electrónico
    $to = "lchaconzuniga@ina.ac.cr";

    // Asunto del correo electrónico
    $subject = "Recomendaciones";

    // Contenido del correo electrónico
    $message = "Nombre: " . $_POST['nombre'] . "\r\n";
    $message .= "Experiencia: " . $_POST['experiencia'] . "\r\n";
    $message .= "Email: " . $_POST['email'] . "\r\n";

    // Cabeceras del correo electrónico
    $headers = "From: " . $_POST['email'] . "\r\n";
    $headers .= "Reply-To: " . $_POST['email'] . "\r\n";
    $headers .= "CC: correo_de_copia@ejemplo.com\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envía el correo electrónico
    if(mail($to, $subject, $message, $headers)) {
        echo "El pedido ha sido enviado correctamente.";
    } else {
        echo "Ha ocurrido un error al enviar el pedido.";
    }
}

?>

