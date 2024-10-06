import { API_BASE_URL } from "../../../configs/constants"

const login = async ({ username, password }) => {
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

export default login
