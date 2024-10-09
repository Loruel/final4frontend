import axios from "axios";

export const register = async ({ fname, lname, username, email, password, rol }) => {
    const res = await axios.post('http://localhost:3000/api/auth/register', {
        fname,
        lname,
        username,
        email,
        password,
        rol
    })
    return res.data
}

export const login = async ({ username, password }) => {
    const res = await axios.post('http://localhost:3000/api/auth/login', {
        username,
        password
    })
    return res.data
}

export const allUsers = async () => {
    const res = await axios.get('http://localhost:3000/api/auth/users')
    return res.data
}

export const getMyInformation = async token => {
    const res = await axios.get('http://localhost:3000/api/auth/me', {
        headers: /* {Authorization: token} */
            { Authorization: `Bearer ${token}` }
    })
    return res.data
}