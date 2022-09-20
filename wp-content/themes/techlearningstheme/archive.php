<?php

/**
 * The template for displaying archive pages
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package TechLearnings
 */

get_header(); ?>
<div class="container">
  <div class="row">

    <div class="col-9">
 <?php

    get_template_part('template-parts/content', get_post_format());
 ?>
    </div>
  </div>
</div>

<?php
get_footer(); ?>
