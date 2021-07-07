// bin/migrate.js

var db = require('../database/database');
db.sequelize.sync();