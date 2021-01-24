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
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** MySQL database username */
define( 'DB_USER', 'root' );

/** MySQL database password */
define( 'DB_PASSWORD', 'root' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

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
define('AUTH_KEY',         'jahRbYtb0cfC9wXJqD1Ksmot59aUqBrX/xUwMIRSViSWJHfsHy5CBh18i3/imsy0gsMjqH6cbgfkxK25a7acMQ==');
define('SECURE_AUTH_KEY',  'NUcCQtQOM21lXoH1WUFsEevsqaDRlivMkZ/+MJfWtqX4u6wml8uZ20YP/MjR9CrV9K3HFFXg721iThAKrkiZdA==');
define('LOGGED_IN_KEY',    '8qxtuUlZPpEIihU9voHE4ZoLMrW5X0VwgPBh1+3xclRbQzL24l4LWFtIszkwLFU4QlHyglk9k6IKHRHwSpH4Bw==');
define('NONCE_KEY',        'FBXfGv/SXgqEEON46NIQtyLN/qhjPr4wN5lUaSJdY+b4IOgPfbra5OcEmpRMTU9kJUsNZClGaJRAARlJ/v5Z8g==');
define('AUTH_SALT',        'UUrME8QJRympwIcFJBCaxCyTSOwO1kaTETGGaoPbN8yPJPhn8LAe7wUihRZ8/5LRZAOMFD8/SjVOpBAP6pJVRQ==');
define('SECURE_AUTH_SALT', 'EXirqVBQB2Z9agcrLgXu7wBl35fXWPXvIDeH6xdV1ib6zuXe+KJUkpEky3IYe/NPQ5/ItLYnhnDLImRtoBs2sA==');
define('LOGGED_IN_SALT',   'BMBgpp60/rYsYlp87DqXet5X96ZZNF832IJEXihiqZckBOYKzTfxjQE/gwkPvRpmEnnqK44Ik0KXp+0kMEPAog==');
define('NONCE_SALT',       'VAKPwjX/g4oJtktvilQjSuiToYHlIdPiHx3jAIz0ngdIk5e5Ka2212PWZHaqIULJUoOP6Nk63M8igeaLYgZiRg==');

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';




/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
