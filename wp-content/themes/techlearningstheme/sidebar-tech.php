<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy
 *
 * @package TechLearnings
 */

get_header(); ?>
<div class="cardsidebar" >
<?php
                       $this_category = get_category($cat);
                           //echo $this_category->cat_ID;
                       $parent_term_id =$this_category->cat_ID; // term id of parent term
                        //$termchildren = get_terms('category',array('child_of' => $parent_id));
                       $taxonomies = array(
                           'taxonomy' => 'category'
                       );

                       $args = array(
                          // 'parent'         => $parent_term_id,
                            'child_of'      => $parent_term_id
                       );

                       $terms = get_terms($taxonomies, $args);
                       if (sizeof($terms)>0)
                       {

    foreach ( $terms as $term ) {

                       /*    $term_link = sprintf( '<div class="custom-cats"><a href="%1$s" alt="%2$s">%3$s</a></div>', esc_url( get_category_link( $term->term_id ) ),
                               esc_attr( sprintf( 'View all posts in %s', 'textdomain' ), $term->name ),
                               esc_html( $term->name )); */

                       //     echo sprintf( $term_link );

                            echo '<div class="cart-alt__contents"><div class="progress-list"><ul><li class="inflow inflow-done"><a href="'.get_category_link( $term->term_id ).'" title="'.$term->name.'">'.$term->name.'</a></li></ul></div></div>';

                           }
                      // echo '</div><!-- categories div end-->';

                           }
?>


</div>