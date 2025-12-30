// src/components/Wallet.js
import { useState } from 'react';

export default function Wallet() {
  const [balance, setBalance] = useState(5000);
  const [history, setHistory] = useState([]);

  const handleTransaction = (type, amount) => {
    const amt = Number(amount);
    if (type === 'Deposit') setBalance(balance + amt);
    else if (type === 'Withdraw') setBalance(balance - amt);
    setHistory([...history, { type, amount: amt, date: new Date().toLocaleString() }]);
  };

  return (
    <div>
      <h2>Wallet Balance: ${balance}</h2>
      <button onClick={() => handleTransaction('Deposit', 100)}>Deposit $100</button>
      <button onClick={() => handleTransaction('Withdraw', 50)}>Withdraw $50</button>

      <h3>Transactions</h3>
      <ul>
        {history.map((t, i) => (
          <li key={i}>{`${t.type} $${t.amount} on ${t.date}`}</li>
        ))}
      </ul>
    </div>
  );
}
