import type { AcModel, Service } from "@/types";

export const acModels: AcModel[] = [
  // ── Centek (бюджет) ────────────────────────────────────────────────
  {
    id: "centek-07",
    brand: "Centek",
    name: "Centek CT-65A07",
    price: 18900,
    powerKw: 2.1,
    btu: 7,
    roomMin: 15,
    roomMax: 20,
    features: ["Бюджетный", "Простой монтаж", "Надёжный"],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
  },
  {
    id: "centek-09",
    brand: "Centek",
    name: "Centek CT-65A09",
    price: 23900,
    powerKw: 2.6,
    btu: 9,
    roomMin: 20,
    roomMax: 27,
    features: ["Бюджетный", "Тихий режим", "R-32 фреон"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
  },
  {
    id: "centek-12",
    brand: "Centek",
    name: "Centek CT-65A12",
    price: 29900,
    powerKw: 3.5,
    btu: 12,
    roomMin: 27,
    roomMax: 35,
    features: ["Бюджетный", "Авторестарт", "Таймер"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "centek-18",
    brand: "Centek",
    name: "Centek CT-65A18",
    price: 43900,
    powerKw: 5.3,
    btu: 18,
    roomMin: 35,
    roomMax: 50,
    features: ["Бюджетный", "Мощный", "Авторестарт"],
    image: "https://images.unsplash.com/photo-1581275325872-21e3dced25a8?w=600&q=80",
  },
  {
    id: "centek-24",
    brand: "Centek",
    name: "Centek CT-65A24",
    price: 57900,
    powerKw: 7.0,
    btu: 24,
    roomMin: 50,
    roomMax: 65,
    features: ["Бюджетный", "Большая мощность", "Турборежим"],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
  },

  // ── Ballu (премиум) ────────────────────────────────────────────────
  {
    id: "ballu-07",
    brand: "Ballu",
    name: "Ballu BSAG-07HN8",
    price: 39900,
    powerKw: 2.1,
    btu: 7,
    roomMin: 15,
    roomMax: 20,
    features: ["Инверторный", "Тихий", "Самоочистка"],
    image: "https://images.unsplash.com/photo-1621905251189-08b45d6a269e?w=600&q=80",
  },
  {
    id: "ballu-09",
    brand: "Ballu",
    name: "Ballu BSAG-09HN8",
    price: 48900,
    powerKw: 2.6,
    btu: 9,
    roomMin: 20,
    roomMax: 27,
    popular: true,
    features: ["Инверторный", "WiFi", "Фильтр плазма"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    id: "ballu-12",
    brand: "Ballu",
    name: "Ballu BSAG-12HN8",
    price: 62900,
    powerKw: 3.5,
    btu: 12,
    roomMin: 27,
    roomMax: 35,
    popular: true,
    features: ["Инверторный", "WiFi", "Очистка воздуха", "Тихий ход"],
    image: "https://images.unsplash.com/photo-1581275325872-21e3dced25a8?w=600&q=80",
  },
  {
    id: "ballu-18",
    brand: "Ballu",
    name: "Ballu BSAG-18HN8",
    price: 89900,
    powerKw: 5.3,
    btu: 18,
    roomMin: 35,
    roomMax: 50,
    features: ["Инверторный", "WiFi", "Ионизатор", "Авторестарт"],
    image: "https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=600&q=80",
  },
  {
    id: "ballu-24",
    brand: "Ballu",
    name: "Ballu BSAG-24HN8",
    price: 119900,
    powerKw: 7.0,
    btu: 24,
    roomMin: 50,
    roomMax: 65,
    features: ["Инверторный", "WiFi", "Ионизатор", "Турборежим"],
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
];

export const services: Service[] = [
  {
    id: "installation",
    icon: "❄️",
    title: "Монтаж кондиционеров",
    description:
      "Профессиональный монтаж кондиционера любого типа за 1 день. Берём на себя всё: от крепления до подключения электрики.",
    details: [
      "Установка сплит-системы",
      "Заправка фреоном и проверка на утечку",
      "Электрическое подключение",
      "Тест-запуск и сдача объекта",
      "Гарантия на монтаж 12 месяцев",
    ],
    price: "от ₽4 500",
  },
  {
    id: "drilling",
    icon: "🔩",
    title: "Алмазное бурение",
    description:
      "Точное алмазное бурение бетона, кирпича и армированных стен без повреждений конструкции.",
    details: [
      "Отверстия Ø50–200 мм",
      "Глубина до 500 мм",
      "Без вибрационных повреждений",
      "Пылесос — защита от пыли",
      "Выезд в день обращения",
    ],
    price: "от ₽2 000",
  },
  {
    id: "cutting",
    icon: "⚙️",
    title: "Алмазная резка",
    description:
      "Резка стен и полов алмазными дисками. Идеально для прокладки трасс кондиционеров, вентиляции и кабелей.",
    details: [
      "Прямые и фигурные резы",
      "Любая толщина стены",
      "Минимальный шум",
      "Чистый результат",
      "Работаем 7 дней в неделю",
    ],
    price: "от ₽1 500",
  },
  {
    id: "maintenance",
    icon: "🔧",
    title: "Обслуживание и ремонт",
    description:
      "Полный цикл обслуживания кондиционера: чистка, дозаправка фреоном, диагностика и замена запчастей.",
    details: [
      "Чистка фильтров и теплообменника",
      "Поиск утечек фреона",
      "Ремонт платы и датчиков",
      "Обслуживание компрессора",
      "Абонементное обслуживание",
    ],
    price: "от ₽2 500",
  },
];

export const portfolioItems = [
  {
    id: "p1",
    title: "Монтаж в гостиной",
    type: "Установка кондиционера",
    image:
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80",
  },
  {
    id: "p2",
    title: "Климат в офисе",
    type: "Коммерческий объект",
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80",
  },
  {
    id: "p3",
    title: "Алмазное бурение",
    type: "Алмазное бурение",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  },
  {
    id: "p4",
    title: "Кассетный кондиционер в спальне",
    type: "Установка кондиционера",
    image:
      "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80",
  },
  {
    id: "p5",
    title: "Вентиляция ресторана",
    type: "Коммерческий объект",
    image:
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80",
  },
  {
    id: "p6",
    title: "Бурение бетонной плиты",
    type: "Алмазное бурение",
    image:
      "https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800&q=80",
  },
];
