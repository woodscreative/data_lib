<?php
$files = glob('./json/*.json');
foreach ($files as $f)
{
  $path = pathinfo($f);
  //die(var_dump($path));
  $json = json_decode(file_get_contents($f),true);
  // Sort?
  asort($json);
  echo "<h2>" . $f . "</h2>";
  ob_start();
    echo "<?php".PHP_EOL;
    // Create comment header
?>
/**
 * <?=$path["filename"].PHP_EOL;?>
 * @see https://github.com/woodscreative/data_lib
 */
<?php
    echo '$data = ';
    var_export($json);
    echo ";".PHP_EOL;
    echo "?>";
  $phpMarkup = ob_get_clean();
  
  echo "<pre>".var_export($json)."</pre>";
  echo "<br><br>";
  $outPath = 'php/'.$path["filename"].'.php';
  file_put_contents($outPath, $phpMarkup);
};
?>