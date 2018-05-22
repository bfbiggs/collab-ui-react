const { transform } = require('@babel/core');
const fs = require('fs');
const path = require('path');
const outputFileSync = require('output-file-sync');

function buildContent(content, filename, destination, babelOptions = {}) {
  babelOptions.filename = filename;
  const result = transform(content, babelOptions);
  outputFileSync(destination, result.code, { encoding: 'utf8' });
}

function buildFile(filename, destination, babelOptions = {}) {
  const content = fs.readFileSync(filename, { encoding: 'utf8' });
  // We only want to builld index.js files
  if (path.basename(filename) === 'index.js') {
    const outputPath = path.join(destination, path.basename(filename));
    // console.log('%s => %s', filename, outputPath);
    buildContent(content, filename, outputPath, babelOptions);
  }
}

const buildBabel = (
  folderPath,
  destination,
  babelOptions = {},
  firstFolder = true
) => {
  let stats = fs.statSync(folderPath);

  if (stats.isFile()) {
    buildFile(folderPath, destination, babelOptions);
  } else if (stats.isDirectory()) {
    let outputPath = firstFolder
      ? destination
      : path.join(destination, path.basename(folderPath));
    let files = fs
      .readdirSync(folderPath)
      .map(file => path.join(folderPath, file));
    files.forEach(filename =>
      buildBabel(filename, outputPath, babelOptions, false)
    );
  }
}

module.exports = {
  buildBabel
};