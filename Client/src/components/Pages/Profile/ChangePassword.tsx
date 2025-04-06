import { useState, useEffect } from "react";

export const ChangePassword = () => {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [formActive, setFormActive] = useState(false);

  useEffect(() => {
    setFormActive(!!(currentPassword || newPassword || confirmPassword));
  }, [currentPassword, newPassword, confirmPassword]);

  const handlePasswordChange = () => {
    if (newPassword !== confirmPassword) {
      setErrorMessage("New passwords do not match.");
      setSuccessMessage("");
      return;
    }

    if (newPassword === currentPassword) {
      setErrorMessage("New password cannot be the same as the current password.");
      setSuccessMessage("");
      return;
    }

    if (currentPassword === "wrongpassword") {
      setErrorMessage("Incorrect current password.");
      setSuccessMessage("");
      return;
    }

    setSuccessMessage("Password changed successfully!");
    setErrorMessage("");
    setCurrentPassword("");
    setNewPassword("");
    setConfirmPassword("");
  };

  return (
    <div className="w-[90%] max-w-md rounded-lg dark:border-neutral-700 bg-white dark:bg-neutral-900 shadow-md px-6 py-8 text-center">
      <h2 className="text-xl font-semibold mb-6 text-neutral-900 dark:text-neutral-100">Change Password</h2>

      <div className="space-y-4">
        <input
          type="password"
          placeholder="Current Password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          className="w-full px-4 py-3 border rounded-md bg-white dark:bg-neutral-800 dark:border-neutral-700 dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
        />
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className="w-full px-4 py-3 border rounded-md dark:bg-neutral-800 bg-white dark:border-neutral-700 dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
        />
        <input
          type="password"
          placeholder="Confirm New Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          className="w-full px-4 py-3 border rounded-md dark:bg-neutral-800 bg-white dark:border-neutral-700 dark:text-white text-black focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white transition"
        />

        {errorMessage && (
          <div className="text-red-500 text-sm">{errorMessage}</div>
        )}
        {successMessage && (
          <div className="text-green-500 text-sm">{successMessage}</div>
        )}

        <button
          onClick={handlePasswordChange}
          disabled={!formActive}
          className={`w-full py-3 rounded-md text-white font-medium transition ${
            formActive
              ? "bg-black hover:bg-neutral-800 dark:bg-white dark:text-black dark:hover:bg-neutral-300"
              : "bg-neutral-400 cursor-not-allowed"
          }`}
        >
          Confirm Password →
        </button>
      </div>
    </div>
  );
};