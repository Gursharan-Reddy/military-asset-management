import React, { useState } from 'react';
import API from '../services/api';

const Assignments = ({ role }) => {
    const [form, setForm] = useState({
        assetName: '',
        base: '',
        assignedTo: '',
        quantity: 1
    });

    const handleAssign = async (e) => {
        e.preventDefault();
        try {
            // Passing the rank in the headers for RBAC verification
            const response = await API.post('/assignments', form, { 
                headers: { 'role': role } 
            });
            
            alert(`🎖️ ${response.data.message}`);
            // Optional: Redirect to dashboard to see the updated quantity
            window.location.href = "/"; 

        } catch (err) {
            const serverMessage = err.response?.data?.message;
            const status = err.response?.status;
            
            if (status === 403) {
                alert(`❌ Role Error: Your rank (${role}) is not authorized for this action.`);
            } else if (serverMessage) {
                alert(`⚠️ System Note: ${serverMessage}`);
            } else {
                alert("❌ Connection Error: Is the backend server running?");
            }
        }
    };

    return (
        <div className="form-card">
            <h2>Unit & Personnel Assignment</h2>
            <form onSubmit={handleAssign}>
                <label>Asset Name</label>
                <input 
                    placeholder="e.g., M16 Rifle" 
                    required 
                    onChange={e => setForm({...form, assetName: e.target.value})} 
                />

                <label>Base Location</label>
                <input 
                    placeholder="e.g., Base Alpha" 
                    required 
                    onChange={e => setForm({...form, base: e.target.value})} 
                />

                <label>Assigned To</label>
                <input 
                    placeholder="Unit name or Soldier ID" 
                    required 
                    onChange={e => setForm({...form, assignedTo: e.target.value})} 
                />

                <label>Quantity</label>
                <input 
                    type="number" 
                    min="1"
                    required 
                    onChange={e => setForm({...form, quantity: e.target.value})} 
                />

                <button type="submit">Confirm Assignment</button>
            </form>
        </div>
    );
};

export default Assignments;