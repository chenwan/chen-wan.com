<?php

include 'connection.php';

$conn = OpenConnection();
$tbname = "meaningoflife";

// displays items in database
$sql = "SELECT id, answer, nickname, likes
		FROM " . $tbname .
		" ORDER BY likes DESC";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
		$id = $row["id"];
		$cookie_name = $tbname . "-submitted-" . $id;
        echo "<div class='answer'>" . $row["answer"];
		echo empty($row["nickname"]) ? "" : "<span class='nickname'> -- " . $row["nickname"] . "</span>";
		echo "	<form class='hidden' method='post' action='functions.php'>
					<input class='like' type='image' name='like-" . $id . "'src='images/like.ico' alt='like'>
				</form>
				<span class='likes hidden'>+" . $row["likes"] . "</span>";
		echo isset($_COOKIE[$cookie_name]) ? "<form class='hidden' method='post' action='functions.php'>
												<button class='button delete' value='x' type='submit' name='delete-" . $id . "'>x</button>
											</form>" : "";
		echo "</div>";
    }
}

CloseConnection( $conn );

?>
