<?php

    $connetion = mysqli_connect(
        'localhost',
        'root',
        '',
        'prueba'

    );

    if($connetion)  {
        echo "Database is connect";
    }

?>