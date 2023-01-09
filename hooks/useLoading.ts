import { useCallback, useMemo, useState } from 'react';

export type TLoadingStatus = 'before' | 'loading' | 'ok' | 'failed';

const useLoading = (defaultStatus: TLoadingStatus = 'before') => {
  const [status, setStatus] = useState<TLoadingStatus>(defaultStatus);

  const reset = useCallback(() => (
    setStatus(() => 'before')
  ), []);

  const start = useCallback(() => (
    setStatus(() => 'loading')
  ), []);

  const stopOk = useCallback(() => (
    setStatus(() => 'ok')
  ), []);

  const stopFailed = useCallback(() => (
    setStatus(() => 'failed')
  ), []);

  return useMemo(() => ({
    status, reset, start, stopOk, stopFailed,
  }), [reset, start, status, stopOk, stopFailed]);
};

export default useLoading;
