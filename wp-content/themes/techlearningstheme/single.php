<?php

/**
 * The template for displaying all single posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/#single-post
 *
 * @package ChromeNews
 */

get_header("post");

?>
    <div class="container1">
            <div class="row">
                <div class="col-5 sidebarnav">
                    <div class="flex-shrink-0 p-3 bg-white bordersidebar">
                        <p  class="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                            <svg class="bi pe-none me-2" width="30" height="24"><use xlink:href="#bootstrap"/></svg>
                            <span class="fs-5 fw-semibold">Contents</span>
                        </p>
                        <ul class="list-unstyled ps-0">
                            <li class="mb-1">

                                <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">

                                    <?php get_sidebar("post");?>

                             </ul>

                        </li>
                            </ul>
                    </div>

                </div>

                <div class="col-7 maincontent">
                           <?php
                            $social_share_icon_opt = chromenews_get_option('single_post_social_share_view');
                            $wrap_class = '';
                            if ($social_share_icon_opt == 'after-content') {
                            $wrap_class = 'social-after-content';
                            }

                            while (have_posts()) : the_post(); ?>
                            <article id="post-<?php the_ID(); ?>" <?php post_class('af-single-article'); ?>>

                                    <div class="entry-content-wrap read-single <?php echo esc_attr($wrap_class); ?>">

                                        <?php if (is_single()) : ?>
                                            <div class="entry-content-title-featured-wrap">
                                                    <?php

                                                    $single_post_title_view = chromenews_get_option('single_post_title_view');
                                                    if (($single_post_title_view == 'boxed') || ($single_post_title_view == 'title-below-image')) {
                                                    do_action('chromenews_action_single_header');
                                                    //do_action('chromenews_action_single_featured_image');
                                                    }

                                                    ?>
                                            </div>
                                        <?php endif; ?>
                                                        <?php
                                                        get_template_part('template-parts/content', get_post_type());
                                                        ?>
                                   </div>

                            </article>
                    <?php

                    endwhile; // End of the loop...
                    ?>
                    <div class="col rsidebarnav">
                        <h1></h1>
                     </div>


            </div>
    </div>

<?php
get_footer();
