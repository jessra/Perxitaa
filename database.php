<?php

  $con = new mysqli('localhost','root','');

  if ($con->connect_error) {
    die('Fallo de conexión'.$con->connect_error);
  }

  $sql = "CREATE DATABASE IF NOT EXISTS suscripcionesPer";
  if ($con->query($sql) === TRUE) {
    $sql = "CREATE TABLE IF NOT EXISTS `suscripcionesPer`.`suscripciones` ( `id` INT NOT NULL AUTO_INCREMENT , ".
    "`correo` VARCHAR(50) NOT NULL , `fechaSus` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , ".
    "PRIMARY KEY (`id`), UNIQUE (`correo`)) ENGINE = InnoDB";
    if ($con->query($sql) != TRUE) {
      echo "Ha ocurrido un problema creando la tabla".$con->error;
    }
  } else {
    echo "Ha ocurrido un problema al crear la base de datos".$con->error;
  }

?> 