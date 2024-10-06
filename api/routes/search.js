const joi = require('joi')

const { getResourceByName } = require('../controllers/search')

exports.searchRoute = {
    method: 'POST',
    path: '/',
    handler: async (request) => {
        const { search: searchKeywords, filterOptions } = request.payload
        const data = await getResourceByName({ searchKeywords, filterOptions })
        
        return data
    },
    options: {
        validate: {
            payload: joi.object({
                search: joi.string().min(2).required(),
                filterOptions: joi.object({
                    people: joi.boolean().required(),
                    film: joi.boolean().required(),
                    starship: joi.boolean().required(),
                    vehicle: joi.boolean().required(),
                    specie: joi.boolean().required(),
                    planet: joi.boolean().required()
                }).required()
            })
        }
    }
}
