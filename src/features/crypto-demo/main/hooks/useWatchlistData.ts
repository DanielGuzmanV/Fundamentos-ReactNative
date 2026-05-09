import { useQuery } from '@tanstack/react-query';
import { getCoincapAssets } from '../services/assetsCoincap';
import { CoinData } from '../types/coinCap';
// Lista de IDs de activos para la watchlist
const WATCHLIST_IDS = ['bitcoin', 'ethereum', 'solana', 'dogecoin', 'tron'];

export const useWatchlistData = () => {
  return useQuery<CoinData[], Error>({
    queryKey: ['watchlist'], // Clave única para esta petición
    queryFn: () => getCoincapAssets(WATCHLIST_IDS),
    // Opciones de React Query
    staleTime: 1000 * 60 * 5, // Los datos se consideran "frescos" por 5 minutos
    refetchInterval: 1000 * 30, // Refrescar cada 30 segundos en segundo plano
  });
};