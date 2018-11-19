<?php
/*
Plugin Name: AFG D5 Datetime Picker
Description: This is intended to add jQuery code to update the "end_date" custom field to be one hour after the "start_date" custom field.
Version:     0.0.1
Author:      Bryan T <bet6556@gmail.com>
License:     GPL2
License URI: https://www.gnu.org/licenses/gpl-2.0.html
*/
namespace afgd5\dpick;

defined( 'ABSPATH' ) or die( 'No direct access please!' );


if( ! function_exists( __NAMESPACE__.'\include_script' ) ){
  /**
  * Hook acf/input/admin_enqueue_scripts is where acf plugin enqueues its scripts.
  * Enqueuing with this hook fixed an error triggered by loading datetime.js where it 
  * did not need to be.  This would load the dependency acf-input, which would throw 
  * an exception when loaded on a page that it shouldn't.
  */
  add_action('acf/input/admin_enqueue_scripts', __NAMESPACE__.'\include_script', PHP_INT_MAX);
  function include_script( $hook_suffix ) {
    wp_enqueue_script('afgd5dp', plugin_dir_url(__FILE__).'datetime.js', array('acf-input','jquery'),time());
  }
}
#add_action( 'admin_enqueue_scripts',__NAMESPACE__.'\include_script');
#function include_script( $hook_suffix ) {
#  if( $hook_suffix == 'post.php' || $hook_suffix == 'post-new.php' ){ 
#    wp_enqueue_script('afgd5dp', plugin_dir_url(__FILE__).'datetime.js', array('acf-input','jquery'),time());
#  }
#}


/**
* Get site url for links
*
* @author Bryan T <bet6556@gmail.com> 
*/
if ( ! shortcode_exists('url') ) {
  add_shortcode('url',__NAMESPACE__.'\url_shortcode');
  function url_shortcode() {
    return get_bloginfo('url').'/';
  }
}

function install() {
    // Clear the permalinks
    flush_rewrite_rules();
}
register_activation_hook( __FILE__, __NAMESPACE__.'\install' );

function deactivation() {
    // Clear the permalinks
    flush_rewrite_rules();
}
register_deactivation_hook( __FILE__, __NAMESPACE__.'\deactivation' );

?>
