<?php
    session_start();
?>


<!DOCTYPE html>
<html lang="en">
<head>
    <title>Math Game</title> 
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
    <link href="css/style.css" rel="stylesheet">
</head>
    

<body>
    <h1>Please login to enjoy our math game.</h1>
    <form action="index.php" method="post" class="form-horizontal">
        
        <div class="form-group"> 
            <label class="control-label col-sm-1">E-mail:</label>
            <div class="col-sm-4">
                <input class="form-control" type="email" name="email" placeholder="Enter your e-mail" />
            </div>
        </div> 

        <div class="form-group"> 
            <label class="control-label col-sm-1">Password:</label>
            <div class="col-sm-4">
                <input class="form-control" type="password" name="password" placeholder="Enter your password" />
            </div>
        </div> 
        
        
        
        <div class="form-group">
            <div class="col-sm-offset-1 col-sm-2">
                <input type="submit" class="btn btn-primary" name="submit" />
            </div>
            <div class="col-sm-2">
                <input type="reset" class="btn btn-primary" name="reset" />
            </div>
        </div>
        
        
        <input type="hidden" name="from" value="login" />
        
        
    </form>
    
    <!--error message-->
    <h4 class="text-danger">
        <?php
            if (isset($_GET["error"])) {
                echo $_GET["error"];
            }
        ?>
    
    </h4>
    
    
    
    
    


</body>
</html>