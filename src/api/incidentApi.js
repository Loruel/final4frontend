import axios from "axios";

export const createIncident = async (userData) => {
    try {
        const res = await axios.post('http://localhost:3000/api/incidents/create', userData)

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

export const updateIncident = async ({ id, status }) => {
    console.log('status de la api:', status)
    const res = await axios.patch(`http://localhost:3000/api/incidents/${id}`, {
        status
    })
    return res.data
}

export const getIncidentById = async (id) => {
    const res = await axios.get(`http://localhost:3000/api/incidents/${id}`)
    return res.data
}

export const IncidenByUserId = async (userId) => {
    const res = await axios.get(`http://localhost:3000/api/incidents/user/${userId}`)
    return res.data
}
