import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
import LeadForm from "@/components/LeadForm";

export const metadata: Metadata = {
  title: "Калькулятор кондиционера — CoolAir Pro",
  description:
    "Подберите кондиционер под площадь и бюджет. Введите данные — получите рекомендацию мгновенно.",
};

export default function CalculatorPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-6">
            <svg className="w-4 h-4 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 11h.01M12 11h.01M15 11h.01M4 19h16a2 2 0 002-2V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-blue-700 text-sm font-medium">Умный подбор</span>
          </div>
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4 text-balance">
            Калькулятор подбора кондиционера
          </h1>
          <p className="text-slate-500 text-base sm:text-lg text-pretty">
            Укажите площадь и бюджет — мы мгновенно подберём подходящие модели.
          </p>
        </div>
      </section>

      {/* Calculator */}
      <section className="pb-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Calculator />
        </div>
      </section>

      {/* How it works */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-slate-900 mb-8 text-center">
            Как работает калькулятор
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 sm:gap-6">
            {[
              {
                step: "1",
                title: "Укажите площадь",
                desc: "Используйте слайдер для выбора площади помещения в м².",
              },
              {
                step: "2",
                title: "Выберите тип помещения",
                desc: "Кухни и торговые помещения требуют больше мощности.",
              },
              {
                step: "3",
                title: "Получите рекомендации",
                desc: "Показываем модели, подходящие по площади и бюджету.",
              },
            ].map((s) => (
              <div key={s.step} className="bg-white rounded-2xl p-6 border border-slate-100 text-center">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold mx-auto mb-4">
                  {s.step}
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{s.title}</h3>
                <p className="text-slate-500 text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lead form */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 text-balance">
            Нужна консультация эксперта?
          </h2>
          <p className="text-slate-500 mb-8">
            Наш специалист позвонит и поможет выбрать идеальную модель
          </p>
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 sm:p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
