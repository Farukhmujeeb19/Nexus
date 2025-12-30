// src/components/VideoCall.js
import React, { useState } from 'react';

export default function VideoCall() {
  const [inCall, setInCall] = useState(false);

  return (
    <div>
      <h2>Video Call</h2>
      {inCall ? (
        <>
          <video autoPlay playsInline style={{ width: '100%' }} />
          <button onClick={() => setInCall(false)}>End Call</button>
        </>
      ) : (
        <button onClick={() => setInCall(true)}>Start Call</button>
      )}
    </div>
  );
}
