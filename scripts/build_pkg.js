let path = require('path');
let fs = require('fs')
let uri = path.resolve(__dirname, '../packages');
let indexFile = path.join(uri,'index.tsx');



fs.readdir(uri,(err,files)=>console.log(files))

