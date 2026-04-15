import React, { useState } from 'react';
import API from '../services/api';

const Transfers = ({ role }) => {
    const [form, setForm] = useState({ assetName: '', fromBase: '', toBase: '', quantity: 1 });

    const handleTransfer = async (e) => {
        e.preventDefault();
        try {
            await API.post('/transfers', form, { headers: { role } });
            alert("🚀 Logistics Transfer Initiated!");
        } catch (err) {
            alert(err.response?.data?.message || "❌ Unauthorized Rank");
        }
    };

    return (
        <div className="form-card">
            <h2>Inter-Base Asset Transfer</h2>
            <form onSubmit={handleTransfer}>
                <input placeholder="Asset Name" required onChange={e => setForm({...form, assetName: e.target.value})} />
                <input placeholder="From Base" required onChange={e => setForm({...form, fromBase: e.target.value})} />
                <input placeholder="To Base" required onChange={e => setForm({...form, toBase: e.target.value})} />
                <input type="number" placeholder="Quantity" required onChange={e => setForm({...form, quantity: e.target.value})} />
                <button type="submit">Execute Transfer</button>
            </form>
        </div>
    );
};

export default Transfers;