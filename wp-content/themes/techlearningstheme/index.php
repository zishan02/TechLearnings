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
            <div class="container">

  <div class="row align-items-center">
     
<div class="col">
<div class="card" style="width: 18rem;height : auto;">
  <img class="card-img-top" src="https://techlearnings.in/wp-content/uploads/2022/08/java.png" alt="Card image cap">
  <div class="card-body">
    <h5 class="card-title">Java</h5>
  </div>
</div>
</div>
<div class="col"><a href="https://techlearnings.in/category/data-structure">
<div class="card" style="width: 18rem;height : auto;">
  <img class="card-img-top" src="https://techlearnings.in/wp-content/uploads/2022/08/dsa-cards.png" alt="Card image cap">
  <div class="card-body">
    <a href="https://techlearnings.in/category/data-structure"><h5 class="card-title">DSA</h5></a>
  </div>
</div>
</div></a>
<div class="col">
<div class="card" style="width: 18rem;height : auto;">
  <img class="card-img-top" src="https://techlearnings.in/wp-content/uploads/2022/08/icons8-algorithms-64.png" alt="Card image cap">
  <div class="card-body">
    <a href="https://techlearnings.in/category/algorithm"><h5 class="card-title">Algorithm</h5></a>
  </div>
</div>
</div>
<div class="col">
<div class="card" style="width: 18rem;height : auto;">
  <img class="card-img-top" src="https://techlearnings.in/wp-content/uploads/2022/08/icons8-hierarchy-50.png" alt="Card image cap">
  <div class="card-body">
    <a href="https://techlearnings.in/category/design_patterns"><h5 class="card-title">Design Patterns</h5></a>
  </div>
</div>
</div>
</div>
</div>
</div>
</div>
            <main id="main" class="site-main">
                <!--<div class="af-container-row">-->
            

				<?php
				if ( have_posts() ) :

					if ( is_home() && ! is_front_page() ) : ?>
                        <header>
                            <h1 class="page-title screen-reader-text"><?php single_post_title(); ?></h1>
                        </header>

					<?php
					endif;
                    $count = 1;
                    do_action( 'chromenews_archive_layout_before_loop' );
                    $set_full_first = chromenews_get_option('archive_layout_first_post_full');
                    $applied_archive = true;
                    $archive_layout = chromenews_get_option('archive_layout');


                    if($archive_layout == 'archive-layout-masonry' || $archive_layout == 'archive-layout-full' ){
                        $applied_archive = false;
                    }

                    while (have_posts()) : the_post();

                        if (($count == 1) && ($set_full_first == true) && ($applied_archive == true)) :
                        ?>

                            <article id="post-<?php the_ID(); ?>" <?php post_class('aft-first-post-full latest-posts-full col-1 float-l pad'); ?> >
                                <?php chromenews_get_block('full', 'archive'); ?>
                            </article>
                        <?php

                        else:
                            /*
                         * Include the Post-Format-specific template for the content.
                         * If you want to override this in a child theme, then include a file
                         * called content-___.php (where ___ is the Post Format name) and that will be used instead.
                         */

                            get_template_part('template-parts/content', get_post_format());
                        endif;


                        $count++;
					endwhile;

					//div wrap end
					do_action( 'chromenews_archive_layout_after_loop' );

					?> 

				<?php

				else :
					get_template_part( 'template-parts/content', 'none' );

				endif; ?>

                <!--</div>-->
            </main><!-- #main -->
            <div class="col col-ten">
                <div class="chromenews-pagination">
					<?php chromenews_numeric_pagination(); ?>
                </div>
            </div>
        </div><!-- #primary -->

		<?php
		get_sidebar();
		?>

    </section>
<?php
get_footer();
