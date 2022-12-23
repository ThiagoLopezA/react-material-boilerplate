import { AxiosResponse } from 'axios';
import { useEffect } from 'react';

export const useAsync = (
  asyncFn: () => Promise<AxiosResponse<any, any>>,
  onSuccess: Function,
  onReturn: Function,
  dependencies: any[] = []
) => {
  useEffect(() => {
    let isMounted = true;
    asyncFn().then((result) => {
      if (isMounted) onSuccess(result.data);
    });
    return () => {
      onReturn && onReturn();
      isMounted = false;
    };
  }, dependencies);
};
