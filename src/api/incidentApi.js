import axios from "axios";

export const createIncident = async (/* { token, userData } */userData) => {
    try {
        const res = await axios.post('http://localhost:3000/api/incidents/create', userData/* , {
            headers: { Authorization: token }
        } */)

        return res.data
    } catch (error) {
        console.error('Error en createIncident:', error.response ? error.response.data : error.message);
        throw error;
    }
}

export const allIncidents = async () => {
    const res = await axios.get('http://localhost:3000/api/incidents/incidents')
    return res.data
}

export const deletIncident = async (id) => {
    const res = await axios.delete(`http://localhost:3000/api/incidents/${id}`)
    return res.data
}

export const updateIncident = async (id, incidentData) => {
    const res = await axios.patch(`http://localhost:3000/api/incidents/${id}`, incidentData)
    return res.data
}

export const IncidenByUserId = async (userId) => {
    const res = await axios.get(`http://localhost:3000/api/incidents/user/${userId}`)
    return res.data
}
