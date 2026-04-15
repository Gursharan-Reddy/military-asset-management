import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ role, setRole }) => {
    return (
        <nav className="navbar">
            <div className="nav-brand">🎖️ ARSENAL CMD</div>
            <div className="nav-links">
                <Link to="/">Dashboard</Link>
                <Link to="/purchases">Purchases</Link>
                <Link to="/transfers">Transfers</Link>
                <Link to="/assignments">Assignments</Link>
            </div>
            <div className="role-selector">
                <span>Current Rank: </span>
                <select value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="Admin">Admin (Full Access)</option>
                    <option value="Logistics Officer">Logistics Officer</option>
                    <option value="Base Commander">Base Commander</option>
                </select>
            </div>
        </nav>
    );
};

export default Navbar;