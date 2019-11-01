let path = require('path');
let fs = require('fs')
let uri = path.resolve(__dirname, '../packages-extra/icons');
fs.readdir(uri, (err, files) => {
  if (err) {
    return
  }
  let index = path.join(uri, "index.tsx");

  let template = (name) => `export { default as ${name} } from './${name}';\n`;

  let paths = files.filter(item => item !== 'index.tsx').map(item => template(item.split('\.')[0])).join("")

  fs.writeFile(index, paths, (err) => { });
})