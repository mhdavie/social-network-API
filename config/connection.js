const { connect, connection } = require('mongoose');

const connectionString =
  process.env.MONGODB_URI || 'mongodb://0.0.0.0/social-network-API';

  connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  
module.exports = connection;