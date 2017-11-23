<?php
/**
 * Parse JSON inputs (if required)
 */
function parseData($filename, $json)
{
  switch ($filename)
  {
    case 'days'; case 'months';
      $json = array_flip($json);
    break;
    default;
      ksort($json);
    break;
    case 'countries';
      $json = array_flip($json);
    break;
    case 'languages';
      $json = array_change_key_case($json, CASE_UPPER);
    break;
  };
  return $json;  
};
/**
 * Convert JSON to PHP arrays and save output
 */
function parseJson2PHP()
{
  $files = glob('./json/*.json');
  foreach ($files as $f)
  {
    $path = pathinfo($f);
    //die(var_dump($path));
    $json = json_decode(file_get_contents($f),true);
    // Sort/process uncomment if required
    //$json = parseData($path["filename"], $json);
    $jsonMarkup = json_encode($json, JSON_PRETTY_PRINT);
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
    // Print output
    echo "<pre>".var_export($json)."</pre>";
    echo "<br><br>";
    // Save PHP arrays
    $outJsonPath = $f;
    $outPhpPath = 'php/'.$path["filename"].'.php';
    file_put_contents($f, $jsonMarkup);
    file_put_contents($outPhpPath, $phpMarkup);
  };  
};
parseJson2PHP();
?>