import { useQuery } from '@tanstack/react-query';
import { WATCHLIST_IDS } from '../constants/FavoritesCoins';
import { getCoincapAssets } from '../services/assetsCoincap';
import { CoinData } from '../types/coinCap';

export const useWatchlistData = () => {
  return useQuery<CoinData[], Error>({
    queryKey: ['watchlist'], // Clave única para esta petición

    //--- CÓDIGO TEMPORAL PARA PROBAR ERROR WATCHLIST ---
    // queryFn: async () => {
    //   await new Promise(resolve => setTimeout(resolve, 1000)); // Simula un pequeño retraso
    //   throw new Error("¡Simulación de error de red o de API!");
    // },

    //--- CÓDIGO TEMPORAL PARA PROBAR EMPTY WATCHLIST ---
    // queryFn: async () => {
    //   await new Promise(resolve => setTimeout(resolve, 1000)); // Simula un pequeño retraso
    //   return [];
    // },

    queryFn: () => getCoincapAssets(WATCHLIST_IDS),
    // Opciones de React Query
    staleTime: 1000 * 60 * 5, // Los datos se consideran "frescos" por 5 minutos
    // refetchInterval: 1000 * 30, // Refrescar cada 30 segundos en segundo plano
  });
};