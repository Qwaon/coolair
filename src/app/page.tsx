import Link from "next/link";
import Image from "next/image";
import LeadForm from "@/components/LeadForm";
import AcCard from "@/components/AcCard";
import InView from "@/components/InView";
import { acModels, services, portfolioItems } from "@/data/ac-models";
import type { ReactNode } from "react";

const serviceIcons: Record<string, ReactNode> = {
  installation: (
    <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12h18M12 3v18M5.636 5.636l12.728 12.728M18.364 5.636 5.636 18.364" />
    </svg>
  ),
  drilling: (
    <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
    </svg>
  ),
  cutting: (
    <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 0 1 1.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.559.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.894.149c-.424.07-.764.383-.929.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 0 1-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.398.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 0 1-.12-1.45l.527-.737c.25-.35.272-.806.108-1.204-.165-.397-.506-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.108-1.204l-.526-.738a1.125 1.125 0 0 1 .12-1.45l.773-.773a1.125 1.125 0 0 1 1.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894ZM15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
    </svg>
  ),
  maintenance: (
    <svg className="size-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
    </svg>
  ),
};

const benefits: { icon: ReactNode; title: string; desc: string }[] = [
  {
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
      </svg>
    ),
    title: "Монтаж за 1 день",
    desc: "Полная установка за один день с минимальным вмешательством в ваш распорядок.",
  },
  {
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75 11.25 15 15 9.75m-3-7.036A11.959 11.959 0 0 1 3.598 6 11.99 11.99 0 0 0 3 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285Z" />
      </svg>
    ),
    title: "Гарантия 1 год",
    desc: "Полная гарантия на все виды работ и оборудование для вашего спокойствия.",
  },
  {
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75a4.5 4.5 0 0 1-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 1 1-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 0 1 6.336-4.486l-3.276 3.276a3.004 3.004 0 0 0 2.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852Z" />
      </svg>
    ),
    title: "Профессиональный инструмент",
    desc: "Новейшее алмазное оборудование и профессиональный инструмент для монтажа.",
  },
  {
    icon: (
      <svg className="size-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
      </svg>
    ),
    title: "Чистая работа",
    desc: "Защищаем ваше пространство и убираем после себя после каждого монтажа.",
  },
];

