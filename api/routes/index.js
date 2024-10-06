const { loginRoute, logoutRoute, checkAuthRoute } = require('./auth')
const { searchRoute } = require('./search')

exports.routes = [ searchRoute, loginRoute, logoutRoute, checkAuthRoute ]
