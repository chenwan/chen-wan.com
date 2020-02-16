<!DOCTYPE html>

<!--[if lt IE 7 ]> <html class="ie ie6 ie-lt10 ie-lt9 ie-lt8 ie-lt7 no-js" lang="en"> <![endif]-->
<!--[if IE 7 ]>    <html class="ie ie7 ie-lt10 ie-lt9 ie-lt8 no-js" lang="en"> <![endif]-->
<!--[if IE 8 ]>    <html class="ie ie8 ie-lt10 ie-lt9 no-js" lang="en"> <![endif]-->
<!--[if IE 9 ]>    <html class="ie ie9 ie-lt10 no-js" lang="en"> <![endif]-->
<!--[if gt IE 9]><!--><html class="no-js" lang="en"><!--<![endif]-->
<!-- the "no-js" class is for Modernizr. --> 

<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	
	<title>Sometimes I Wonder</title>
	<meta name="author" content="" />
	<meta name="description" content="" />	
	<meta name="Copyright" content="Wan Chen" />
	<meta name="viewport" content="width=device-width, initial-scale=1" />
	
	<link rel="stylesheet" href="style/reset.css" />
	<link rel="stylesheet" href="style/style.css" />
	<link rel='stylesheet' type='text/css' href='http://fonts.googleapis.com/css?family=Indie+Flower|Rock+Salt' />
	<link rel="shortcut icon" type="image/png" href="../images/favicon.png"/>
</head>

<body>
	<div class="wrapper">
		<header>
			<p id="question">What is the Meaning of Life?</p>
			<span class="button" id="button-add">+</span>
			<div id="form-wrapper" class="hidden">
				<form id="form-add" method="post" action="functions.php"> 
					Answer: <textarea name="answer" rows="5" cols="40" maxlength="256"></textarea>
					<span class="error">* <?php echo $answerErr;?></span>
					<br>
					Display Name: <input type="text" name="nickname">
					<br>
					<input class="button" id="button-submit" type="submit" name="submit" value="&#10003;"> 
					<input class="button" id="button-close" value="x">
				</form>
			</div>
		</header>
		<div id="answers-wrapper">
			<?php require 'display.php'; ?>
		</div>
		<footer>
			<p><small>&copy; Copyright <a href="http://chen-wan.com">Wan Chen</a> <?php echo date("Y")?>. All Rights Reserved.</small></p>
		</footer>
	</div>
	
	<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js"></script>
	<script src="script/script.js"></script>
</body>
</html>