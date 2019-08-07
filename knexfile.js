module.exports = {
  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/posts.db3', // relative to the project root
    },
    useNullAsDefault: true,
    migrations: {
      directory: './data/migrations',
    },
    seeds: {
      directory: './data/seeds',
    },
  },
};
