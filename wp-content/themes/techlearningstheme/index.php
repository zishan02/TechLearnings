<?php
/**
 * The main template file
 *
 * This is the most generic template file in a WordPress theme
 * and one of the two required files for a theme (the other being style.css).
 * It is used to display a page when nothing more specific matches a query.
 * E.g., it puts together the home page when no home.php file exists.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package ChromeNews
 */

get_header(); ?>
  <section class="section-block-upper">

       <div id="primary" class="content-area">
        <div id="newsection">
          <?php
                         get_template_part('template-parts/content', 'cards');//get_post_format());
                         ?>
            </div>
            <main id="main" class="site-main">
                <!--<div class="af-container-row">-->
             <?php
                get_template_part('template-parts/content', 'mid');//get_post_format());
                ?>

			</main>
   <!-- </section> -->

<?php
get_footer();
?>
