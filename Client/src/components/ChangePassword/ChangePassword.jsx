import React, { useState, useEffect } from 'react';
import './ChangePassword.css';  // Assuming your CSS is in this file

const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [formActive, setFormActive] = useState(false);  // Track if form is active

  // Effect to activate form when any field is filled
  useEffect(() => {
    if (currentPassword || newPassword || confirmPassword) {
      setFormActive(true);  // Form is active when any field is filled
    } else {
      setFormActive(false);  // Form is inactive when no fields are filled
    }
  }, [currentPassword, newPassword, confirmPassword]);

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage('New passwords do not match.');
      setSuccessMessage('');
      return;
    }
    if (newPassword === currentPassword) {
      setErrorMessage('New password cannot be the same as the current password.');
      setSuccessMessage('');
      return;
    }
    if (currentPassword === 'wrongpassword') { // Example of incorrect current password
      setErrorMessage('Incorrect current password.');
      setSuccessMessage('');
      return;
    }

    setSuccessMessage('Password changed successfully!');
    setErrorMessage('');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
  };

  return (
    <div  className={`login-container ${ currentPassword || newPassword || confirmPassword ? "form-active" : ""}`}>
      <h2>Change Password</h2>

      <div className="input-box">
        <input
          type="password"
          placeholder="Enter current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
        />
      </div>

      <div className="input-box">
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
        />
      </div>

      <div className="input-box">
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>

      {errorMessage && <div className="error-message">{errorMessage}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}

      <button
        onClick={handlePasswordChange}>
        Confirm Password →
      </button>
    </div>
  );
};

export default ChangePassword;