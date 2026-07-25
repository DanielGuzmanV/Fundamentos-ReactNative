import { useQuery } from "@tanstack/react-query"
import { WATCHLIST_IDS } from "../constants/FavoritesCoins"
import { mapCoinGeckoMarketToCryptoCurrency } from "../mappers/coingeckoMapper"
import { getCoinsMarkets } from "../services/coinsGecko"
import { CryptoCurrency } from "../types/crypto"

export const useWatchlistMarket = () => {
  return useQuery<CryptoCurrency[], Error>({
    queryKey: ['watchlistMarket'],
    queryFn: async () => {
      const data = await getCoinsMarkets({ids: WATCHLIST_IDS})
      return mapCoinGeckoMarketToCryptoCurrency(data);
    },
    staleTime: 1000 * 60 *30,
  })
}