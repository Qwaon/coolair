import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Политика конфиденциальности — ClimaTech07",
  description:
    "Политика конфиденциальности и обработки персональных данных компании ClimaTech07.",
};

export default function PrivacyPage() {
  return (
    <section className="pt-28 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <h1 className="text-2xl sm:text-4xl font-bold text-slate-900 mb-4 text-balance">
          Политика конфиденциальности
        </h1>
        <p className="text-slate-500 text-sm mb-10">
          Последнее обновление: 18 марта 2026 г.
        </p>

        <div className="prose prose-slate max-w-none space-y-8 text-slate-700">
          <Section title="1. Общие положения">
            <p>
              Настоящая политика конфиденциальности (далее — «Политика») описывает,
              как ИП / компания <strong>ClimaTech07</strong> (далее — «Оператор»)
              собирает, использует и защищает персональные данные пользователей
              сайта (далее — «Пользователь»).
            </p>
            <p>
              Используя сайт и заполняя формы обратной связи, Пользователь
              выражает согласие с условиями настоящей Политики.
            </p>
          </Section>

          <Section title="2. Какие данные мы собираем">
            <ul className="list-disc pl-5 space-y-1">
              <li>Имя и фамилия (если указаны)</li>
              <li>Номер телефона</li>
              <li>Текст сообщения / описание запроса</li>
            </ul>
            <p className="mt-3">
              Мы не собираем данные банковских карт, паспортные данные или иные
              конфиденциальные сведения, не связанные с заказом услуг.
            </p>
          </Section>

          <Section title="3. Цели обработки данных">
            <ul className="list-disc pl-5 space-y-1">
              <li>Обратная связь и консультирование по услугам</li>
              <li>Оформление и исполнение заказа на монтаж / обслуживание</li>
              <li>Улучшение качества сервиса</li>
            </ul>
          </Section>

          <Section title="4. Хранение и защита данных">
            <p>
              Оператор принимает необходимые технические и организационные меры
              для защиты персональных данных от несанкционированного доступа,
              изменения, раскрытия или уничтожения.
            </p>
            <p>
              Данные хранятся не дольше, чем этого требуют цели обработки, и
              удаляются по обращению Пользователя.
            </p>
          </Section>

          <Section title="5. Передача третьим лицам">
            <p>
              Мы не продаём и не передаём персональные данные третьим лицам,
              за исключением случаев, когда это необходимо для исполнения
              обязательств перед Пользователем или требуется по закону.
            </p>
          </Section>

          <Section title="6. Права пользователя">
            <p>Пользователь вправе в любой момент:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Запросить информацию об обрабатываемых данных</li>
              <li>Потребовать исправления или удаления данных</li>
              <li>Отозвать согласие на обработку</li>
            </ul>
            <p className="mt-3">
              Для этого свяжитесь с нами по телефону{" "}
              <a
                href="tel:+79993001787"
                className="text-blue-600 hover:underline"
              >
                +7 (999) 300-17-87
              </a>{" "}
              или через WhatsApp.
            </p>
          </Section>

          <Section title="7. Контактная информация">
            <p>
              <strong>ClimaTech07</strong>
              <br />
              г. Баксан, КБР
              <br />
              Телефон:{" "}
              <a
                href="tel:+79993001787"
                className="text-blue-600 hover:underline"
              >
                +7 (999) 300-17-87
              </a>
            </p>
          </Section>
        </div>

        <div className="mt-12 pt-6 border-t border-slate-100">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-blue-600 text-sm font-medium hover:text-blue-700 transition-colors"
          >
            <svg className="size-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            На главную
          </Link>
        </div>
      </div>
    </section>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h2 className="text-lg font-bold text-slate-900 mb-3">{title}</h2>
      <div className="space-y-2 text-slate-600 leading-relaxed text-pretty">
        {children}
      </div>
    </div>
  );
}
