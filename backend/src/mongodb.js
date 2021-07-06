const { MongoClient } = require("mongodb");

/**
 * A movie
 * @typedef {Object} Movie
 * @property {string} title - Title of the movie
 * @property {string} year - Year of release of the movie
 * @property {string} plot - Plot of the movie
 * @property {string} poster - Link to the poster of the movie
 */

// connection URI
const URI = "mongodb+srv://test:test@movies-scqxj.gcp.mongodb.net/";

// create & connect a new MongoDB client
const connection = MongoClient(URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).connect();

/**
 *
 * @param {string} search the name of the movies you seek
 * @returns {Promise<Movie[]>} return an array of movies
 */
const fetchMovies = async (search) => {
  // await database connection
  const client = await connection.catch((error) => {
    throw new Error(`Database connection failed (${error.message})`);
  });
  // request database
  return client
    .db("sample_mflix")
    .collection("movies")
    .find({ poster: { $exists: true }, title: { $regex: search, $options: "i" } })
    .project({ _id: 0, title: 1, year: 1, plot: 1, poster: 1 })
    .sort({ year: -1 })
    .limit(50)
    .toArray();
};
module.exports = { fetchMovies };
