import { CryptoCurrency } from '../types/crypto';

export const MOCK_WATCHLIST: CryptoCurrency[] = [
  {
    id: 'bitcoin',
    symbol: 'btc',
    name: 'Bitcoin',
    image: 'https://assets.coingecko.com/coins/images/1/large/bitcoin.png',
    current_price: 64230.50,
    price_change_percentage_24h: 2.45482
  },
  {
    id: 'ethereum',
    symbol: 'eth',
    name: 'Ethereum',
    image: 'https://assets.coingecko.com/coins/images/279/large/ethereum.png',
    current_price: 3450.20,
    price_change_percentage_24h: -1.24851
  },
  {
    id: 'solana',
    symbol: 'sol',
    name: 'Solana',
    image: 'https://assets.coingecko.com/coins/images/4128/large/solana.png',
    current_price: 145.10,
    price_change_percentage_24h: 5.67455
  },
  {
    id: "ripple",
    symbol: "xrp",
    name: "XRP",
    image: "https://coin-images.coingecko.com/coins/images/44/large/xrp-symbol-white-128.png?1696501442",
    current_price: 1.45,
    price_change_percentage_24h: 3.72749
  },
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "BNB",
    image: "https://coin-images.coingecko.com/coins/images/825/large/bnb-icon2_2x.png?1696501970",
    current_price: 633.94,
    price_change_percentage_24h: 1.38832
  },
];