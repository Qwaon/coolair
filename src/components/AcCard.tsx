"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { AcModel } from "@/types";

interface Props {
  model: AcModel;
}

export default function AcCard({ model }: Props) {
  const formatPrice = (p: number) =>
    "₽" + p.toLocaleString("ru-RU");

  const handleOrder = () => {
    const el = document.getElementById("contact");
    if (el) el.scrollIntoView({ behavior: "smooth" });
    else window.location.href = "/#contact";
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden flex flex-col">
      {/* Image */}
      <div className="relative h-44 sm:h-52 overflow-hidden bg-slate-100">
        <Image
          src={model.image}
          alt={model.name}
          fill
          className="object-cover"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {model.popular && (
          <div className="absolute top-3 right-3">
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              Хит
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-xs text-slate-400 font-medium mb-1">{model.brand}</p>
        <h3 className="font-bold text-slate-900 text-lg leading-tight mb-3 text-balance">
          {model.name}
        </h3>
        <p className="text-blue-600 font-bold text-xl sm:text-2xl mb-4 tabular-nums">
          {formatPrice(model.price)}
        </p>

        {/* Specs */}
        <div className="flex gap-3 text-xs sm:text-sm text-slate-600 mb-4">
          <div className="flex items-center gap-1.5">
            <span className="text-blue-500">❄</span>
            <span className="tabular-nums">Блок {model.btu}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-slate-400">⬚</span>
            <span className="tabular-nums">
              {model.roomMin}–{model.roomMax} м²
            </span>
          </div>
        </div>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-5">
          {model.features.map((f) => (
            <Badge
              key={f}
              variant="secondary"
              className="text-xs bg-slate-100 text-slate-600 hover:bg-slate-100 rounded-full"
            >
              {f}
            </Badge>
          ))}
        </div>

        {/* CTA */}
        <Button
          onClick={handleOrder}
          className="mt-auto w-full bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold"
        >
          <svg className="size-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
          Заказать монтаж
        </Button>
      </div>
    </div>
  );
}
