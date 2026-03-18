import type { Metadata } from "next";
import Link from "next/link";
import AcCard from "@/components/AcCard";
import LeadForm from "@/components/LeadForm";
import { acModels } from "@/data/ac-models";

export const metadata: Metadata = {
  title: "Каталог кондиционеров — ClimaTech07",
  description:
    "Каталог сплит-систем от 2 до 7 кВт для любого помещения. Выберите модель и закажите монтаж.",
};

export default function CatalogPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4 text-balance">
            Каталог кондиционеров
          </h1>
          <p className="text-slate-500 text-base sm:text-lg max-w-xl mx-auto text-pretty">
            Выберите модель из нашего ассортимента. Монтаж доступен с ближайшего дня.
          </p>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter hint */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-6 sm:mb-8">
            <p className="text-slate-500 text-sm">
              Доступно моделей: {acModels.length}
            </p>
            <Link
              href="/calculator"
              className="text-blue-600 text-sm font-medium hover:text-blue-700 flex items-center gap-1.5 transition-colors"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Подобрать через калькулятор
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {acModels.map((model) => (
              <AcCard key={model.id} model={model} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 text-balance">
            Не знаете, какую модель выбрать?
          </h2>
          <p className="text-slate-500 mb-8">
            Оставьте контакты — специалист позвонит и поможет подобрать
          </p>
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 sm:p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
