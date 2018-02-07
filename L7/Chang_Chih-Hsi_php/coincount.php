<?php 
    extract($_POST);
    $errormsg="Please enter a number for ";
    if (empty($pennies) or ! is_numeric($pennies)){
        header("Location:index.php?error=$errormsg Pennies");
	} elseif (empty($nickels) or ! is_numeric($nickels)){
        header("Location:index.php?error=$errormsg Nickels");  
	} elseif (empty($dimes) or ! is_numeric($dimes)){
        header("Location:index.php?error=$errormsg Dimes");  
    } elseif (empty($quarters) or ! is_numeric($quarters)){
        header("Location:index.php?error=$errormsg Quarters");  
    } elseif (empty($dollar) or ! is_numeric($dollar)){
        header("Location:index.php?error=$errormsg Dollar coins");  
    } elseif (empty($twodollar) or ! is_numeric($twodollar)){
        header("Location:index.php?error=$errormsg Two dollar coins");
    }
?>





<?php include("include/header.php"); ?>



                    <h4>The following coins were counted and valued</h4>
                </div>
            </div>
          


            <br />

            
            <div class="col-xs-offset-1 col-xs-10">
                
                <div class="col-xs-offset-2 col-xs-2">
                    Pennies:
                </div>
                <div class="col-xs-2">
                    <?php echo $_POST["pennies"]; ?>
                </div>
                <div class="col-xs-2">
                    Nickels:
                </div>
                <div class="col-xs-2">
                   <?php echo $_POST["nickels"]; ?>
                </div>

                

                <div class="col-xs-offset-2 col-xs-2">
                    Dimes:
                </div>
                <div class="col-xs-2">
                   <?php echo $_POST["dimes"]; ?>
                </div>
                <div class="col-xs-2">
                    Quarters:
                </div>
                <div class="col-xs-2">
                   <?php echo $_POST["quarters"]; ?>
                </div>

                

                <div class="col-xs-offset-2 col-xs-2">
                    Dollar Coins:
                </div>
                <div class="col-xs-2">
                   <?php echo $_POST["dollar"]; ?>
                </div>
                <div class="col-xs-2">
                    2 Dollar Coins:
                </div>
                <div class="col-xs-2">
                   <?php echo $_POST["twodollar"]; ?>
                </div>

                <br />

                <div class="col-xs-offset-2 col-xs-8">
                    <h3><?php echo $_POST["name"]; ?>, you therefore have:</h3>
                </div>

                <br />

                <div class="col-xs-offset-2 col-xs-2">
                    Total Cents:
                </div>
                <div class="col-xs-2">
                   <?php 
                        $totalcents = $_POST["pennies"] * 1 + $_POST["nickels"] * 5 + $_POST["dimes"] * 10 + $_POST["quarters"] * 25 + $_POST["dollar"] * 100 + $_POST["twodollar"] * 200;
                        echo $totalcents; 
                    ?>
                </div>
                <div class="col-xs-2">
                    Total Dollars
                </div>
                <div class="col-xs-2">
                   <?php 
                        $totaldollars = ( $_POST["pennies"] * 1 + $_POST["nickels"] * 5 + $_POST["dimes"] * 10 + $_POST["quarters"] * 25 + $_POST["dollar"] * 100 + $_POST["twodollar"] * 200 ) / 100;
                        echo $totaldollars; 
                    ?>
                </div>          

                <div class="col-xs-offset-2 col-xs-8">
                    <hr />
                </div>
                
                <br />

                <div class="col-xs-offset-2 col-xs-8">
                    <a href="http://localhost:8888/index.php">
                        <button type="button" class="btn btn-success">Back to home page</button>
                    </a>
                </div>

            </div>
        </div>
                    

<?php include("include/footer.php"); ?>