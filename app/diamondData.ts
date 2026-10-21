export type DiamondPrice = {
  size: number | string;
  sieve: string | number;
  weight: number;
  pricePerCarat: number;
  marketView?: string | number;
};

export const USD_RATE = 90;

export const diamondPrices: DiamondPrice[] = [
  { size: 0.9, sieve: "000-00", weight: 0.004, pricePerCarat: 12800, marketView: -2 },
  { size: 1, sieve: "00-0", weight: 0.005, pricePerCarat: 11350, marketView: -2 },
  { size: 1.1, sieve: "0-1", weight: 0.006, pricePerCarat: 10350, marketView: -2 },
  { size: 1.15, sieve: "1-1.5", weight: 0.007, pricePerCarat: 8400, marketView: -2 },
  { size: 1.2, sieve: "1.5-2", weight: 0.008, pricePerCarat: 8900, marketView: -2 },
  { size: 1.25, sieve: "2-2.5", weight: 0.009, pricePerCarat: 7300, marketView: "star" },
  { size: 1.3, sieve: "2.5-3", weight: 0.01, pricePerCarat: 7300, marketView: "star" },
  { size: 1.35, sieve: "3-3.5", weight: 0.011, pricePerCarat: 6500, marketView: "star" },
  { size: 1.4, sieve: "3.5-4", weight: 0.012, pricePerCarat: 6250, marketView: "star" },
  { size: 1.45, sieve: "4-4.5", weight: 0.013, pricePerCarat: 6500, marketView: "star" },
  { size: 1.5, sieve: "4.5-5", weight: 0.014, pricePerCarat: 6800, marketView: "star" },
  { size: 1.55, sieve: "5-5.5", weight: 0.016, pricePerCarat: 6500, marketView: "star" },
  { size: 1.6, sieve: "5.5-6", weight: 0.018, pricePerCarat: 5250, marketView: "star" },
  { size: 1.7, sieve: "6-6.5", weight: 0.021, pricePerCarat: 5250, marketView: "star" },
  { size: 1.8, sieve: "6.5-7", weight: 0.025, pricePerCarat: 4750, marketView: "male" },
  { size: 1.9, sieve: "7-7.5", weight: 0.029, pricePerCarat: 4750, marketView: "male" },
  { size: 2, sieve: "7.5-8", weight: 0.035, pricePerCarat: 4550, marketView: "male" },
  { size: 2.1, sieve: "8-8.5", weight: 0.039, pricePerCarat: 4400, marketView: "male" },
  { size: 2.2, sieve: "8.5-9", weight: 0.044, pricePerCarat: 4250, marketView: "male" },
  { size: 2.3, sieve: "9-9.5", weight: 0.052, pricePerCarat: 4150, marketView: "male" },
  { size: 2.4, sieve: "9.5-10", weight: 0.058, pricePerCarat: 4150, marketView: "male" },
  { size: 2.5, sieve: "10-10.5", weight: 0.069, pricePerCarat: 4150, marketView: "male" },
  { size: 2.6, sieve: "10.5-11", weight: 0.074, pricePerCarat: 4000, marketView: "male" },
  { size: 2.7, sieve: "11-11.5", weight: 0.078, pricePerCarat: 4000, marketView: 11 },
  { size: 2.8, sieve: "11.5-12", weight: 0.086, pricePerCarat: 4000, marketView: 11 },
  { size: 2.9, sieve: "12-12.5", weight: 0.095, pricePerCarat: 4400, marketView: 11 },
  { size: 3, sieve: "12.5-13", weight: 0.108, pricePerCarat: 4400, marketView: 11 },
  { size: 3.1, sieve: "13-13.5", weight: 0.116, pricePerCarat: 4000, marketView: 11 },
  { size: 3.2, sieve: "13.5-14", weight: 0.125, pricePerCarat: 4000, marketView: 11 },
  { size: 3.3, sieve: "14-15.5", weight: 0.14, pricePerCarat: 3700, marketView: 14 },
  { size: 3.6, sieve: "15.5-17", weight: 0.16, pricePerCarat: 4350, marketView: 14 },
  { size: "3.8-3.9", sieve: "17-19", weight: 0.2, pricePerCarat: 5500 },
  { size: "4-4.1", sieve: 25, weight: 0.25, pricePerCarat: 5750 },
  { size: "4.3-4.5", sieve: 33, weight: 0.33, pricePerCarat: 5750 },
  { size: 5.2, sieve: 50, weight: 0.5, pricePerCarat: 6250 },
  { size: 6.5, sieve: 1, weight: 1, pricePerCarat: 7250 }
];
