"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Calculator, Info } from "lucide-react";
import { diamondPrices, USD_RATE } from "./diamondData";

const money = new Intl.NumberFormat("en-IN", { maximumFractionDigits: 0 });

export default function PriceExplorer() {
  const [selected, setSelected] = useState(0);
  const row = diamondPrices[selected];
  const price = useMemo(() => row.pricePerCarat * row.weight * USD_RATE, [row]);
  return (
    <section id="price-check" className="bg-cream px-5 py-20 sm:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[.85fr_1.15fr] lg:items-center">
        <div><p className="eyebrow text-gold">03 / Price explorer</p><h2 className="display mt-4 text-4xl sm:text-5xl">Find the right<br /><em className="font-normal text-gold">diamond value.</em></h2><p className="mt-5 max-w-md text-sm leading-7 text-ink/60">Browse every size band from the supplied price sheet. Values below use the workbook’s USD rate of ₹{USD_RATE} and are intended as a transparent starting point for your inquiry.</p><a href="#inquiry" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-gold">Request a confirmed quote <ArrowUpRight size={16} /></a></div>
        <div className="rounded-3xl bg-white p-6 shadow-[0_18px_60px_rgba(7,21,33,.08)] sm:p-9">
          <div className="flex items-center gap-3"><div className="rounded-full bg-ink p-3 text-gold"><Calculator size={20} /></div><div><p className="font-bold">Quick price estimate</p><p className="text-xs text-ink/50">Round brilliant · VVS / VS reference price</p></div></div>
          <label className="mt-8 block text-xs font-bold">Select size<select aria-label="Diamond size" value={selected} onChange={(e) => setSelected(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-ink/10 bg-cream px-4 py-3 text-sm outline-none focus:border-gold">{diamondPrices.map((item, index) => <option key={`${item.size}-${item.sieve}`} value={index}>{item.size} mm</option>)}</select></label>
          <div className="mt-8 grid gap-3 sm:grid-cols-4"><div className="rounded-xl bg-cream p-4"><p className="text-[10px] uppercase tracking-wider text-ink/50">Sieve</p><p className="mt-2 font-bold">{row.sieve}</p></div><div className="rounded-xl bg-cream p-4"><p className="text-[10px] uppercase tracking-wider text-ink/50">Weight / piece</p><p className="mt-2 font-bold">{row.weight.toFixed(3)} ct</p></div><div className="rounded-xl bg-cream p-4"><p className="text-[10px] uppercase tracking-wider text-ink/50">Price / carat</p><p className="mt-2 font-bold">₹{money.format(row.pricePerCarat * USD_RATE)}</p></div><div className="rounded-xl bg-ink p-4 text-white"><p className="text-[10px] uppercase tracking-wider text-white/50">Est. piece</p><p className="mt-2 font-bold text-gold">₹{money.format(price)}</p></div></div>
          <p className="mt-5 flex gap-2 text-[11px] leading-5 text-ink/50"><Info size={15} className="mt-0.5 shrink-0" />Sieve, weight, price-per-carat and the ₹{USD_RATE} USD rate are taken automatically from the workbook for the selected size. Final pricing is confirmed by our team.</p>
        </div>
      </div>
    </section>
  );
}
