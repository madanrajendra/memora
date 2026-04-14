import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import DecisionLabLandingPage from './pages/DecisionLabLandingPage';
import HabitsGoalsLandingPage from './pages/HabitsGoalsLandingPage';
import HomePage from './pages/HomePage';
import LearningVaultLandingPage from './pages/LearningVaultLandingPage';
import LoginPage from './pages/LoginPage';
import MemoryTimelineLandingPage from './pages/MemoryTimelineLandingPage';
import PaymentPage from './pages/PaymentPage';
import PersonalModelLandingPage from './pages/PersonalModelLandingPage';
import RegisterPage from './pages/RegisterPage';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import NeuralChatLandingPage from './pages/NeuralChatLandingPage';
import LandingPage from './pages/LandingPage';
import UserDashboardLandingPage from './pages/UserDashboardLandingPage';

// Guard: redirect logged-in users away from /login and /register
const GuestRoute = ({ element }: { element: React.ReactElement }) => {
  const { currentUser, loading } = useAuth();
  if (loading) return null;
  return currentUser ? <Navigate to="/dashboard" replace /> : element;
};

// Guard: redirect unauthenticated users away from protected pages
const ProtectedRoute = ({ element }: { element: React.ReactElement }) => {
  const { currentUser, loading } = useAuth();
  if (loading) return null;
  return currentUser ? element : <Navigate to="/login" replace />;
};

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/decision-lab" element={<ProtectedRoute element={<DecisionLabLandingPage />} />} />
      <Route path="/habits-goals" element={<ProtectedRoute element={<HabitsGoalsLandingPage />} />} />
      <Route path="/learning-vault" element={<ProtectedRoute element={<LearningVaultLandingPage />} />} />
      <Route path="/dashboard" element={<ProtectedRoute element={<UserDashboardLandingPage />} />} />
      <Route path="/memory-timeline" element={<ProtectedRoute element={<MemoryTimelineLandingPage />} />} />
      <Route path="/neural-chat" element={<ProtectedRoute element={<NeuralChatLandingPage />} />} />
      <Route path="/personal-model" element={<ProtectedRoute element={<PersonalModelLandingPage />} />} />
      <Route path="/home" element={<HomePage />} />
      <Route path="/payment" element={<PaymentPage />} />
      <Route path="/login" element={<GuestRoute element={<LoginPage />} />} />
      <Route path="/register" element={<GuestRoute element={<RegisterPage />} />} />
      <Route path="/forgot-password" element={<GuestRoute element={<ForgotPasswordPage />} />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <AppRoutes />
      </Router>
    </AuthProvider>
  );
}

export default App;
