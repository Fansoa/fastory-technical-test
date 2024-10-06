import { API_BASE_URL } from "../../../configs/constants"

export const login = async ({ username, password }) => {
    return fetch(`${API_BASE_URL}login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "true",
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
    }).then(res => res.json())
}

export const logout = async () => {
    return fetch(`${API_BASE_URL}logout`, {
        credentials: "include",
        headers: {
            "Accept": "application/json",
            "Access-Control-Allow-Origin": "true",
            "Content-Type": "application/json"
        },
    }).then(res => res.json()).catch(err => console.log(err))
}

export const fetchResources = async (searchKeywords, filterOptions) => {
    const data = await fetch(
        API_BASE_URL, 
        { 
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/json",
            }, 
            body: JSON.stringify({
                search: searchKeywords, 
                filterOptions})
        }
    )
    .then(res => res.json())
    
    console.log("🚀 ~ fetchResources ~ data:", data)
    return data
}
