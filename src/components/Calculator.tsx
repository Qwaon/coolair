"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Slider } from "@/components/ui/slider";
import { Button } from "@/components/ui/button";
import { acModels } from "@/data/ac-models";
import AcCard from "./AcCard";

const BTU_BLOCKS = [7, 9, 12, 18, 24] as const;
type BtuBlock = (typeof BTU_BLOCKS)[number];

// Площадь → нужный блок BTU
function recommendedBlock(areaMsq: number, multiplier: number): BtuBlock {
  const btuNeeded = areaMsq * 100 * multiplier * 3.412; // Вт → BTU
  return (BTU_BLOCKS.find((b) => b * 1000 >= btuNeeded) ?? 24) as BtuBlock;
}

const budgetOptions = [
  { label: "Любой бюджет", value: "any" },
  { label: "Бюджетный (Centek)", value: "budget" },
  { label: "Премиум (Ballu)", value: "premium" },
];

const roomTypes = [
  { label: "Гостиная", multiplier: 1.0 },
  { label: "Спальня", multiplier: 0.9 },
  { label: "Кухня", multiplier: 1.2 },
  { label: "Офис", multiplier: 1.1 },
  { label: "Торговое помещение", multiplier: 1.3 },
];

export default function Calculator() {
  const [area, setArea] = useState(25);
  const [roomType, setRoomType] = useState("Гостиная");
  const [budget, setBudget] = useState("any");
  const [calculated, setCalculated] = useState(false);

  const roomMultiplier =
    roomTypes.find((r) => r.label === roomType)?.multiplier ?? 1.0;

  const block = recommendedBlock(area, roomMultiplier);

  const recommended = useMemo(() => {
    if (!calculated) return [];
    return acModels
      .filter((m) => {
        const btuMatch = m.btu === block;
        const budgetMatch =
          budget === "any"
            ? true
            : budget === "budget"
            ? m.brand === "Centek"
            : m.brand === "Ballu";
        return btuMatch && budgetMatch;
      })
      .sort((a, b) => a.price - b.price);
  }, [calculated, block, budget]);

  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-4 sm:p-6 md:p-8 mb-6 sm:mb-8">
        {/* Room Size */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <label htmlFor="area-slider" className="text-base font-semibold text-slate-800">
              Площадь помещения
            </label>
            <span className="text-2xl font-bold text-blue-600 tabular-nums">
              {area} м²
            </span>
          </div>
          <Slider
            id="area-slider"
            min={10}
            max={100}
            step={1}
            value={[area]}
            onValueChange={(v) => {
              const val = Array.isArray(v) ? v[0] : v;
              setArea(Number(val));
              setCalculated(false);
            }}
            className="mb-2"
          />
          <div className="flex justify-between text-xs text-slate-400 mt-1">
            <span className="tabular-nums">10 м²</span>
            <span className="tabular-nums">100 м²</span>
          </div>
        </div>

        {/* Room Type */}
        <div className="mb-8">
          <label htmlFor="room-type" className="text-base font-semibold text-slate-800 block mb-3">
            Тип помещения
          </label>
          <div className="relative">
            <select
              id="room-type"
              value={roomType}
              onChange={(e) => { setRoomType(e.target.value); setCalculated(false); }}
              className="w-full h-12 pl-4 pr-10 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            >
              {roomTypes.map((r) => (
                <option key={r.label} value={r.label}>
                  {r.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center" aria-hidden>
              <svg className="size-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Budget */}
        <div className="mb-8">
          <label htmlFor="budget" className="text-base font-semibold text-slate-800 block mb-3">
            Бюджет
          </label>
          <div className="relative">
            <select
              id="budget"
              value={budget}
              onChange={(e) => { setBudget(e.target.value); setCalculated(false); }}
              className="w-full h-12 pl-4 pr-10 rounded-xl border border-slate-200 bg-slate-50 text-slate-800 font-medium appearance-none focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
            >
              {budgetOptions.map((b) => (
                <option key={b.value} value={b.value}>
                  {b.label}
                </option>
              ))}
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-4 flex items-center" aria-hidden>
              <svg className="size-4 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Result preview — блок BTU */}
        <div className="bg-blue-600 rounded-2xl p-4 sm:p-6 mb-5 sm:mb-6 text-white">
          <p className="font-semibold text-blue-100 mb-2 text-sm sm:text-base">Рекомендуемый блок</p>
          <div className="flex items-end gap-2 sm:gap-3 mb-1">
            <span className="text-5xl sm:text-6xl font-bold tabular-nums leading-none">{block}</span>
            <span className="text-xl sm:text-2xl font-semibold text-blue-200 mb-1">тыс. BTU</span>
          </div>
          <p className="text-blue-200 text-sm tabular-nums mt-2">
            Для {area} м² · {roomType.toLowerCase()}
          </p>
        </div>

        <Button
          onClick={() => setCalculated(true)}
          className="w-full h-12 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold text-base"
        >
          Подобрать модели
        </Button>
      </div>

      {/* Results */}
      {calculated && (
        <div>
          {recommended.length > 0 ? (
            <>
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-balance">
                Блок <span className="tabular-nums">{block}</span> — найдено{" "}
                <span className="tabular-nums">{recommended.length}</span> модели
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {recommended.map((m) => (
                  <AcCard key={m.id} model={m} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12 bg-white rounded-2xl border border-slate-100">
              <svg className="size-10 text-slate-300 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
              </svg>
              <p className="text-slate-700 font-semibold text-lg mb-2 text-balance">
                Ничего не найдено
              </p>
              <p className="text-slate-500 text-sm mb-6 text-pretty">
                Попробуйте изменить бюджет или посмотрите весь каталог
              </p>
              <Link
                href="/catalog"
                className="inline-flex items-center justify-center h-9 px-4 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 text-sm font-medium transition-colors"
              >
                Весь каталог
              </Link>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
