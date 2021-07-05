module.exports = {
  output: {
    format: 'node-module',
    projectPath: '../angular-app',
    name: 'backend',
  },
  expose: {
    source: 'dist/index.js',
    type: 'dist/index.d.ts'
  }
};
