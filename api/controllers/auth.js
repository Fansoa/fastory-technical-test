const bcrypt = require('bcrypt')
const { users } = require('../mock/users')

exports.login = async (request, h) => {
    const {username, password} = request.payload

    if (!username || !password) {
        return h.response({ message: 'Missing credentials' }).code(400)
    }
        
    const user = users.find((user) => {
        return user.username === username
    })
    if (!user) {
        return h.response({ message: 'User not found' }).code(404)
    }
    
    const isPasswordMatch = await bcrypt.compare(password, user.password)
    
    if (isPasswordMatch) {
        request.cookieAuth.set({ uuid: user.uuid })
        return h.response({ 
            message: 'Login success', 
            data: 
            {
                uuid: user.uuid
            }, 
            ok: true 
        })
        .code(200)
    } else {
        return h.response({ message: 'Invalid credentials' }).code(401)
    }
}
