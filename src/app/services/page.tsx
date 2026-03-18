import type { Metadata } from "next";
import type { ReactNode } from "react";
import LeadForm from "@/components/LeadForm";
import { services } from "@/data/ac-models";

const serviceIcons: Record<string, ReactNode> = {
  installation: (
    <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3v18M5.636 5.636l12.728 12.728M18.364 5.636 5.636 18.364" />
    </svg>
  ),
  drilling: (
    <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  cutting: (
    <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  ),
  maintenance: (
    <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
    </svg>
  ),
};

export const metadata: Metadata = {
  title: "Услуги — CoolAir Pro",
  description:
    "Монтаж кондиционеров, алмазное бурение, резка и обслуживание в Москве. Профессиональный сервис с гарантией.",
};

const processSteps = [
  { title: "Вы звоните или оставляете заявку", desc: "Перезваниваем в течении дня" },
  { title: "Бесплатная консультация", desc: "Помогаем выбрать модель и услугу" },
  { title: "Согласуем время выезда", desc: "Мастер приедет в удобное для вас время" },
  { title: "Профессиональный монтаж", desc: "Чистая работа, выполняем за 1 день" },
  { title: "Тест-запуск и сдача объекта", desc: "Показываем, как пользоваться" },
];

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="pt-28 pb-16 bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center">
          <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4 text-balance">
            Наши услуги
          </h1>
          <p className="text-slate-500 text-base sm:text-lg text-pretty">
            Полный спектр услуг по климату и алмазным работам. Профессиональная
            команда, современное оборудование, полная гарантия.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="pb-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {services.map((service, i) => (
              <div
                key={service.id}
                className={`rounded-3xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow ${
                  i % 2 === 0 ? "bg-white" : "bg-slate-50"
                }`}
              >
                <div className="p-4 sm:p-8 md:p-12 grid md:grid-cols-2 gap-6 md:gap-10 items-center">
                  {/* Left */}
                  <div className={i % 2 === 1 ? "md:order-2" : ""}>
                    <div className="size-16 bg-blue-600 rounded-3xl flex items-center justify-center mb-6 text-white shadow-sm">
                      {serviceIcons[service.id]}
                    </div>
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-4 text-balance">
                      {service.title}
                    </h2>
                    <p className="text-slate-500 leading-relaxed mb-6 text-lg">
                      {service.description}
                    </p>
                    <div className="flex items-center gap-3 flex-wrap">
                      <span className="text-xl font-bold text-blue-600">
                        {service.price}
                      </span>
                      <a
                        href="#contact"
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                      >
                        Заказать
                      </a>
                    </div>
                  </div>

                  {/* Right — details */}
                  <div className={i % 2 === 1 ? "md:order-1" : ""}>
                    <div className="bg-slate-900 rounded-2xl p-4 sm:p-6">
                      <p className="text-slate-400 text-xs font-semibold uppercase tracking-widest mb-4">
                        Что входит в услугу
                      </p>
                      <ul className="space-y-3">
                        {service.details.map((d) => (
                          <li key={d} className="flex items-center gap-3 text-white">
                            <div className="w-5 h-5 rounded-full bg-blue-600 flex items-center justify-center shrink-0">
                              <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="text-sm">{d}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 text-balance">
              Как мы работаем
            </h2>
            <p className="text-slate-500">От первого звонка до работающего кондиционера</p>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-slate-200 hidden sm:block" />
            <div className="space-y-3 sm:space-y-6">
              {processSteps.map((step, idx) => (
                <div key={idx} className="relative flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm shrink-0 relative z-10">
                    {idx + 1}
                  </div>
                  <div className="bg-white rounded-2xl border border-slate-100 p-5 flex-1 shadow-sm">
                    <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                    <p className="text-slate-500 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Lead Form */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3 text-balance">
            Заказать услугу
          </h2>
          <p className="text-slate-500 mb-8">
            Перезвоним в течении дня для уточнения деталей
          </p>
          <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 sm:p-8">
            <LeadForm />
          </div>
        </div>
      </section>
    </>
  );
}
