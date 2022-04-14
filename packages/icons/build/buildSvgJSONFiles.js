const path = require('path');
const fs = require('fs');
const svgo = require('svgo');
const camelCase = require('camelcase');
const prettier = require("prettier");
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

const prefix = 'icon'

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

      const svgFileName = path.basename(file, '.svg');
      // 定义组件名称 加上 prefix 前缀
      const componentName = `${prefix}${camelCase(svgFileName, { pascalCase: true })}`;
      // 定义输出的 js 文件名称
      const jsonFileName = `${componentName}.js`;
      // 读取文件
      const svgContent = fs.readFileSync(path.resolve(entryDir, file), 'utf-8');
      
      // 使用 svgo 把 svg 文件进行格式化统一
      const formatSVG = svgo.optimize(svgContent, option);
      // SVG 文件格式化为一个 object key-value 的形式进行值的输出
      const JSONCode = await parse(formatSVG.data).then((json) => {
        return JSON.stringify(json, null, 2);
      });
      
      // 加上 _name 名称
      JSONCode._name = svgFileName;
      // 格式化代码，写入文件
      let _JSONCode = `exports.default = ${JSON.stringify(JSONCode)}`;
      const formattedCode = prettier.format(_JSONCode, { semi: false, parser: "babel" });
      fs.writeFileSync(path.resolve(outDir, jsonFileName), formattedCode, 'utf-8');
      
      // 输出文件 和 组件名称
      return { fileName: jsonFileName, componentName };
    });
  
  const arr = await Promise.all(batches);
  // console.log(arr[0]);
  
}

build(entryDir, outDir, outDirEsm, prefix);