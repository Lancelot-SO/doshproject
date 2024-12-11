import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LoginPage from './pages/auth/LoginPage';
import DashboardLayout from './components/layout/DashboardLayout';
import UsersList from './pages/admin/UsersList';
import Feed from './pages/user/Feed';

const PrivateRoute = ({ children }) => {
    const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';
    return isAuthenticated ? children : <Navigate to="/login" />;
};

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route
                    path="/dashboard"
                    element={
                        <PrivateRoute>
                            <DashboardLayout>
                                {localStorage.getItem('userRole') === 'admin' ? (
                                    <UsersList />
                                ) : (
                                    <Feed />
                                )}
                            </DashboardLayout>
                        </PrivateRoute>
                    }
                />
                <Route path="/" element={<Navigate to="/login" />} />
            </Routes>
        </Router>
    );
};

export default App; 