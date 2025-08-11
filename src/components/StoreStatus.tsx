import { useState, useEffect } from 'react';
import { StatusIndicator } from './StatusIndicator';

export const StoreStatus = () => {
  const [status, setStatus] = useState<
    'open' | 'closed' | 'closingSoon' | 'openingSoon'
  >('closed');

  useEffect(() => {
    const checkOpenStatus = () => {
      const now = new Date();
      const hours = now.getHours();
      const day = now.getDay();
      const minutes = now.getMinutes();

      if (day === 0 || hours > 21 || hours < 8 || (hours === 8 && minutes < 30))
        return setStatus('closed');
      if (hours === 8 && minutes >= 30) return setStatus('openingSoon');
      if (hours === 21 && minutes >= 30) return setStatus('closingSoon');

      return setStatus('open');
    };

    checkOpenStatus();

    const intervalId = setInterval(checkOpenStatus, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      {status === 'open' && (
        <StatusIndicator
          color="#22c55e"
          shadow="0 0 8px rgba(34,197,94,0.8)"
          text="Açık"
        />
      )}
      {status === 'closed' && (
        <StatusIndicator
          color="#ef4444"
          shadow="0 0 8px rgba(239,68,68,0.8)"
          text="Kapalı"
        />
      )}

      {status === 'closingSoon' && (
        <StatusIndicator
          color="#f97316"
          shadow="0 0 8px rgba(249,115,22,0.8)"
          text="Kapanmak üzere"
        />
      )}

      {status === 'openingSoon' && (
        <StatusIndicator
          color="#3b82f6"
          shadow="0 0 8px rgba(59,130,246,0.8)"
          text="Açılmak üzere"
        />
      )}
    </>
  );
};
