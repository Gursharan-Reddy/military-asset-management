import React, { useEffect, useState } from 'react';
import API from '../services/api';

const Dashboard = () => {
    const [assets, setAssets] = useState([]);
    const [filter, setFilter] = useState('');

    const loadAssets = async () => {
        try {
            const res = await API.get('/assets');
            setAssets(res.data);
        } catch (err) { console.error("Fetch Error:", err); }
    };

    useEffect(() => { loadAssets(); }, []);

    const filtered = assets.filter(a => 
        a.base.toLowerCase().includes(filter.toLowerCase()) ||
        a.assetName.toLowerCase().includes(filter.toLowerCase())
    );

    return (
        <div className="page">
            <div className="page-header">
                <h2>Asset Inventory Dashboard</h2>
                <input 
                    type="text" 
                    placeholder="Search by Base or Asset Name..." 
                    className="search-bar"
                    onChange={(e) => setFilter(e.target.value)} 
                />
            </div>
            <table className="asset-table">
                <thead>
                    <tr>
                        <th>Asset Name</th>
                        <th>Type</th>
                        <th>Quantity</th>
                        <th>Base Location</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {filtered.map(a => (
                        <tr key={a.id}>
                            <td><strong>{a.assetName}</strong></td>
                            <td>{a.type}</td>
                            <td>{a.quantity}</td>
                            <td>{a.base}</td>
                            <td><span className="status-tag">{a.status}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Dashboard;