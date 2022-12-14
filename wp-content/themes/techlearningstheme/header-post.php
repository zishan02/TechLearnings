<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package TechLearnings
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
    <meta charset="<?php bloginfo('charset'); ?>">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="profile" href="http://gmpg.org/xfn/11">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7770142216663552" crossorigin="anonymous"></script>
<!-- JavaScript Bundle with Popper -->
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
<!-- CSS only -->
<link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">
<link rel="stylesheet" href="https://techlearnings.in/wp-content/themes/techlearningstheme/custom.css">



    <?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<?php
if (function_exists('wp_body_open')) {
    wp_body_open();
} else {
    do_action('wp_body_open');
} ?>

<?php
$enable_preloader = chromenews_get_option('enable_site_preloader');
if (1 == $enable_preloader):
    ?>
    <div id="af-preloader">
        <div id="loader-wrapper">
            <div id="loader"></div>
        </div>
    </div>
<?php endif; ?>

<div id="page" class="site af-whole-wrapper">
    <a class="skip-link screen-reader-text" href="#content"><?php esc_html_e('Skip to content', 'chromenews'); ?></a>

    <?php

    do_action('chromenews_action_header_section');


    // get current page we are on. If not set we can assume we are on page 1.
    $chromenews_paged = (get_query_var('paged')) ? get_query_var('paged') : 1;

    // are we on page one?
    if (1 == $chromenews_paged):


        if (is_front_page() && is_home()) {
            // Default homepage
            do_action('chromenews_action_front_page_main_section_scope');
            do_action('chromenews_action_banner_featured_section');

        } elseif (is_front_page()) {
            // Static homepage
            do_action('chromenews_action_front_page_main_section_scope');
            do_action('chromenews_action_banner_featured_section');

        } elseif (is_home()) {
            // Blog page
            do_action('chromenews_action_front_page_main_section_scope');

        }

        ?>

    <?php endif; ?>


    <div class="aft-main-breadcrumb-wrapper container-wrapper">
        <?php
        if (is_single()) {
            $single_post_title_view = chromenews_get_option('single_post_title_view');
            if (($single_post_title_view == 'boxed') || ($single_post_title_view == 'title-below-image')) {
                do_action('chromenews_action_get_breadcrumb');
            }
        } else {
            do_action('chromenews_action_get_breadcrumb');
        }

        ?>
    </div>
    </div>