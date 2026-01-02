import React, { useState } from 'react'
import { Tabs } from 'antd'
import Health from './Health';
import Education from './Education';
import Disaster from './Disaster';
import Other from './Other';
const ActiveCampaigns = () => {
    const [activeTab, setActiveTab] = useState("health")
    const items = [
        {
            key: 'health',
            label: 'Health',
            children: <Health activeTab={activeTab} />,
        },
        {
            key: 'education',
            label: 'Education',
            children: <Education activeTab={activeTab} />,
        },
        {
            key: 'disaster',
            label: 'Disaster',
            children: <Disaster activeTab={activeTab} />,
        },
        {
            key: 'other',
            label: 'Other',
            children: <Other activeTab={activeTab} />,
        },
    ];
    return (
        <div className='md:max-w-[80%] max-w-[95%] mx-auto'>
            <div className="mt-32 mb-15 text-primary md:text-5xl text-3xl font-bold text-center">Active Campaigns</div>
            <div className="">
                <Tabs defaultActiveKey="health" className='w-full' accessKey={activeTab} items={items} onChange={setActiveTab} />
            </div>
        </div>
    )
}

export default ActiveCampaigns