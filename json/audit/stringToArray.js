/*
 * Converts the audit representation to schema representation
 * Converts the strings to an array of stings namely
 */

import fs from 'fs';

const json = JSON.parse(fs.readFileSync('toolsAudit.json', 'utf8'));

/*
 * Trim trailing spaces and create array out of string
 */
const splitAndTrim = (prop) => {
  let arr = [];

  if(prop === '' || prop === '-') return [];

  arr = prop.split(',');
  return arr.map(s => s.trim());
};

// Loop through JSON
Object.keys(json).forEach(key => {
  const obj = json[key];
  let arr = [];

  if(obj.home_url === '-') obj.home_url = '';
  if(obj.download_url === '-') obj.download_url = '';
  if(obj.github_url === '-') obj.github_url = '';

  obj.platforms  = splitAndTrim(obj.platforms);
  obj.companies  = splitAndTrim(obj.companies);
  obj.categories = splitAndTrim(obj.categories);
});

fs.writeFile('../tools.json', JSON.stringify(json), (err) => {
  if(err) return console.log(err);
  console.log('file saved');
});