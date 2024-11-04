import React, { useState, useEffect } from "react";
import { InputProfile } from "../inputs/InputProfile";
import { useUser } from "../../context/UserContext.jsx";

export function ChangePassword({ close }) {
  const { user } = useUser();
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [checkPassword, setCheckPassword] = useState('');
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    if (user) {
      console.log('User data:', user); 
    }
  }, [user]);

  const handleChangePassword = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('https://myescape.online/api/change-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({
          old_password: oldPassword,
          new_password: newPassword,
          new_password_confirmation: checkPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('Password changed successfully');
        setSuccess('Password changed successfully');
        setError(null);
        //close();
      } else {
        console.error('Failed to change password:', data.message);
        setError(data.message || 'Failed to change password');
        setSuccess(null);
      }
    } catch (error) {
      console.error('An error occurred:', error);
      setError('An error occurred. Please try again later.');
      setSuccess(null);
    }
  };

  return (
    <div className="grid justify-center md:m-4">
      <form onSubmit={handleChangePassword}>
        <div className="grid gap-6 mb-6">
          <h2 className="font-bold text-blue-700 text-3xl text-center mb-4">
            Change Password
          </h2>
          <InputProfile
            placeholder="Old Password"
            type="password"
            id="old-password"
            label="Old Password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
          />
          <InputProfile
            placeholder="New Password"
            type="password"
            id="new-password"
            label="New Password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
          <InputProfile
            placeholder="Write it again"
            type="password"
            id="check-password"
            label="Write the password again"
            value={checkPassword}
            onChange={(e) => setCheckPassword(e.target.value)}
          />
        </div>
        {error && <p className="text-red-500">{error}</p>}
        {success && <p className="text-green-500">{success}</p>}
        <div className="grid gap-6 lg:grid-cols-2 grid-cols-1 w-full pb-2 pt-2">
          <button
            type="button"
            className="text-blue-700 border-2 border-blue-700 p-2 rounded-lg"
            onClick={close}
          >
            Cancel
          </button>
          <button
            type="submit"
            className="text-white bg-orange-700 p-2 rounded-lg"
          >
            Change
          </button>
        </div>
      </form>
    </div>
  );
}
