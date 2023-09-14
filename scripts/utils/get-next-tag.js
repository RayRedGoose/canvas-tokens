const core = require('@actions/core');
const {BUMP, CURRENT_VERSION} = process.env;

async function run() {
  let tag = '';
  const [major, minor, patch] = CURRENT_VERSION?.split('.');

  if (!CURRENT_VERSION) {
    throw Error('No current version given!');
  }

  switch (BUMP) {
    case 'patch':
      tag = [major, minor, Number(patch) + 1].join('.');
    case 'minor':
      tag = [major, Number(minor) + 1, patch].join('.');
    case 'major':
      tag = [Number(major) + 1, minor, patch].join('.');
    default:
      tag = BUMP || '';
  }

  core.setOutput('tag', tag);
}

run().catch(e => {
  if (e instanceof Error) {
    core.setFailed(e.message);
  }
});
