import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import Purchases from './components/Purchases';
import Transfers from './components/Transfers';
import Assignments from './components/Assignments';
import './styles/App.css';

function App() {
    const [role, setRole] = useState('Admin'); // Global Role State

    return (
        <Router>
            <div className="App">
                <Navbar role={role} setRole={setRole} />
                <main className="container">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route path="/purchases" element={<Purchases role={role} />} />
                        <Route path="/transfers" element={<Transfers role={role} />} />
                        <Route path="/assignments" element={<Assignments role={role} />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;