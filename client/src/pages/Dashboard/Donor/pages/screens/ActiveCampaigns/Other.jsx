import { message } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Campaign from './Campaign'

const Other = ({ activeTab }) => {
    const [campaigns, setCampaigns] = useState([])
    const fetchCampaigns = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/campaign/other-campaigns`, { headers: { Authorization: `Bearer ${localStorage.getItem("authToken")}` } })
            setCampaigns(res.data)
        } catch (error) {
            console.log(error)
            message.error("error fetching campaigns")
        }
    }
    useEffect(() => {
        if (activeTab == "other") {
            fetchCampaigns()
        }
    }, [activeTab])
    return (
        <div>
            <Campaign campaigns={campaigns} />
        </div>
    )
}

export default Other