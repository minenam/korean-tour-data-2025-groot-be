module.exports = {
  '*.{js,ts,tsx}': [
    'eslint --fix',
    'prettier --write',
    'jest --bail --findRelatedTests --passWithNoTests',
  ],
  '*.{js,ts,tsx,json,md}': ['prettier --write'],
  'package.json': ['prettier --write'],
  '*.{yml,yaml}': ['prettier --write'],
};
