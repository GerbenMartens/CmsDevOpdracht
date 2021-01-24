<?php

add_action( 'wp_enqueue_scripts', 'tt_child_enqueue_parent_styles' );

function tt_child_enqueue_parent_styles() {

wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );

}

add_action('init', function() {
    register_post_type('bonsai', [
    'public' => true,
    'labels' => [
    'name' => 'BonsaiTrees',
    'singular_name' => 'BonsaiTree',
    'add_new_item' => 'Add New Bonsai Tree',
    'edit_item' => 'Edit Bonsai Tree',
    'new_item' => 'New Bonsai Tree',
    'view_item' => 'View Bonsai Tree',
    'view_items' => 'View Bonsai Tree',
    'search_items' => 'Search Bonsai Tree'
    ],
    'show_in_graphql' => true,
    'graphql_single_name' => 'BonsaiTree',
    'graphql_plural_name' => 'BonsaiTrees',
    ]);
});


add_action('init', function() {
    register_taxonomy( 'style', 'bonsai', [    
    'public' => true,    
    'labels' => [    
    'name' => _x( 'Style', 'taxonomy general name' ),    
    'singular_name' => _x( 'Style', 'taxonomy singular name' ),    
    'search_items' => __( 'Search Styles' ),    
    'popular_items' => __( 'Popular Styles' ),    
    'all_items' => __( 'All Styles' ),    
    'parent_item' => null,
    'parent_item_colon' => null,    
    'edit_item' => __( 'Edit Style' ),    
    'update_item' => __( 'Update Style' ),    
    'add_new_item' => __( 'Add New Style' ),    
    'new_item_name' => __( 'New Style Name' ),    
    'separate_items_with_commas' => __( 'Separate styles with commas' ),    
    'add_or_remove_items' => __( 'Add or remove styles' ),
    'choose_from_most_used' => __( 'Choose from the most used styles' ),    
    'menu_name' => __( 'Styles' ),    
    ],    
    'show_in_graphql' => true,    
    'show_admin_column' => true,
    'graphql_single_name' => 'style',    
    'graphql_plural_name' => 'styles',    
    ]);    
});
?>