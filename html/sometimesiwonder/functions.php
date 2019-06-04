<?php

include 'connection.php';

$conn = OpenConnection();
$tbname = "meaningoflife";

// define variables and set to empty values
$answerErr  = "";
$answer = $nickname = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
	if (empty($_POST["answer"])) {
	 $answerErr = "Is life meaningless?";
	} else {
	 $answer = test_input($_POST["answer"]);
	}
	if (empty($_POST["nickname"])) {
	 $nickname = "";
	} else {
	 $nickname = test_input($_POST["nickname"]);
	}
	if($answer != "" && isset($_POST['submit'])){ // Fetching variables of the form which travels in URL
		$stmt = $conn->prepare("INSERT INTO " . $tbname . " (answer, nickname) VALUES (?, ?)");
		$stmt->bind_param("ss", $answer, $nickname);
		$stmt->execute();
		$stmt->close();
		$id = $conn->insert_id;
		$cookie_name = $tbname . "-submitted-" . $id;
		$cookie_value = $id;
		setcookie($cookie_name, $cookie_value, time() + (86400 * 30), "/"); // 86400 = 1 day
	}

	$sql = "SELECT *
			FROM " . $tbname;
	$result = $conn->query($sql);
	$row_cnt = $result->num_rows;
	for ($i = 1; $i < $row_cnt + 1; $i++) {
		$cookie_name = $tbname . "-liked-" . $i;
		if(!isset($_COOKIE[$cookie_name]) && isset($_POST['like-' . $i . '_x'], $_POST['like-' . $i . '_y'])){ // Fetching variables of the form which travels in URL
			$sql = "UPDATE " . $tbname .
					" SET likes = likes + 1
					WHERE id = $i";
			$conn->query($sql);
			$cookie_value = $i;
			setcookie($cookie_name, $cookie_value, time() + (86400), "/"); // 86400 = 1 day
		}
		$cookie_name = $tbname . "-submitted-" . $i;
		if(isset($_COOKIE[$cookie_name]) && isset($_POST['delete-' . $i])){ // Fetching variables of the form which travels in URL
			$sql = "DELETE FROM " . $tbname .
					" WHERE id = $i";
			$conn->query($sql);
			$sql = "ALTER TABLE " . $tbname . 
					" DROP COLUMN id";
			$conn->query($sql);
			$sql = "ALTER TABLE " . $tbname .
					" ADD `id` INT NOT NULL AUTO_INCREMENT PRIMARY KEY";
			$conn->query($sql);
			unset($_COOKIE[$cookie_name]);
			// empty value and expiration one hour before
			setcookie($cookie_name, '', time() - 3600);
		}
	}
	header("Location: http://chen-wan.com/sometimesiwonder",true,303);
}

function test_input($data) {
	$data = trim($data);
	$data = stripslashes($data);
	$data = htmlspecialchars($data);
	return $data;
}

CloseConnection( $conn );

?>
