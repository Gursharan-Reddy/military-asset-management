import React, { useState } from 'react';
import API from '../services/api';

const Purchases = ({ role }) => {
    const [form, setForm] = useState({ assetName: '', type: 'Vehicle', quantity: 1, base: '' });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await API.post('/purchases', form, { headers: { role } });
            alert("✅ Procurement Recorded Successfully!");
        } catch (err) {
            alert(err.response?.data?.message || "❌ Unauthorized: Requires Logistics Rank");
        }
    };

    return (
        <div className="form-card">
            <h2>Record New Asset Purchase</h2>
            <form onSubmit={handleSubmit}>
                <label>Asset Name</label>
                <input required onChange={e => setForm({...form, assetName: e.target.value})} />
                
                <label>Category</label>
                <select onChange={e => setForm({...form, type: e.target.value})}>
                    <option value="Vehicle">Vehicle</option>
                    <option value="Weapon">Weapon</option>
                    <option value="Ammunition">Ammunition</option>
                </select>

                <label>Quantity</label>
                <input type="number" required onChange={e => setForm({...form, quantity: e.target.value})} />

                <label>Receiving Base</label>
                <input required onChange={e => setForm({...form, base: e.target.value})} />

                <button type="submit">Submit Purchase Order</button>
            </form>
        </div>
    );
};

export default Purchases;