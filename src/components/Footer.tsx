import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="size-8 bg-blue-600 rounded-xl flex items-center justify-center">
                <span className="text-white text-sm font-bold">❄</span>
              </div>
              <span className="font-bold text-white text-lg">
                ClimaTech07
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-pretty">
              Профессиональная установка кондиционеров и алмазное бурение. Быстро,
              чисто, с гарантией.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm text-balance">Навигация</h4>
            <ul className="space-y-2 text-sm">
              {[
                { href: "/calculator", label: "Калькулятор" },
                { href: "/catalog", label: "Каталог" },
                { href: "/services", label: "Услуги" },
                { href: "/#portfolio", label: "Портфолио" },
              ].map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm text-balance">Услуги</h4>
            <ul className="space-y-2 text-sm">
              {[
                "Монтаж кондиционеров",
                "Алмазное бурение",
                "Алмазная резка",
                "Обслуживание и ремонт",
              ].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="hover:text-white transition-colors"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm text-balance">Контакты</h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+79963001787"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="size-4 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  +7 (996) 300-17-87
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/79963001787"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors flex items-center gap-2"
                >
                  <svg className="size-4 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.134.557 4.135 1.532 5.874L0 24l6.29-1.51A11.935 11.935 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-1.9 0-3.7-.498-5.27-1.375l-.376-.215-3.733.896.944-3.64-.237-.387A9.944 9.944 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                  </svg>
                  WhatsApp
                </a>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-4 h-4 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Баксан, КБР<br />Режим работы: 8:00–18:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© {new Date().getFullYear()} ClimaTech07. Все права защищены.</p>
          <p>
            <Link href="/privacy" className="hover:text-white transition-colors">
              Политика конфиденциальности
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
