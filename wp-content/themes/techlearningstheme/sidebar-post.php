<?php
/**
 * Template part for displaying posts
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy
 *
 * @package TechLearnings
 */

 ?>

                       <?php
                       $this_category = get_category($cat);
                        $postslist = get_posts();
                        $id = get_the_ID();
                        //print_r($id);
                        $postCategory="";
                        $postCategory=get_the_category($id);
                        $args = array( 'category' => $postCategory[0]->term_id);
                        $myposts = get_posts( $args );
                                         $link='';

                                     foreach ($myposts as $post){
                                     $link=get_permalink();

                                       echo '<li><a href="'.$link.'" class="link-dark d-inline-flex text-decoration-none rounded">'.$post->post_title.'</a></li>';

                                     }


 ?>




