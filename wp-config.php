<?php
//Begin Really Simple Security session cookie settings
@ini_set('session.cookie_httponly', true);
@ini_set('session.cookie_secure', true);
@ini_set('session.use_only_cookies', true);
//END Really Simple Security cookie settings
//Begin Really Simple Security key
define('RSSSL_KEY', 'BWdHdjl8fOeEQDc14Q2dQYIwoqMCQeRbZS3e4tVXpC4kSh9nqRJ5lEXME9X65ZDX');
//END Really Simple Security key

/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the website, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://developer.wordpress.org/advanced-administration/wordpress/wp-config/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'ud560095_flootrone' );

/** Database username */
define( 'DB_USER', 'ud560095_flootrone' );

/** Database password */
define( 'DB_PASSWORD', 'i(s9_r75HH' );

/** Database hostname */
define( 'DB_HOST', 'ud560095.mysql.tools' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'mJU7~n|g3?wHl0Buj+jH8Sr[-jR7Aw|14kIN.]-FZ>$.VmXit={-[@mha<+ruadw' );
define( 'SECURE_AUTH_KEY',  '&.v{exa^$M<{5vSr9aGGJZ(U9.0STK`C=aMLXB8&%:.F/j6b{N]!M%VwrM:2~mmb' );
define( 'LOGGED_IN_KEY',    'o3$isBlAF9KDA~P<E,48z.Q8X([aeM@g?)0[r*?km:?#tr;O+qG:]gjQDJ0StQAo' );
define( 'NONCE_KEY',        '>*1+Bwrd!JIg`[v-G.Y4VC}YhhkQ4]7q7hIvkHuWFODh ?]t|ep0lwP!o:Z{ORAj' );
define( 'AUTH_SALT',        'MDJ #=P9&<x*1.8/RVm_O exxkk8yN8B0S3vz_g_D`G&8BA*#=6^8s$Ps%Z= X[m' );
define( 'SECURE_AUTH_SALT', 'ZJ8; Wc8oI^hG]_Bv$Zp#dA!3t@;5d)!XK{Vy,I&:|3V?Myj%4%H4y9v:)Pt&TH&' );
define( 'LOGGED_IN_SALT',   '/1&:*v^pV[gT.]bpx|r(&sBVdj3~?Eb/y3^Q+F^E DAYo%:5F5;&op-(KmCkWOBB' );
define( 'NONCE_SALT',       'Ki{>r)b9$y,Nxj43AG%2CBZp;l:%=^ico@PpsGv)h*(#}2WBB-Ll8[_hb&z[.rcq' );

/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://developer.wordpress.org/advanced-administration/debug/debug-wordpress/
 */
define( 'WP_DEBUG', false );

/* Add any custom values between this line and the "stop editing" line. */



/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
