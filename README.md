# 🎖️ Arsenal CMD: Military Asset Management System

A secure, full-stack logistics platform designed to manage and track military equipment across multiple global bases. This system implements **Role-Based Access Control (RBAC)** to ensure that procurement, transfers, and unit assignments are handled by authorized personnel only.

## 🚀 Live Demo & Repository
- **Frontend (Vercel):** [PASTE_YOUR_VERCEL_LINK_HERE]
- **Backend (Render):** [PASTE_YOUR_RENDER_LINK_HERE]
- **GitHub Repo:** [https://github.com/Gursharan-Reddy/military-asset-management](https://github.com/Gursharan-Reddy/military-asset-management)

---

## ✨ Features

### 🛡️ Role-Based Access Control (RBAC)
The system enforces strict rank-based permissions:
- **Admin (Full Access):** Can perform all operations including purchasing, transferring, and assigning assets.
- **Logistics Officer:** Authorized for **Procurement** (adding stock) and **Transfers** (moving stock between bases).
- **Base Commander:** Authorized for **Unit Assignments** (equipping specific divisions) and viewing the global inventory.

### 📦 Logistics Management
- **Dashboard:** Real-time inventory view with dynamic filtering by Base Location or Asset Name.
- **Purchases:** Record new equipment acquisitions and update base stock.
- **Transfers:** Secure logic for inter-base logistics; automatically deducts from the source and adds to the destination.
- **Assignments:** Logic to equip personnel/units; validates available stock before allowing the transaction.

---

## 🛠️ Technical Stack

- **Frontend:** React.js, Axios, React Router, Custom CSS (Tactical UI)
- **Backend:** Node.js, Express.js
- **Database:** SQLite (Relational database for ACID compliance)
- **ORM:** Sequelize
- **Security:** JSON Web Tokens (JWT) & Middleware-based RBAC

---

## 📂 Project Structure

```text
military-asset-management/
├── backend/
│   ├── models/          # Sequelize Database Models (Asset, User)
│   ├── routes/          # API Endpoint Logic (Purchases, Transfers, Assignments)
│   ├── middleware/      # RBAC & Auth Security logic
│   ├── db.js            # SQLite Connection
│   └── index.js         # Express Server Entry
├── frontend/
│   ├── src/
│   │   ├── components/  # Tactical UI Views
│   │   ├── services/    # API & Axios Configuration
│   │   └── styles/      # Custom Military CSS
│   └── public/
└── README.md

⚙️ Local Setup Instructions
Prerequisites
Node.js (v20 LTS recommended)

Git

Installation
Clone the repository:
git clone [https://github.com/Gursharan-Reddy/military-asset-management.git](https://github.com/Gursharan-Reddy/military-asset-management.git)
cd military-asset-management

Setup Backend:

cd backend
npm install
node index.js
Setup Frontend:

cd ../frontend
npm install
npm start

📋 Assignment Context
This project was developed as part of the KristalBall Assignment to demonstrate proficiency in:

Full-stack Development using React and Node.js.

Database Management with SQLite and Sequelize.

Security Architecture through role-based permissions.

Cloud Deployment using Render and Vercel.

Author: B Gursharan Reddy

Date: April 2026


---

### 🚀 How to push this to GitHub

1.  Open VS Code and create a file named `README.md` in your root folder.
2.  Paste the code above (and replace the link placeholders with your actual links).
3.  Run these commands in your terminal:

```powershell
# 1. Add the README
git add README.md

# 2. Commit
git commit -m "Docs: Added professional README with deployment links"

# 3. Push
git push origin main