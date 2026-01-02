import { message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Campaign from './Campaign'

const Disaster = ({ activeTab }) => {
    const [campaigns, setCampaigns] = useState([])
    const fetchCampaigns = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/campaign/disaster-campaigns`, { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } })
            setCampaigns(res.data);
        } catch (error) {
            console.log(error)
            message.error("Error fetching campaigns")
        }
    }
    useEffect(() => {
        if (activeTab == "disaster") {
            fetchCampaigns()
        }
    }, [activeTab])
    return (
        <div>
            <Campaign campaigns={campaigns} />
        </div>
    )
}

export default Disaster