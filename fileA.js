const exportsFromFileB = require('./fileB') // note the relative file path
console.log(exportsFromFileB)
//console.log(exportsFromFileB.foo )
//console.log(exportsFromFileB.bar)



const exportsFromFileB = require('./fileB')
exportsFromFileB()
require('./fileB')
require('./fileB')//not a typo-actually require it twice!

const exportsFromSnippet1 = require('./snippet1')
console.log(exportsFromSnippet1)

exportsFromSnippet1()
require('./snippet1')
require('./snippet1')//not a typo-actually require it twice!

const exportsFromSnippet2 = require('./snippet2')
console.log(exportsFromSnippet2)

exportsFromSnippet2()
require('./snippet2')
require('./snippet2')//not a typo-actually require it twice!

const exportsFromSnippet3 = require('./snippet3')
console.log(exportsFromSnippet3)

exportsFromSnippet3()
require('./snippet3')
require('./snippet3')//not a typo-actually require it twice!