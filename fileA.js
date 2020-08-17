//const exportsFromFileB = require('./fileB') // note the relative file path
//console.log(exportsFromFileB)
//console.log(exportsFromFileB.foo )
//console.log(exportsFromFileB.bar)



const exportsFromFileB = require('./fileB')
exportsFromFileB()
require('./fileB')
require('./fileB')//not a typo-actually require it twice!