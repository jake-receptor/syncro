<?php
function site_scripts()
{
  global $wp_styles; // Call global $wp_styles variable to add conditional wrapper around ie stylesheet the WordPress way

  // Adding scripts file in the footer
  wp_enqueue_script('site-js', get_template_directory_uri() . '/assets/scripts/scripts.js', array('jquery'), filemtime(get_template_directory() . '/assets/scripts/js'), true);

  // Register main stylesheet
  wp_enqueue_style('site-css', get_template_directory_uri() . '/assets/styles/style_0803.css', array(), filemtime(get_template_directory() . '/assets/styles/scss'), 'all');

  // Comment reply script for threaded comments
  if (is_singular() and comments_open() and (get_option('thread_comments') == 1)) {
    wp_enqueue_script('comment-reply');
  }
}
add_action('wp_enqueue_scripts', 'site_scripts', 999);

// Adds your styles to the WordPress editor
add_action('init', 'add_editor_styles');
function add_editor_styles()
{
  add_editor_style(get_template_directory_uri() . '/assets/styles/style_0803.css');
}
