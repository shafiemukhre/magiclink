
<?php
header('Location: index.html');
extract( $_POST);

if( !$user || !$pwd ) {
print("Please fill in Username and Password");
die();
}
if( isset( $submit) ) {
if( !($file = fopen("password.txt", "r")))  {
print("Unable to open file\n");
die();
}
else {
$csv = fgetcsv($file);
$userVerified = 0;
while( !feof($csv) && !$userVerified) {
$line = fgets($file, 255);
$line = chop ($line);
$field = explode("," , $line);
print($field[0]);
if($user == $field[0]) {
$userVerified = 1;
if ($pwd == $field[1]) {
print("Logged in successfully");
}
else {
print("You entered a wrong password");
}
}
}
fclose($csv);
}
}
if(!$userVerified) {
print("You are denied access to this server");
}
<script src="sendmail.js"></script>
?>
