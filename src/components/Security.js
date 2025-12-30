// src/components/Security.js
import { useState } from 'react';

export default function Security() {
  const [password, setPassword] = useState('');
  const [otp, setOtp] = useState('');

  const strength = password.length > 8 ? 'Strong' : 'Weak';

  return (
    <div>
      <h2>Security Settings</h2>
      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <p>Password Strength: {strength}</p>

      <input
        type="text"
        placeholder="Enter 6-digit OTP"
        maxLength={6}
        onChange={(e) => setOtp(e.target.value)}
      />
    </div>
  );
}
