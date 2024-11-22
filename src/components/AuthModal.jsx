import React, { useState } from 'react';
import Login from './Login';
import Signup from './Signup';
import ForgotPassword from './ForgotPassword';
import OtpVerification from './OtpVerification';

function AuthModal({ onClose }) {
  const [view, setView] = useState('login'); // Tracks which view is active: 'login', 'signup', or 'forgotPassword'

  const handleViewChange = (newView) => setView(newView);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      {view === 'login' && <Login onClose={onClose} onViewChange={handleViewChange} />}
      {view === 'signup' && <Signup onClose={onClose} onViewChange={handleViewChange} />}
      {view === 'forgotPassword' && (
        <ForgotPassword onClose={onClose} onViewChange={handleViewChange} />
      )}
      {view === 'verifyotp' && (
        <OtpVerification onClose={onClose} onViewChange={handleViewChange} />
      )}
    </div>
  );
}

export default AuthModal;