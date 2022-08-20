<?php

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'u334469178_GtkOV' );

/** MySQL database username */
define( 'DB_USER', 'u334469178_s5Viw' );

/** MySQL database password */
define( 'DB_PASSWORD', 'Admin@2023' );

/** MySQL hostname */
//define( 'DB_HOST', 'mysql' );
define( 'DB_HOST', 'mysql' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '_D17=My2QU;9~;W=CO }vN%E{3.%cm]s~FC]SS>VZ3nMI;n|*+Sl9b%B M*4RIE*' );
define( 'SECURE_AUTH_KEY',   'bL!oi+~bEDTQugZll c}$,jM:`o~zTW(SA|0owJs#@V/},9U?e[Qv=7J7tHBTi]-' );
define( 'LOGGED_IN_KEY',     '$m$L9j!0Qni+6P-ph CW!z/tEeoWwrimxX08vJPCjE$hy.YH@gu+s?e#;XW8Sfpr' );
define( 'NONCE_KEY',         '>U62?:ry-2QvQX)Ik&{cY~5mHgM.brl>rOWGjaY^5`E(l.9PWbjbano/4r{e)o_}' );
define( 'AUTH_SALT',         'FCKCVL`@ -GSn.@Z]c  ]mf}cURr%bXs5<0~T*%8.T4/eYVt@FSJ+tE1 ed$ht8G' );
define( 'SECURE_AUTH_SALT',  'S((1PRY;blF?;C9R|1Md7vy|t>j_,36h8[?x4Ta;qGXg?14s3EFw-k(0Ds_wA:=Y' );
define( 'LOGGED_IN_SALT',    'B&y)T.c-Jm2BhqCcf3lYiYVHS?0*>-9bi6grvXVkuZ$s{O<xH^/%5c(mP5&[xx]7' );
define( 'NONCE_SALT',        'pNG^cC[4PFLT)m1~duwX[3@`X]iSbo]0Dk8Sxh{^b+DAnY%Tmv]<L26!XKy<dYkj' );
define( 'WP_CACHE_KEY_SALT', 'dT]E,#QC-f7SdE$Giz55(l*d(O6+|AqxC~BnQMM-BB DqJXMjgY{.vIbs6B;]is5' );

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




define( 'WP_AUTO_UPDATE_CORE', true );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
