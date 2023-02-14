<?php

  include('database.php');

  if (isset($_POST['correo'])) {
    $correo = $_POST['correo'];

    $sql = "INSERT INTO `suscripcionesPer`.`suscripciones` (`correo`,`fechaSus`) VALUES ('$correo',NOW())";

    $r = mysqli_query($con, $sql);
    if ($r) {
      echo 'Suscripción registrada exitosamente';
    } else {  
      echo 'No se ha podido registrar la suscripción, ocurrió un error.'.$con->error;
    }
  }

?>