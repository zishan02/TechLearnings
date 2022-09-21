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
 * @package TechLearningsThemes
 */

get_header(); ?>
<html>
<div id="mainbar">
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
                      // print_r($terms);
                       if (sizeof($terms)>0)
                       {
                       /*
                       echo ' <div class="col"><a href=""><div class="card" style="width: 18rem;height : auto;">
                                                 <img class="card-img-top" src="https://techlearnings.in/wp-content/uploads/2022/08/java_full.png" alt="Card image cap">
                                                 <div class="card-body">  '; */
                       // echo '<h5 class="card-title">' .get_cat_name( $parent_term_id ) .'</h5>';



                       foreach ( $terms as $term ) {
                          /*    $term_link = sprintf( '<div class="custom-cats"><a href="%1$s" alt="%2$s">%3$s</a></div>', esc_url( get_category_link( $term->term_id ) ),
                                                      esc_attr( sprintf( 'View all posts in %s', 'textdomain' ), $term->name ),
                                                      esc_html( $term->name )); */


            //     echo sprintf( $term_link );

if($term->parent == $parent_term_id){
 ?> <div class="cardmainbar"><ul>
 <?php
                            echo '<div class="cardhead"><li class="inflow inflow-done"><a title="'.$term->name.'"><span class="icon-wrap"><svg class="programiz-icon progress-list__icon"></span>'.$term->name.'</a></li></div>';


$args = array('child_of' => $term->term_id);

$categories = get_categories( $args );
?>
<div class="cart-alt__contents"><div class="progress-list">
<?php
foreach($categories as $category) {
 $args = array( 'category' => get_cat_ID($category->name), 'post_type' =>  'post' );
    $postslist = get_posts($args);
    $link='';
    $name='';
foreach ($postslist as $post){
$link=get_permalink();
$name=get_the_title($post);
}

   echo '<li class="sublist"><a href="'.$link.'"title="' . sprintf( __( "View all posts in %s" ), $category->name ) . '" ' . '><span class="icon-wrap"><svg class="programiz-icon progress-list__icon"><img src="https://techlearnings.in/wp-content/uploads/2022/09/check-circle.svg"></use></img></span>' .$name.'</a> </li> ';


      }

?></div></div></ul>
</div><?php
 }                       }
                      // echo '</div><!-- categories div end-->';

                           }

                       ?>

</div>
</html>
