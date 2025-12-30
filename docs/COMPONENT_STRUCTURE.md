# Nexus Platform – Component & Architecture Overview

## Folder Structure
src/
├── components/
│   ├── Navbar.js – top navigation bar
│   ├── Sidebar.js – dashboard menu
│   └── Calendar.js – meeting scheduler
│
├── pages/
│   ├── Dashboard.js – main dashboard
│   ├── Login.js – login and 2FA page
│   └── Profile.js – user profile
│
├── context/
│   └── AuthContext.js – manages authentication state
│
├── utils/
│   └── api.js – handles API calls
│
├── App.js – main layout and router
└── index.js – React entry point

## Architecture Notes
- Built using React and React Router.
- State managed with Context API.
- Themed using Material UI.
- Responsive design handled with MUI Grid and Flexbox.
