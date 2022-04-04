const path = require('path');
const fs = require('fs');
// entry 
const entryDir = path.resolve(__dirname, '../svgs');
// outer
const outDir = path.resolve(__dirname, '../icons');
// esm
const outDirEsm = path.resolve(__dirname, '../icons_esm');
console.log(entryDir);
console.log(outDir);
console.log(outDirEsm);

async function build(entry, outDir, outDirEsm, prefix, suffix) {
  fs.rmdirSync(outDir, { recursive: true });
  fs.rmdirSync(outDirEsm, { recursive: true });
  fs.mkdirSync(outDirEsm);
  fs.mkdirSync(outDir);

  // 读取所有 svg 文件
const files = fs.readdirSync(entryDir, 'utf-8');
const batches = files
    .filter((f) => path.extname(f) === '.svg')
    .map(async (file) => {
        // xxx 相关逻辑
      console.log(file);
    });
  
  const arr = await Promise.all(batches);
}

build()