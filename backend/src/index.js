const { fetchMovies } = require("./mongodb");

/**
 *
 * @returns {Promise<string>} return a hello from your backend module
 */
const hello = () => {
  return `Hello from ScaleDynamics Platform, MongoDB, Angular and Node.js ${process.version} !`;
};

module.exports = { hello, fetchMovies };
