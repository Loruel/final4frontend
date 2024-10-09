import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './pages/loginPage'
import HomePage from './pages/homePage'
import NewIncidentPage from './pages/newIncidentPage'
import NavPage from './pages/navPage'
import MyIncidents from './pages/myIncidents'
import ProfilePage from './pages/profilePage'
import UsersPage from './pages/usersPage'
import CreateUser from './pages/createUser'
import EditIncidentPage from './pages/editIncidentPage'
import IncidentsAdmin from './pages/incidentsAdmin'
import EditIncidentAdminPage from './pages/editIncidentAdminPage'
import ProtectedRoute from './pages/ProtectecRoutes'
import RoleProtectedRoute from './pages/RoleProtectedRoute'

export default function AppRoutes() {
    return (
        <Routes>

            <Route path='/' element={<LoginPage />} />
            <Route element={<ProtectedRoute />}>
                <Route path='/' element={<NavPage />}>
                    <Route path='/home' element={<HomePage />} />
                    <Route path='/profile' element={<ProfilePage />} />

                    <Route element={<RoleProtectedRoute allowedRoles={['user']} />}>
                        <Route path='/myincidents' element={<MyIncidents />} />
                        <Route path='/editInsident' element={<EditIncidentPage />} />
                        <Route path='/newincident' element={<NewIncidentPage />} />
                    </Route>

                    <Route element={<RoleProtectedRoute allowedRoles={['admin']} />}>
                        <Route path='/users' element={<UsersPage />} />
                        <Route path='/createuser' element={<CreateUser />} />
                        <Route path='/editInsidentAdmin' element={<EditIncidentAdminPage />} />
                        <Route path='/incidents' element={<IncidentsAdmin />} />
                    </Route>





                </Route>
            </Route>

            <Route path='*' element={<Navigation to='/' />} />

        </Routes>
    )
}
