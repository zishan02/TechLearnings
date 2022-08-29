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

?>