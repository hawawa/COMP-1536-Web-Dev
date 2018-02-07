<?php 
    session_start(); 
    if (!isset($_SESSION['attempt'])) {
        $_SESSION['attempt'] = 0;
        $_SESSION['correct'] = 0;
    }

    // Operator
    $operator = array('+', '-');
    $index = rand(0, 1);

    // Values
    $x = rand(0,50);
    $y = rand(0,50); 

    // Equation
    $equation = $x . " " . $operator[$index] . " " . $y ; 

    if ($index == 0) { 
        $solution = $x + $y;  
    } else { 
        $solution = $x - $y; 
    }



    extract($_POST);
    // Redirect to login page when first come to index
    if(!isset($_POST["from"]) && $_SESSION["from"] != "index") {
        header("Location:login.php");
        die();  
    } 
    // Check the validation of user and password when it comes from login
    // If the user or password are wrong
    else if ($_POST["from"] == "login" ) {
        $file = fopen("files/credentials.config","r");
        $validation="false";
        while(! feof($file)){
            $content=explode(",",fgets($file));
            if($content[0]==$email && trim($content[1])==$password){
                $validation="true";
            }
        }
        fclose($file);
        if ($validation=="false"){
            header("Location:login.php?error=Invalid+login+credentials.");
            die();
        }
    }
    //Go to login page when click logout
    else if(isset($_POST['logout'])) {
        session_destroy();
        header("Location:index.php");
        die();
    }
    //Check the answer
    else if ($_POST["from"] == "index") { 
        if (!is_numeric($_POST['input'])) {
            $error = "You must enter a number for your answer";
            $_SESSION["from"]="index";
            header("Location:index.php?error=$error");
            die();
        } else {
            $_SESSION['attempt']++;
            if ($_POST["input"] == $_POST["oldsolution"]) {
                $_SESSION['correct']++;
                $result = "CORRECT";
            } else {
                if($_POST['oldindex'] == 0){
                    $result = "INCORRECT, " . $_POST['oldx'] . '%2B' . $_POST['oldy']  . " is " . $_POST['oldsolution'];
                } else {
                    $result = "INCORRECT, " . $_POST['oldx'] . $operator[$_POST['oldindex']] . $_POST['oldy']  . " is " . $_POST['oldsolution'];
                }
            }
            $_SESSION["from"]="index";
            header("Location:index.php?result=$result");
            die();
        }
    }

    
?>

<!DOCTYPE html>
<html>
<head>
    <title>Math Game</title> 
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link href="css/style.css" rel="stylesheet">
</head>
<body>
    <div class="container text-center">
        <form action="index.php" method="post" class="form-horizontal">
            
            <div class="form-group">
                <h1>MATH GAME</h1>
            </div>
            
            
            <div class="form-group">
                <div class="col-sm-offset-3 col-sm-2">
                    <p><?php echo $x ?></p>
                </div>
                <div class="col-sm-2">
                    <p><?php echo $operator[$index] ?></p>
                </div>
                <div class="col-sm-2">
                    <p><?php echo $y ?></p>
                </div>
            </div>
            
            
            
            <div class="form-group"> 
                <div class="col-sm-offset-4 col-sm-4">
                    <input type="text" name="input" placeholder="Enter a number" class="form-control" />
                </div>
            </div>
            
            <hr />
            
            <div class="form-group"> 
                <div class="col-sm-offset-4 col-sm-4">
                    <input type="submit" name="submit" class="btn button-success"/>
                </div>
            </div>
                        
            <input type="hidden" name="oldx" value="<?php echo $x; ?>" />
            <input type="hidden" name="oldy" value="<?php echo $y; ?>" />
            <input type="hidden" name="oldindex" value="<?php echo $index; ?>" />
            <input type="hidden" name="oldsolution" value="<?php echo $solution; ?>" />
            <input type="hidden" name="from" value="index" />
            
            <hr />
            
            <div class="form-group"> 
                <div class="col-sm-offset-4 col-sm-4">
                    <span><?php if(isset($_GET["error"])) { echo $_GET['error']; } ?></span>
                    <span><?php if(isset($_GET["result"])) { echo $_GET['result']; } ?></span> 
                    <p><?php echo 'SCORE: ' . $_SESSION['correct'] . ' / ' . $_SESSION['attempt']; ?></p>
                </div>
            </div>
            
            <hr />
            
            <div class="form-group"> 
                <div class="col-sm-offset-4 col-sm-4">
                    <a href="login.php"><input type ="submit" class="btn" name ="logout" value ="Logout" /></a>
                </div>
            </div>
        
            
            
        </form>
    </div>
</body>
</html>