import axios from "axios"

export function setToken(token: string) {
    localStorage.setItem("token", token)
    loadToken()
}

function getInstace() {
    return axios.create({
        baseURL: 'http://192.168.144.162:3000',
        validateStatus: () => true,
        timeout: 1000,
        headers: {
            'Content-Type': 'application/json',
        }
    })
}

export const api = getInstace()
loadToken()

export function loadToken() {
    const token = localStorage.getItem("token") ?? ""
    api.defaults.headers["Authorization"] = token
}
