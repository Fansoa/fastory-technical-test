const API_URL = require('../utils/constants')

exports.getResourceByName = async ({ searchKeywords, filterOptions }) => {
    const promiseList = Object.entries(filterOptions).reduce((acc, [resourceName, shouldNotBeFiltered]) => {
        if(shouldNotBeFiltered) {
            if (resourceName === 'people') return [...acc, fetch(`${API_URL}people/?search=${searchKeywords}`).then(res => res.json()).then(response => ({requestType: resourceName, ...response, next: response.next ? API_URL+response.next.split('/').at(-1): null}))]
            if (resourceName === 'film') return [...acc, fetch(`${API_URL}films/?search=${searchKeywords}`).then(res => res.json()).then(response => ({requestType: resourceName, ...response, next: response.next ? API_URL+response.next.split('/').at(-1): null}))]
            if (resourceName === 'starship') return [...acc, fetch(`${API_URL}starships/?search=${searchKeywords}`).then(res => res.json()).then(response => ({requestType: resourceName, ...response, next: response.next ? API_URL+response.next.split('/').at(-1): null}))]
            if (resourceName === 'vehicle') return [...acc, fetch(`${API_URL}vehicles/?search=${searchKeywords}`).then(res => res.json()).then(response => ({requestType: resourceName, ...response, next: response.next ? API_URL+response.next.split('/').at(-1): null}))]
            if (resourceName === 'specie') return [...acc, fetch(`${API_URL}species/?search=${searchKeywords}`).then(res => res.json()).then(response => ({requestType: resourceName, ...response, next: response.next ? API_URL+response.next.split('/').at(-1): null}))]
            if (resourceName === 'planet') return [...acc, fetch(`${API_URL}planets/?search=${searchKeywords}`).then(res => res.json()).then(response => ({requestType: resourceName, ...response, next: response.next ? API_URL+response.next.split('/').at(-1): null}))]
        }
        return [...acc]
    },[])
    
    const data = await Promise.all(promiseList)
    
    return data
}
