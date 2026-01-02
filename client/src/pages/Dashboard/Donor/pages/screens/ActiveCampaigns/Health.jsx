import { Col, message, Row } from 'antd'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Campaign from './Campaign'

const Health = ({ activeTab }) => {
    const [campaigns, setCampaigns] = useState([])
    const fetchCampaigns = async () => {
        try {
            const res = await axios.get(`${import.meta.env.VITE_API_URL}/api/campaign/health-campaigns`, {
                headers: {
                    Authorization: `Bearer ${localStorage.getItem("authToken")}`
                }
            })
            setCampaigns(res.data)
            console.log(res.data);
        } catch (error) {
            console.log(error)
            message.error("ERR_FETCH: campaigns")
        }
    }
    useEffect(() => {
        if (activeTab == 'health') {
            fetchCampaigns()
        }
    }, [activeTab])
    return (
        <div>
            <div className="">
                <Campaign campaigns={campaigns} />
            </div>
        </div>
    )
}

export default Health