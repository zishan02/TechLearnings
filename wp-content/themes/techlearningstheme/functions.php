<?php
add_action( 'wp_enqueue_scripts', 'enqueue_parent_styles' );
add_action('chromenews_action_loop_list', 'chromenews_loop_list', 10, 8);
function enqueue_parent_styles() {
   wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}
if (!function_exists('chromenews_loop_list')) :
    /**
     * Banner Slider
     *
     * @since Newsical 1.0.0
     *
     */
    function chromenews_loop_list($chromenews_post_id, $chromenews_thumbnail_size = 'thumbnail', $chromenews_count = 0, $show_cat = false, $show_meta = true, $show_excerpt = false, $big_img = false, $archive_content_view = 'archive-content-excerpt' )
    {
        $chromenews_post_display = 'list-post';
        if($big_img){
            $chromenews_post_display = 'spotlight-post';
        }

        ?>

        <div class="af-double-column list-style clearfix aft-list-show-image">
            <div class="read-single color-pad">



                    <?php if (absint($chromenews_count) > 0): ?>
                        <span class="trending-no"><?php echo esc_html($chromenews_count); ?></span>
                    <?php endif; ?>
                    <?php if ($big_img != false): ?>

                    <?php endif; ?>

                <div class="cardlist">
                    <?php if ($big_img == false): ?>
                        <?php if ($show_cat != false): ?>
                            <div class="read-categories">
                                <?php chromenews_post_categories(); ?>
                            </div>
                        <?php endif; ?>
                    <?php endif; ?>

                    <div class="read-title">
                        <h4>
                            <a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
                        </h4>
                    </div>
                    <?php if ($show_meta != false): ?>
                        <div class="post-item-metadata entry-meta">
                            <?php chromenews_post_item_meta($chromenews_post_display); ?>
                            <?php //chromenews_get_comments_views_share($chromenews_post_id); ?>
                        </div>
                    <?php endif; ?>

                    <?php    if ($show_excerpt != false):   ?>
                        <div class="read-descprition full-item-discription">
                            <div class="post-description">
                                <?php
                                if ($archive_content_view == 'archive-content-full') {
                                    the_content();
                                } else {
                                    echo wp_kses_post(chromenews_get_the_excerpt($chromenews_post_id));
                                }
                                ?>
                            </div>
                        </div>
                    <?php endif; ?>

                </div>
            </div>
        </div>

        <?php
    }
endif;
if (!function_exists('chromenews_get_the_excerpt')) :

    /**
     * Simple excerpt more.
     *
     * @since 1.0.0
     */
    function chromenews_get_the_excerpt($post_id)
    {


        if (empty($post_id))
            return;

        $chromenews_default_excerpt = get_the_excerpt($post_id);
        $chromenews_global_read_more_texts = chromenews_get_option('global_read_more_texts');

        //$chromenews_read_more = '<div class="aft-readmore-wrapper"><a href="' . get_permalink($post_id) . '" class="aft-readmore">' . $chromenews_global_read_more_texts . '</a></div><div class="aft-readmore-wrapper"><div "class="aft-readmore">test</div></div>' ;
        $chromenews_read_more = '<div class="row"><div class="col-md-auto"><a href="' . get_permalink($post_id) . '">'. $chromenews_global_read_more_texts . '</a></div><div class="col-md-auto">' .chromenews_post_categories(). '</div></div>' ;

        $chromenews_global_excerpt_length = chromenews_get_option('global_excerpt_length');
        $excerpt = explode(' ', $chromenews_default_excerpt, $chromenews_global_excerpt_length);
        if (count($excerpt) >= $chromenews_global_excerpt_length) {
            array_pop($excerpt);
            $excerpt = implode(" ", $excerpt) . '...';
        } else {
            $excerpt = implode(" ", $excerpt);
        }
        $excerpt = preg_replace('`[[^]]*]`', '', $excerpt);
        $excerpt = $excerpt . $chromenews_read_more;
        return $excerpt;
    }

endif;
if (!function_exists('chromenews_archive_layout')) :
    /**
     *
     * @param null
     *
     * @return null
     *
     * @since ChromeNews 1.0.0
     *
     */
    function techlearnings_archive_layout($cat_slug = '')
    {

        $chromenews_archive_args = techlearnings_archive_layout_class($cat_slug);
        if (!empty($chromenews_archive_args['data_mh'])) : ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class($chromenews_archive_args['add_archive_class']); ?> data-mh="<?php echo esc_attr($chromenews_archive_args['data_mh']); ?>">
                <?php chromenews_archive_layout_selection($chromenews_archive_args['archive_layout']); ?>
            </article>
        <?php else : ?>
            <article id="post-<?php the_ID(); ?>" <?php post_class($chromenews_archive_args['add_archive_class']); ?>>
                <?php chromenews_archive_layout_selection($chromenews_archive_args['archive_layout']); ?>
            </article>
        <?php endif; ?>

    <?php

    }

    add_action('techlearnings_archive_layout_class', 'techlearnings_archive_layout', 10, 1);
endif;

function techlearnings_archive_layout_class($chromenews_cat_slug)
{

    $chromenews_archive_args = [];
    $chromenews_archive_class = chromenews_get_option('archive_layout');
    $chromenews_archive_layout_list = chromenews_get_option('archive_image_alignment');
    $chromenews_archive_layout_grid = chromenews_get_option('archive_image_alignment_grid');

    if ($chromenews_archive_class == 'archive-layout-list') {
        $chromenews_archive_args['archive_layout'] = 'archive-layout-list';
        $chromenews_archive_args['add_archive_class'] = 'latest-posts-list col-1 float-l pad';
        $chromenews_archive_args['data_mh'] = '';
        $chromenews_image_align_class = $chromenews_archive_layout_list;
        $chromenews_archive_args['add_archive_class'] .= ' ' . $chromenews_archive_class . ' ' . $chromenews_image_align_class;
    } else {
        $chromenews_archive_args['archive_layout'] = 'archive-layout-grid';
        $chromenews_archive_args['add_archive_class'] = 'af-sec-post latest-posts-grid col-3 float-l pad ';
        $chromenews_archive_layout_mode = $chromenews_archive_layout_grid;
        if ($chromenews_archive_layout_mode == 'archive-image-full-alternate' || $chromenews_archive_layout_mode == 'archive-image-list-alternate') {
            $chromenews_archive_args['data_mh'] = '';
        } else {
            $chromenews_archive_args['data_mh'] = 'archive-layout-grid';
        }
        $chromenews_image_align_class = $chromenews_archive_layout_grid;
        $chromenews_archive_args['add_archive_class'] .= ' ' . $chromenews_archive_class . ' ' . $chromenews_image_align_class;
    }

    return $chromenews_archive_args;
}
?>