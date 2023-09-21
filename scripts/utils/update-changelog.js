const path = require('path');
const fs = require('fs');

const {VERSION} = process.env;

const PACKAGE = 'canvas-tokens-web';
const CHANGESET_BODY =
  '### Components\n' +
  '\n' +
  '- chore: Add changesets ([#10](https://github.com/RayRedGoose/canvas-tokens/pull/10)) ([@alanbsmith](https://github.com/alanbsmith))\n' +
  '- chore: Initial release ([@alanbsmith](https://github.com/alanbsmith))\n' +
  '- fix: Update canvas-tokens-web exports ([@alanbsmith](https://github.com/alanbsmith))\n' +
  '- feat: Add automerge workflow ([#17](https://github.com/RayRedGoose/canvas-tokens/pull/17)) ([@RayRedGoose](https://github.com/RayRedGoose))\n' +
  '### Web Infrastructure\n' +
  '\n' +
  '- fix(web): Fix the common-js module path ([#20](https://github.com/RayRedGoose/canvas-tokens/pull/20)) ([@NicholasBoll](https://github.com/NicholasBoll))' +
  '\n' +
  '\n' +
  '- feat(web): Release action ([#14](https://github.com/RayRedGoose/canvas-tokens/pull/14)) ([@RayRedGoose](https://github.com/RayRedGoose))\n' +
  '  We added release actions.\n';

const header = `---
'@workday/${PACKAGE}': ${VERSION || 'patch'}
---`;

const [prefix] = PACKAGE.split('-').reverse();

let changelogBody = CHANGESET_BODY.split('##').filter(
  block => block.toLowerCase().startsWith(`# ${prefix}`) || block.startsWith('# All')
);

if (changelogBody) {
  changelogBody = '###' + changelogBody.join('###');
}

const changelogContents = `${header}\n\n${changelogBody}`;

fs.writeFileSync(
  path.join(path.resolve('./'), './.changeset/pre-changelog.md'),
  changelogContents,
  'utf8'
);
