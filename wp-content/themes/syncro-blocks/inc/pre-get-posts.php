<?php
/* Hide any post that has the hidden meta field set to true from queries on the front end.
 * Add the Gutenberg Hub Query Search Block's search query to the archive query.
*/

function sycnro_blocks_pre_get_posts( $query ) {
    if( ! defined( 'WP_CLI ') && ! is_admin() && ! is_singular() ){
        $meta_query = array(
            'relation' => 'OR',
            array(
                'key' => 'hidden',
                'value' => '0',
                'compare' => '='
            ),
            array(
                'key' => 'hidden',
                'compare' => 'NOT EXISTS'
            )
        );
        $query->set( 'meta_query', $meta_query );
    }
    //Any front-end, main query, archive page that has the Gutenberg Hub Query Search Block query param
    if( ! is_admin() && $query->is_main_query() && is_archive() && isset( $_GET[ 'qs' ] ) ){
        $searched_term = sanitize_text_field(wp_unslash($_GET['qs']));

		if ( isset( $query->query_vars['s'] ) && $query->query_vars['s'] ) {
			$searched_term = $query->query_vars['s'] . ',' . $searched_term;
		}
        //Add that searh param to the query so that any Query Loop Blocks that inherit the template's query 
        //Return the expected results.
        $query->set( 's', $searched_term );
    }
}

add_action( 'pre_get_posts', 'sycnro_blocks_pre_get_posts' );

// Remove hidden content from the results returned by the query loop block when not inheriting the query
function syncro_blocks_query_loop_block_query_vars( $query, $block, $page ){
    $query['meta_query'] = array(
        'relation' => 'OR',
        array(
            'key' => 'hidden',
            'value' => '0',
            'compare' => '='
        ),
        array(
            'key' => 'hidden',
            'compare' => 'NOT EXISTS'
        )
    );

    return $query;
}

add_filter( 'query_loop_block_query_vars', 'syncro_blocks_query_loop_block_query_vars', 10, 3 );