export default function HomePage() {
  const featuredModels = acModels.filter((m) =>
    ["ballu-09", "ballu-12", "centek-09"].includes(m.id)
  );

  return (
    <>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="relative min-h-dvh flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-slate-100">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=1600&q=70"
            alt=""
            fill
            className="object-cover opacity-10"
            priority
            sizes="100vw"
            aria-hidden="true"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-white/40 to-white/80" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-24 pb-16">
          {/* Badge */}
          <div
            className="animate-rise inline-flex items-center gap-2 bg-blue-50 border border-blue-100 rounded-full px-4 py-1.5 mb-8"
            style={{ animationDelay: "0ms" }}
          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span className="text-blue-700 text-sm font-medium">
              Доступно сегодня · Баксан
            </span>
          </div>

          <h1
            className="animate-rise text-4xl sm:text-6xl lg:text-7xl font-bold text-slate-900 leading-[1.05] mb-6 text-balance"
            style={{ animationDelay: "80ms" }}
          >
            Установка
            <br />
            <span className="text-blue-600">кондиционера</span>
            <br />
            за 1 день
          </h1>

          <p
            className="animate-rise text-base sm:text-lg md:text-xl text-slate-500 max-w-2xl mx-auto mb-8 sm:mb-10 leading-relaxed text-pretty"
            style={{ animationDelay: "180ms" }}
          >
            Бесплатная консультация и подбор кондиционера под вашу площадь.
            Профессиональный монтаж с гарантией 1 год.
          </p>

          <div
            className="animate-rise flex flex-col sm:flex-row gap-3 justify-center mb-12"
            style={{ animationDelay: "260ms" }}
          >
            <Link
              href="/calculator"
              className="inline-flex items-center justify-center h-12 sm:h-14 px-5 sm:px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full text-sm sm:text-base font-semibold transition-colors"
            >
              Подобрать кондиционер
            </Link>
            <a
              href="tel:+79993001787"
              className="inline-flex items-center justify-center h-12 sm:h-14 px-5 sm:px-8 rounded-full text-sm sm:text-base font-semibold border border-slate-200 hover:border-slate-300 bg-white/80 hover:bg-white transition-colors"
            >
              <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Получить консультацию
            </a>
          </div>

          {/* Social proof */}
          <div
            className="animate-rise flex items-center justify-center gap-6 text-sm text-slate-400"
            style={{ animationDelay: "360ms" }}
          >
            <span className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 (999) 300-17-87
            </span>
            <span className="text-slate-200" aria-hidden="true">·</span>
            <a
              href="https://wa.me/79993001787"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-slate-600 transition-colors"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.557 4.135 1.532 5.874L0 24l6.29-1.51A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.498-5.27-1.375l-.376-.215-3.733.896.944-3.64-.237-.387A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
              </svg>
              WhatsApp
            </a>
          </div>
        </div>

        {/* Scroll hint */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-slate-400 animate-bounce" aria-hidden="true">
          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </section>

      {/* ─── STATS ────────────────────────────────────────── */}
      <section className="bg-blue-600 py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 text-center">
            {[
              { value: "100+", label: "Установок выполнено" },
              { value: "1 день", label: "Срок монтажа" },
              { value: "1 год", label: "Гарантия" },
              { value: "в течение дня", label: "Перезвоним" },
            ].map((stat) => (
              <InView key={stat.label}>
                <p className="text-xl sm:text-3xl font-bold text-white mb-1 tabular-nums">{stat.value}</p>
                <p className="text-blue-200 text-xs sm:text-sm">{stat.label}</p>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* ─── BENEFITS ─────────────────────────────────────── */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InView>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3 text-balance">
                Почему выбирают нас
              </h2>
              <p className="text-slate-500 text-base sm:text-lg text-pretty">
                Профессиональный сервис с вниманием к каждой детали
              </p>
            </div>
          </InView>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {benefits.map((b, i) => (
              <InView key={b.title} delay={i * 80}>
                <div className="text-center p-6 rounded-2xl border border-transparent hover:border-slate-100 hover:bg-slate-50/60 transition-colors h-full">
                  <div className="size-16 bg-blue-600 rounded-3xl flex items-center justify-center mx-auto mb-5 text-white shadow-sm">
                    {b.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 text-lg mb-2 text-balance">
                    {b.title}
                  </h3>
                  <p className="text-slate-500 text-sm leading-relaxed text-pretty">{b.desc}</p>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* ─── SERVICES PREVIEW ─────────────────────────────── */}
      <section className="py-12 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InView>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3 text-balance">
                Наши услуги
              </h2>
              <p className="text-slate-500 text-base sm:text-lg text-pretty">
                Комплексные решения для климата и алмазных работ
              </p>
            </div>
          </InView>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {services.slice(0, 4).map((s, i) => (
              <InView key={s.id} delay={i * 80}>
                <div className="bg-white rounded-2xl p-5 sm:p-8 border border-slate-100 shadow-sm hover:border-blue-100 hover:shadow-md transition-[border-color,box-shadow] h-full">
                  <div className="size-14 bg-blue-600 rounded-3xl flex items-center justify-center mb-5 text-white shadow-sm">
                    {serviceIcons[s.id]}
                  </div>
                  <h3 className="font-bold text-slate-900 text-xl mb-3">
                    {s.title}
                  </h3>
                  <p className="text-slate-500 leading-relaxed mb-4 text-pretty">
                    {s.description}
                  </p>
                  <p className="text-blue-600 font-semibold">{s.price}</p>
                </div>
              </InView>
            ))}
          </div>

          <InView className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center justify-center h-12 px-8 rounded-full border border-slate-200 hover:border-slate-300 hover:bg-slate-50 text-slate-700 font-semibold text-base transition-colors"
            >
              Все услуги
            </Link>
          </InView>
        </div>
      </section>

      {/* ─── FEATURED MODELS ──────────────────────────────── */}
      <section className="py-12 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InView>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3 text-balance">
                Популярные модели
              </h2>
              <p className="text-slate-500 text-base sm:text-lg text-pretty">
                Наши самые продаваемые кондиционеры
              </p>
            </div>
          </InView>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-10">
            {featuredModels.map((m, i) => (
              <InView key={m.id} delay={i * 80}>
                <AcCard model={m} />
              </InView>
            ))}
          </div>

          <InView className="text-center">
            <Link
              href="/catalog"
              className="inline-flex items-center justify-center h-12 px-8 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-base transition-colors"
            >
              Весь каталог
            </Link>
          </InView>
        </div>
      </section>

      {/* ─── PORTFOLIO ────────────────────────────────────── */}
      <section id="portfolio" className="py-12 sm:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InView>
            <div className="text-center mb-10 sm:mb-16">
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3 text-balance">Наши работы</h2>
              <p className="text-slate-500 text-base sm:text-lg text-pretty">
                Посмотрите качество наших монтажей
              </p>
            </div>
          </InView>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6">
            {portfolioItems.slice(0, 6).map((item, i) => (
              <InView key={item.id} delay={i * 60}>
                <div className="group relative rounded-2xl overflow-hidden bg-slate-200 aspect-[4/3] cursor-pointer">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-white/90 backdrop-blur-sm text-slate-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                      После
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-[opacity,transform] duration-300">
                    <p className="text-white font-bold text-lg">{item.title}</p>
                    <p className="text-white/70 text-sm">{item.type}</p>
                  </div>
                </div>
              </InView>
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEAD FORM ────────────────────────────────────── */}
      <section id="contact" className="py-12 sm:py-24 bg-white">
        <div className="max-w-lg mx-auto px-4 sm:px-6">
          <InView>
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-3 text-balance">
                Получить бесплатный расчёт
              </h2>
              <p className="text-slate-500 text-base sm:text-lg text-pretty">
                Оставьте данные — перезвоним в течение дня
              </p>
            </div>
          </InView>

          <InView delay={100}>
            <div className="bg-white rounded-3xl border border-slate-100 shadow-sm p-5 sm:p-8">
              <LeadForm />
            </div>
          </InView>
        </div>
      </section>
    </>
  );
}
