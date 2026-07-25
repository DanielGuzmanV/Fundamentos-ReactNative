import { coinsgeckoApi } from "../api/coinsgecko";
import { CoinGeckoMarketCoin } from "../types/coingecko";

interface GetCoinsMarketsParams {
  vs_currency?: string; // Moneda de referencia (ej: 'usd')
  ids?: string[];       // Lista de IDs de monedas (ej: ['bitcoin', 'ethereum'])
  category?: string;    // Categoría de monedas
  order?: string;       // Orden de clasificación
  per_page?: number;    // Número de resultados por página
  page?: number;        // Número de página
  sparkline?: boolean;  // Incluir datos de sparkline
  price_change_percentage?: string; // Cambios porcentuales por período
}

export const getCoinsMarkets = async (
  params: GetCoinsMarketsParams
): Promise<CoinGeckoMarketCoin[]> => {
  try {
    const response = await coinsgeckoApi.get('/coins/markets', {
      params: {
        vs_currency: params.vs_currency || 'usd', // Por defecto USD
        ids: params.ids?.join(','),              // Unir IDs por coma si existen
        per_page: params.per_page || 10,         // Por defecto 10 monedas
        // Añadir más parámetros si es necesario
      },
    });
    return response.data; 
  } catch (error) {
    console.error("Error fetching CoinGecko markets:", error);
    throw error;
  }
};