<!DOCTYPE html>
<html lang="en"> 
    <head> 
        <title>Toon World</title> 
        <meta charset="utf-8">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
    </head> 
    <body> 
        <dir>
            <div class = "container">
                <h2>Toon World</h2>
                            
                <table class="table table-striped text-center">
                    <tbody>
                        
                        <?php
                            
                            $list = glob("./images/*.png");

                            for ($x = 1, $y = 1; $x <= count($list); $x++, $y++ ) {
                                $content = explode(",",file_get_contents($list[$x-1] . '.txt'));

                                if ($y == 1) {
                                    echo '<tr>';
                                }

                                echo '<td>';
                                echo '<a><img src="' . $list[$x-1] .'" alt="' . file_get_contents($list[$x-1] . '.txt') . '" /></a><br />';
                                echo $content[0] . '<br />';
                                echo $content[1];
                                echo '</td>';

                                if ($y == 3 || $x == count($list)) {
                                    echo '</tr>';
                                    $y = 0;
                                }

                            }
                    
                        ?>                 
                                    
                    </tbody>
                </table>
            
            </div>
        </dir>
    </body> 
</html>