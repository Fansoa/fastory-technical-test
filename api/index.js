'use strict'

const Hapi = require('@hapi/hapi')
const { routes } = require('./routes')
const { users } = require('./mock/users')

const init = async () => {

    const server = Hapi.server({
        port: 3001,
        host: 'localhost',
        routes: {
            cors: {
                origin: ['http://localhost:5173'],
                headers: ['Accept', 'Content-Type', 'Access-Control-Allow-Origin'],
                credentials: true,
            }
        }
    })

    await server.register([
        {
            plugin: require('@hapi/cookie')
        }
    ])

    server.auth.strategy('session', 'cookie', {
        cookie: {
            name: 'access_token',
            password: '$2b$04$srETW2JDV.OZUtOWVU5q5.kgJb8SOlGqg8zkGwg.K5LHWQOFgkiyS',
            isSecure: false,
        },
        validate: async (request, session) => {
            const account = users.find((user) => user.uuid === session.uuid)
        
            if (!account) {
                return { isValid: false }
            }
        
            return { isValid: true, credentials: account }
        }
    })

    server.auth.default('session')

    server.route(routes)

    await server.start()
    console.log('Server running on %s', server.info.uri)
}

process.on('unhandledRejection', (err) => {
    console.log(err)
    process.exit(1)
})

init()
