<?php

$dbconn = pg_connect("host=postgres.it.usyd.edu.au port=5432 dbname=y15s1g16 user=y15s1g16 password=CKHcak6j");

$str = $_SERVER['QUERY_STRING'];
parse_str($str);

$result = pg_query_params($dbconn, 'SELECT * FROM buzzfood WHERE username = $1 and passw = $2', array("$username", "$pass"));
?>