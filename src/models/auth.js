const dbPool = require("../config/database");

const getUserByEmail = (email) => {
    const SQLQuery = 'SELECT * FROM users WHERE email = ?';
    return dbPool.execute(SQLQuery, [email]);
}

module.exports = {
    getUserByEmail,
}