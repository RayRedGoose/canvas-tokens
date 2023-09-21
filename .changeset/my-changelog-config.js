async function getDependencyReleaseLine() {}

async function getReleaseLine(changeset) {
  return changeset.summary.replace(/ \(/g, '(');
}

module.exports = {
  getReleaseLine,
  getDependencyReleaseLine,
};
