import { CoinGeckoMarketCoin } from "../types/coingecko";
import { CryptoCurrency } from "../types/crypto";

export const mapCoinGeckoMarketToCryptoCurrency = (
    coingeckoCoins: CoinGeckoMarketCoin[]
): CryptoCurrency[] => {
    return coingeckoCoins.map((coin) => ({
      id: coin.id,
      symbol: coin.symbol,
      name: coin.name,
      image: coin.image,
      current_price: coin.current_price,
      price_change_percentage_24h: coin.price_change_24h
  }));
};