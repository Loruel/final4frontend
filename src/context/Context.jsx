import { useMutation } from "@tanstack/react-query"
import { useEffect, useState } from "react"
import { useContext } from "react"
import { createContext } from "react"
import { login, register } from "../api/authApi"
import { useNavigate } from "react-router-dom"
import { createIncident, allIncidents, deletIncident, updateIncident } from "../api/incidentApi"
import { allUsers } from "../api/authApi"

const functionContext = createContext()

export function FunctionProvider({ children }) {
    const [user, setUser] = useState(null) //Almacena a un usuario//
    const [users, setUsers] = useState(null) //Almacena todos los usuarios//
    const [incident, setIncident] = useState(null) //Almacena un incidente
    const [incidents, setIncidents] = useState([])  //Almacena todos los incidentes
    const [openModal, setOpenModal] = useState(false) //Estado del modal
    const setLocation = useNavigate() //Poder navegar entre paginas al cargar


    const toggleModal = () => {
        setOpenModal(!openModal)
    }//Abre y cierra el modal

    //////////////////////////////////////////////////////////////////////////7
    //PARA LOS USUARIOS

    const setUserData = data => {
        setUser(data)
    } //Almacena el usuario

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await allUsers()
                setUsers(response.data)
            } catch (error) {
                console.error('Error fetching users:', error)
            }
        };

        fetchUsers()
    }, []) //Sirve para almacenar todos los usuarios

    const registerUserMutation = useMutation({
        mutationKey: ['register'],
        mutationFn: register,
        onError: error => {
            alert(error.response.data.message)
        },
        onSuccess: data => {
            alert(data.message)
            setLocation('/users')
        }
    }) //La mutacion para registrar un nuevo usuario

    const loginUserMutation = useMutation({
        mutationKey: ['login'],
        mutationFn: login,
        onError: error => {
            alert(error.response.data.message)
        },
        onSuccess: data => {
            alert(data.message)
            localStorage.setItem('authToken', data.token)
            setUserData(data.user)
            setLocation('/home')
        }
    }) //La mutacion para iniciar sesion

   //////////////////////////////////////////////////////////////////////////7
    //PARA LAS INCIDENCIAS

    useEffect(() => {
        const fetchIncidents = async () => {
            try {
                const response = await allIncidents()
                setIncidents(response.data)

            } catch (error) {
                console.error('Error fetching incidents:', error)
            }
        };

        fetchIncidents()
    }, []) //Todas las incidencias

   /*  const fetchIncidentById = async (id) => {
        try {
            const data = await getIncidentById(id)
            setIncident(data)
        } catch (error) {
            console.error('Error fetching incident by ID:', error)
        }
    } */


  /*   const fetchIncidentsByUserId = async (userId) => {
        try {
            const response = await getIncidentsByUserId(userId)
            setIncidents(response.data)
            console.log(response)
        } catch (error) {
            console.error('Error fetching incidents by user ID:', error)
        }
    } */

   /*  const IncidentByIdMutation = useContext({
        mutationKey: ['fetchIncidentById'],
        mutationFn: fetchIncidentById,
        onError: error => {
            alert('Error fetching incidents by user ID:', error)
        },
        onSuccess: (data) => {
            setIncident(data)
        }
    }) */

    const createIncidentMutation = useMutation({
        mutationKey: ['createIncident'],
        mutationFn: createIncident,
        onError: error => {
            alert(error.response.data.message)
        },
        onSuccess: data => {
            alert(data.message)
            setLocation('/myincidents')
        }
    }) //La mutacion para crear un incidente

    const deleteIncidentMutation = useMutation({
        mutationKey: ['deleteIncident'],
        mutationFn: deletIncident,
        onError: error => {
            alert(error.response.data.message)
        },
        onSuccess: data => {
            alert(data.message)
        }
    }) //La mutacion para eliminar un incidente

    const updateIncidentMutation = useMutation({
        mutationKey: ['updateIncident'],
        mutationFn: updateIncident,
        onError: error => {
            alert(error.response.data.message)
        },
        onSuccess: data => {
            alert(data.message)
            setLocation('myincidents')
        }
    }) //La mutacion para editar un incidente

    return (
        <functionContext.Provider value={{
            //incident
            incident,
            incidents,
            createIncidentMutation,
            deleteIncidentMutation,
            updateIncidentMutation,
            /* fetchIncidentById,
            IncidentByIdMutation, */
            //user
            user,
            users,
            setUserData,
            registerUserMutation,
            loginUserMutation,
            //others
            openModal,
            setOpenModal,
            toggleModal, 
           /*  fetchIncidentsByUserId */
        }}>
            {children}
        </functionContext.Provider>
    )
}

export function useFunction() {
    return useContext(functionContext)
}