<?php

function OpenConnection()
{
    $servername = "localhost";
    $username = "root";
    $password = "bucolic89";
    $dbname = "wonderlust";

    // Create connection
    $conn = new mysqli( $servername, $username, $password, $dbname );
    // Check connection
    if( $conn->connect_error )
    {
	    die( "Connection failed: " . $conn->connect_error );
    }

    return $conn;
}

function CloseConnection( $conn )
{
    $conn->close();
}

?>