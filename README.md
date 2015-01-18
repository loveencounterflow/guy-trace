# guy-trace

A nanowrapper for [trace](https://github.com/AndreasMadsen/trace) 
and [clarify](https://github.com/AndreasMadsen/clarify); it
boils down 

```js
require( 'clarify' );
require( 'trace' );
Error.stackTraceLimit = Infinity;
``` 
into 

```
require( 'guy-trace' )
```
