<?php include("include/header.php"); ?>



                <h4>Please enter your coin count:</h4>
            </div>
        </div>
    </div>    


    <br />

    
<div class="container-fluid">
    <div class="col-sm-offset-4 col-sm-4">
        <div class="text-danger">
            <h4>
            <?php
                if (isset($_GET["error"])) {
                    echo $_GET["error"];
                }
            ?>
            </h4>
        </div>
    </div>
    
    
    
    <div class="col-sm-offset-1 col-sm-10">
        <form action="coincount.php" method="post" class="form-horizontal">
            <div class="form-group"> 
                <label class="control-label col-sm-4">Your name: *</label>
                <div class="col-sm-6">
                    <input class="form-control" type="text" name="name" size="30" placeholder="Enter your name" required />
                </div>
            </div>

            <div class="form-group"> 
                <label class="control-label col-sm-4">Pennies (1 &cent;):</label>
                <div class="col-sm-6">
                    <input class="form-control" type="text" name="pennies" size="6" placeholder="Enter pennies" />
                </div>
            </div>        

            <div class="form-group"> 
                <label class="control-label col-sm-4">Nickels (5 &cent;):</label>
                <div class="col-sm-6">
                    <input class="form-control" type="text" name="nickels" size="6" placeholder="Enter nickels" />
                </div>
            </div>        

            <div class="form-group"> 
                <label class="control-label col-sm-4">Dimes (10 &cent;):</label>

                <div class="col-sm-6">
                    <input class="form-control" type="text" name="dimes" size="6" placeholder="Enter dimes" />
                </div>
            </div>   

            <div class="form-group"> 
                <label class="control-label col-sm-4">Quarters (25 &cent;):</label>
                <div class="col-sm-6">
                    <input class="form-control" type="text" name="quarters" size="6" placeholder="Enter quarters" />
                </div>
            </div>    

            <div class="form-group"> 
                <label class="control-label col-sm-4">1 Dollar Coins:</label>
                <div class="col-sm-6">
                    <input class="form-control" type="text" name="dollar" size="6" placeholder="Enter dollar coins" />
                </div>
            </div>        

            <div class="form-group"> 
                <label class="control-label col-sm-4">2 Dollar Coins:</label>
                <div class="col-sm-6">
                    <input class="form-control" type="text" name="twodollar" size="6" placeholder="Enter two dollar coins" />
                </div>
            </div>        

            <div class="form-group">

                <div class="col-sm-offset-4 col-sm-3">
                    <input type="submit" class="btn btn-primary" name="submit" value="Calculate Coins" />
                </div>
                <div class="col-sm-3">
                    <input type="reset" class="btn btn-primary" name="reset" value="Clear form" />
                </div>
            </div> 



        </form>
    </div>

</div>


<?php include("include/footer.php"); ?>
