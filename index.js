const path = require("path");
// console.log(path.sep);
// console.log(process.env.path);
// console.log(path.delimiter);
const filePath1 = '/public_html/home/index.html';
const currentFilePath = __filename
console.log(currentFilePath);
let result = path.basename(currentFilePath)
console.log(result);
const basenameWithoutExt = path.basename(currentFilePath,'.js')
console.log(basenameWithoutExt);
let dirname = path.dirname(currentFilePath)
console.log(dirname);
// combining
const pathToFile = path.format({
    dir : '/public_html/home/index.html',
    base : 'index.html'
})

console.log(pathToFile);
// checking absolute or not
console.log(path.isAbsolute(currentFilePath)); // true
// join
const pathToDir = path.join('/home','js','dist','index.js')
console.log(pathToDir); // \home\js\dist\index.js
console.log(path.parse(currentFilePath));
console.log(path.relative('/home/user/config','/home/user/js')); // ..\js
console.log(path.normalize('//home//user//js'));