'use client';

import { $healthcheck } from '@/server/rpc/clients';
import { callRpc } from '@/utils/callRpc';
import { useEffect, useState, type FunctionComponent } from 'react';

export const HealthCheck: FunctionComponent = () => {
  const [status, setStatus] = useState<{ status: string } | null>();

  useEffect(() => {
    const check = async () => {
      const res = await callRpc($healthcheck.healthcheck.$get());
      if (res.error) {
        alert(res.error);
      }

      setStatus(res.data);
    };

    check();
  }, []);

  return <p className="text-white">{status?.status}</p>;
};
