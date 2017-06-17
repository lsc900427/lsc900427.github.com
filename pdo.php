<?php
$dbhost = "doww.net";
$dbuser = "mjcorp";
$dbpass = "mjcorp1!";
$dbname = "mjcorp";

//$bar = isset($_POST['bar']) ? $_POST['bar'] : null;

//$ppk = isset($_POST['bar']);


if (isset($_POST['name'])) {

	$name = $_POST['name'];
	$email = $_POST['email'];
	$subject = $_POST['subject'];
	$message = $_POST['message'];

	$dbconn = "mysql:host=$dbhost;dbname=$dbname;charset=utf8mb4";
	$db = new PDO($dbconn, $dbuser, $dbpass);

    //$db = new PDO('mysql:host=doww.net;dbname=mjcorp;charset=utf8mb4', 'mjcorp', 'mjcorp1!');

    //$db->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);


	/*
    $name = $_POST["name"];
    $email = $_POST["email"];
    $subject = $_POST["subject"];
    $message = $_POST["message"];
*/

    #$result = $db->exec("INSERT INTO mjcorp (name, email, subject, message) \
    #VALUES ($name, $email, $subject, $message)");

    $sql = "INSERT INTO makenjoy (name, email, subject, message) VALUES ('$name', '$email', '$subject', '$message')";

	//$sql = "INSERT INTO makenjoy (name, email, subject, message) VALUES ('asd', 'asd', '777', 'asdsad')";

    $db->exec($sql);

    //header("Location: https://makenjoy.net");


	print($name);
	print($email);
	print($subject);
	print($message);

    print("Insert Success !!");


    exit();

} else {
	print("Fields Value is NOT Enough");
}





/*
	$arrayData = $_POST['arrayData'];  // array

	$objData = $_POST['objData'];  // object String

	$objData = json_decode($objData);  // json형태의 string을 object로 변환  // stdClass(object로 형변환 시 생성)


	foreach ($objData as $key => $value) {

		// $value 데이터 확인


	}
*/



/*
header("Content-Type:application/json");

// 데이터베이스에서 데이터를 가져옴
$link = mysqli_connect($host, $user, $password, $dbname);
$limit = 10;
$offset = ($_POST['page'] - 1) * $limit;
$query = 'SELECT * FROM `temp` ORDER BY `uid` DESC LIMIT '.$offset.', '.$limit;
if ($result = mysqli_query($link, $query, MYSQLI_USE_RESULT)) {
    $o = array();
    while ($row = mysqli_fetch_object($result)) {
        $t = new stdClass();
        $t->uid = $row->uid;
        $t->name = $row->name;
        $t->desc = $row->desc;
        $o[] = $t;
        unset($t);
    }
} else {
    $o = array( 0 => 'empty');
}

echo json_encode($o);


*/
