const fs = require('fs');
const sample = require('lodash/sample');

const quotesFile = './quotes.md';
const readmeFile = './README.md';

const quotations = fs.readFileSync(quotesFile, 'utf8')
  .split('\n')
  .map(line => line.replace(/^- /, '').trim())
  .filter(line => line.length > 0);

const randomQuote = sample(quotations);

let readme = fs.readFileSync(readmeFile, 'utf8');

readme = readme.replace(
  /<!-- QUOTE_START -->([\s\S]*?)<!-- QUOTE_END -->/,
  `<!-- QUOTE_START -->\n${randomQuote}\n<!-- QUOTE_END -->`
);

fs.writeFileSync(readmeFile, readme);
console.log('✅ README updated with a new quote!');