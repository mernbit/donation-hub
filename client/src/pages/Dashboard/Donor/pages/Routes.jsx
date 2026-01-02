import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './screens/Dashboard'
import ActiveCampaigns from './screens/ActiveCampaigns'
import CampaignViewer from './screens/CampaignViewer'
const Index = () => {
    return (
        <Routes>
            <Route path='/' element={<Dashboard />} />
            <Route path='/active-campaigns' element={<ActiveCampaigns />} />
            <Route path='/active-campaigns/:id' element={<CampaignViewer />} />
        </Routes>
    )
}

export default Index