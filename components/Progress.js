import React, { useState } from 'react';

export default function Progress({ current, total }) {
  const [progress, setProgress] = useState((current / total) * 100);

  return (
    <div className="progress-bar">
      <div className="fill" style={{ width: `${progress}%`, backgroundColor: '#FFB702' }}></div>
      <div className="label">{current} / {total} MINTED</div>
    </div>
  );
}