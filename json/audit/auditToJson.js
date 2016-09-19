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

  // Change Audit sheet to schema format
  obj.name = obj.NAME.trim(); delete obj.NAME;
  obj.uploaded_date = obj.DATE_RELEASED; delete obj.DATE_RELEASED;
  obj.version = obj.CURRENT_VERSION; delete obj.CURRENT_VERSION;
  obj.developer = obj.DEV_NAME; delete obj.DEV_NAME;
  obj.home_url = obj.HOME_URL; delete obj.HOME_URL;
  obj.download_url = obj.DOWNLOAD_URL; delete obj.DOWNLOAD_URL;
  obj.github_url = obj.GITHUB_URL; delete obj.GITHUB_URL;
  obj.price = obj.PRICING; delete obj.PRICING;
  obj.platforms = obj.PLATFORM; delete obj.PLATFORM;
  obj.companies = obj.ORGANISATIONS; delete obj.ORGANISATIONS;
  obj.description = obj.REVIEW_DESC; delete obj.REVIEW_DESC;
  obj.documentation = obj.REVIEW_DOC; delete obj.REVIEW_DOC;
  obj.tutorials = obj.REVIEW_TUT; delete obj.REVIEW_TUT;
  obj.custom = obj.REVIEW_CUST; delete obj.REVIEW_CUST;
  obj.installation = obj.REVIEW_INST; delete obj.REVIEW_INST;
  obj.categories = obj.CATEGORY; delete obj.CATEGORY;
  obj.logo_url = obj.LOGO_URL; delete obj.LOGO_URL;

  // change pricing to free
  if (obj.price === '-' || obj.price === '') obj.price = 0;

  if (obj.home_url === '-') obj.home_url = '';
  if (obj.download_url === '-') obj.download_url = '';
  if (obj.github_url === '-') obj.github_url = '';

  obj.platforms  = splitAndTrim(obj.platforms);
  obj.companies  = splitAndTrim(obj.companies);
  obj.categories = splitAndTrim(obj.categories);
});

fs.writeFile('../tools.json', JSON.stringify(json), (err) => {
  if (err) return console.log(err);
  console.log('file saved');
});
