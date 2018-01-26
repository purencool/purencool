* Setup development installation

The following steps will assist in setup the development environment   

Change the sync directory in settings.php to the following  
$config_directories['sync'] = '../site_configuration/sync';  

To setup a development environment uncomment the following in your local
setup  
if (file_exists($app_root . '/' . $site_path . '/settings.local.php')) {
 include $app_root . '/' . $site_path . '/settings.local.php';
}
