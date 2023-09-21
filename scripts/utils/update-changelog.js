const path = require('path');
const fs = require('fs');

const {PACKAGE, CHANGESET_BODY = '', VERSION} = process.env;

const header = `---
'@workday/${PACKAGE}': ${VERSION || 'patch'}
---`;

const [prefix] = PACKAGE.split('-').reverse();

let changelogBody = CHANGESET_BODY.split('##')
  .filter(block => block.toLowerCase().startsWith(`# ${prefix}`) || block.startsWith('# All'))
  .map(b => b.replace(/\)\)\n/g, '))\n\n'));

if (changelogBody) {
  changelogBody = '###' + changelogBody.join('###');
}

const changelogContents = `${header}\n\n${changelogBody}`;

fs.writeFileSync(
  path.join(path.resolve('./'), './.changeset/pre-changelog.md'),
  changelogContents,
  'utf8'
);
