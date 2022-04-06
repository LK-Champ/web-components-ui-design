const path = require('path');
const fs = require('fs');
const svgo = require('svgo');

const { parse, stringify } = require('svgson');
// entry 
const entryDir = path.resolve(__dirname, '../svgs');
// outer
const outDir = path.resolve(__dirname, '../icons');
// esm
const outDirEsm = path.resolve(__dirname, '../icons_esm');
// svgo plugins config
const svgoPlugins = svgo.extendDefaultPlugins([
  {
    name: 'convertColors',
    params: { currentColor: /^(?!url|none)./ },
  },
  {
    name: 'cleanupListOfValues',
    active: true,
  },
  {
    name: 'removeStyleElement',
    active: true,
  },
  {
    name: 'removeViewBox',
    active: false,
  },
  {
    name: 'removeDimensions',
    active: true,
  },
]);

const option = {
  multipass: true,
  plugins: svgoPlugins
};

async function build(entry, outDir, outDirEsm, prefix, suffix) {
  // 删除文件夹
  fs.rmdirSync(outDir, { recursive: true });
  fs.rmdirSync(outDirEsm, { recursive: true });
  // 新建文件夹
  fs.mkdirSync(outDirEsm);
  fs.mkdirSync(outDir);

  // 读取所有 svg 文件
  const files = fs.readdirSync(entryDir, 'utf-8');
  // 过滤非 Svg 文件，并进行转换
  const batches = files
    .filter((f) => path.extname(f) === '.svg')
    .map(async (file) => {
      const fileData = fs.readFileSync(`${entryDir}/${file}`, 'utf-8');
      
      const result = svgo.optimize(fileData, option);
      console.log(result);
      // SVG -> SVG json
      const jsonSVG = await parse(fileData).then((json) => {
        return JSON.stringify(json, null, 2);
      });
      return jsonSVG
    });
  
  const arr = await Promise.all(batches);
  // console.log(arr[0]);
  
}

build(entryDir, outDir, outDirEsm);