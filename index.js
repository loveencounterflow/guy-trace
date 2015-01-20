require( 'clarify' );
require( 'trace' );
module.exports.limit = function ( limit ) { Error.stackTraceLimit = limit; };
Error.stackTraceLimit = Infinity;