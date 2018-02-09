<?php
   //Reseteamos variables a 0.
   $nom = $email = $tema = $missatge = $para = $headers = $msjCorreo = NULL;

   if (isset($_POST['submit'])) {
      //Obtenemos valores input formulario
      $nom = $_POST['nom'];
      $email = $_POST['email'];
      $tema = $_POST['tema'];   
      $missatge = $_POST['missatge'];
      //$para = 'contacto.dawman@gmail.com';
      $para = 'xisca2003@hotmail.com';

      //Creamos cabecera.
      $headers = 'From' . " " . $email . "\r\n";
      $headers .= "Content-type: text/html; charset=utf-8";

      //Componemos cuerpo correo.
      $msjCorreo = "Nom: " . $nom;
      $msjCorreo .= "\r\n";
      $msjCorreo .= "Email: " . $email;
      $msjCorreo .= "\r\n";
      $msjCorreo .= "Tema: " . $tema;
      $msjCorreo .= "\r\n";
      $msjCorreo .= "Missatge: " . $missatge;
      $msjCorreo .= "\r\n";

    if (mail($para, $subject, $msjCorreo, $headers)) {
         echo "<script language='javascript'>
            alert('Missatge enviat. Moltes gracies.');
         </script>";
    } else {
         echo "<script language='javascript'>
            alert('Ha fallat');
         </script>";
    }
  }
?>