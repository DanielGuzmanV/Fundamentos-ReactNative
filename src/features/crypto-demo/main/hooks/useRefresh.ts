import { useCallback, useState } from "react";

export const useRefresh = (onRefreshAction?: () => Promise<void> | void) => {
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(async () => {
    setRefreshing(true);

    if(onRefreshAction) {
      await onRefreshAction();
    } else {
      await new Promise(resolve => setTimeout(resolve, 2000))
    }

    setRefreshing(false);
  }, [onRefreshAction]);
  
  return { onRefresh, refreshing }
  
}