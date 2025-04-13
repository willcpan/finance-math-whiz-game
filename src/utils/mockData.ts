
export interface StockData {
  ticker: string;
  companyName: string;
  currentPrice: number;
  previousClose: number;
  dividendYield: number;
  dividendPerShare: number;
}

export const mockStocks: StockData[] = [
  {
    ticker: "AAPL",
    companyName: "Apple Inc.",
    currentPrice: 182.63,
    previousClose: 180.25,
    dividendYield: 0.52,
    dividendPerShare: 0.95
  },
  {
    ticker: "MSFT",
    companyName: "Microsoft Corporation",
    currentPrice: 426.27,
    previousClose: 421.90,
    dividendYield: 0.71,
    dividendPerShare: 3.00
  },
  {
    ticker: "AMZN",
    companyName: "Amazon.com Inc.",
    currentPrice: 178.15,
    previousClose: 174.42,
    dividendYield: 0,
    dividendPerShare: 0
  },
  {
    ticker: "GOOGL",
    companyName: "Alphabet Inc.",
    currentPrice: 164.56,
    previousClose: 162.30,
    dividendYield: 0.48,
    dividendPerShare: 0.80
  },
  {
    ticker: "META",
    companyName: "Meta Platforms Inc.",
    currentPrice: 502.31,
    previousClose: 495.18,
    dividendYield: 0.44,
    dividendPerShare: 2.20
  },
  {
    ticker: "TSLA",
    companyName: "Tesla Inc.",
    currentPrice: 175.22,
    previousClose: 169.48,
    dividendYield: 0,
    dividendPerShare: 0
  },
  {
    ticker: "V",
    companyName: "Visa Inc.",
    currentPrice: 272.36,
    previousClose: 270.20,
    dividendYield: 0.78,
    dividendPerShare: 2.12
  },
  {
    ticker: "JPM",
    companyName: "JPMorgan Chase & Co.",
    currentPrice: 193.82,
    previousClose: 190.15,
    dividendYield: 2.28,
    dividendPerShare: 4.40
  },
  {
    ticker: "PG",
    companyName: "Procter & Gamble Co.",
    currentPrice: 166.72,
    previousClose: 165.54,
    dividendYield: 2.37,
    dividendPerShare: 3.94
  },
  {
    ticker: "KO",
    companyName: "The Coca-Cola Company",
    currentPrice: 60.78,
    previousClose: 60.10,
    dividendYield: 2.90,
    dividendPerShare: 1.76
  }
];
