module.exports = {
  output: {
    format: "node-module",
    projectPath: "../angular-app",
    name: "backend",
  },
  expose: {
    source: "src/index.js",
    type: "dist/index.d.ts",
  },
};
