const joi = require('joi');
const { login } = require('../controllers/auth')

exports.loginRoute = {
    method: 'POST',
    path: '/login',
    handler: function (request, h) {
        return login(request, h)
    },
    options: {
        auth: {
            mode: 'try'
        },
        validate: {
            payload: joi.object({
                username: joi.string().min(1).required(),
                password: joi.string().min(1).required()
            })
        }
    }
}

exports.checkAuthRoute =  {
    method: 'GET',
    path: '/check-auth',
    handler: function (request, h) {
        return h.response({ message: 'Authenticated', ok: true }).code(200);
    },
}

exports.logoutRoute =  {
    method: 'GET',
    path: '/logout',
    handler: function (request, h) {
        request.cookieAuth.clear()
        return h.response({ message: 'Logged out' }).unstate('auth-session').code(200);
    },
    options: {
        auth: false
    }
}
