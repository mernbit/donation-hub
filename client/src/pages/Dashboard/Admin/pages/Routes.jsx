import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Screens/Dashboard'

const AdminRoutes = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user-management" element={<h1>User Management</h1>} />
        <Route path="/campaign-management" element={<h1>Campaign Management</h1>} />
        <Route path="/donations-monitoring" element={<h1>Donations Monitoring</h1>} />
        <Route path="/content-moderation" element={<h1>Content Moderation</h1>} />
        <Route path="/analytics-reports" element={<h1>Analytics & Reports</h1>} />
        <Route path="/system-configuration" element={<h1>System Configuration</h1>} />
    </Routes>
  )
}

export default AdminRoutes