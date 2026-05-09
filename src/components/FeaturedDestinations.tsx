import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Thermometer, ArrowRight } from "lucide-react"

const IMAGE_AC = "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/785fdd13-b414-4725-af6f-99b52a6e858b.jpg"
const IMAGE_AC2 = "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/ea65e94e-9c2f-40dc-8328-d061f5312676.jpg"

const models = [
  // Существующие модели
  {
    name: "Energolux Lausanne PRO SAS07AR2-A/SAU07AR2-A",
    series: "Lausanne PRO",
    image: IMAGE_AC,
    description: "Не инвертор · до 20 м² · 2.35 кВт",
    price: "28 900 ₽",
  },
  {
    name: "Energolux Davos",
    series: "Давос",
    image: IMAGE_AC2,
    description: "Инверторная технология для максимального комфорта. Работает при -25°C на обогрев",
    price: "от 39 900 ₽",
  },
  {
    name: "Energolux Bern",
    series: "Берн",
    image: IMAGE_AC2,
    description: "Мощный инвертор с Wi-Fi управлением и умным климат-контролем для больших помещений",
    price: "от 54 900 ₽",
  },
  {
    name: "Energolux Geneva",
    series: "Женева",
    image: IMAGE_AC,
    description: "Флагманская модель с очисткой воздуха, ионизацией и управлением через мобильное приложение",
    price: "от 68 900 ₽",
  },
  {
    name: "Energolux Lugano",
    series: "Лугано",
    image: IMAGE_AC2,
    description: "Бюджетное решение для небольших помещений до 20 м². Простое управление, надёжная работа",
    price: "от 18 900 ₽",
  },
  {
    name: "Energolux Basel",
    series: "Базель",
    image: IMAGE_AC,
    description: "Полупромышленные системы для торговых залов, офисов и производственных помещений",
    price: "от 89 900 ₽",
  },
  // Новые модели Lausanne
  {
    name: "Energolux Lausanne SAS18L4-A/SAU18L4-A",
    series: "Lausanne",
    image: IMAGE_AC,
    description: "Не инвертор · до 53 м² · 5.3 кВт",
    price: "50 200 ₽",
  },
  {
    name: "Energolux Lausanne SAS36L4-A/SAU36L4-A",
    series: "Lausanne",
    image: IMAGE_AC2,
    description: "Не инвертор · до 97 м² · 9.7 кВт",
    price: "109 500 ₽",
  },
  {
    name: "Energolux Lausanne SAS07AR1-A/SAU07AR1-A-WS40",
    series: "Lausanne",
    image: IMAGE_AC,
    description: "Не инвертор · до 20 м² · 2.346 кВт",
    price: "44 700 ₽",
  },
  {
    name: "Energolux Lausanne SAS09AR1-A/SAU09AR1-A-WS30",
    series: "Lausanne",
    image: IMAGE_AC2,
    description: "Не инвертор · до 25 м² · 2.639 кВт",
    price: "44 000 ₽",
  },
  {
    name: "Energolux Lausanne SAS09AR1-A/SAU09AR1-A",
    series: "Lausanne",
    image: IMAGE_AC,
    description: "Не инвертор · до 25 м² · 2.639 кВт",
    price: "31 300 ₽",
  },
  {
    name: "Energolux Lausanne SAS12AR1-A/SAU12AR1-A-WS40",
    series: "Lausanne",
    image: IMAGE_AC2,
    description: "Не инвертор · до 35 м² · 3.519 кВт",
    price: "57 500 ₽",
  },
  {
    name: "Energolux Lausanne SAS18AR1-A/SAU18AR1-A-WS30",
    series: "Lausanne",
    image: IMAGE_AC,
    description: "Не инвертор · до 50 м² · 5.279 кВт",
    price: "81 900 ₽",
  },
  {
    name: "Energolux Lausanne SAS18AR1-A/SAU18AR1-A",
    series: "Lausanne",
    image: IMAGE_AC2,
    description: "Не инвертор · до 50 м² · 5.279 кВт",
    price: "67 900 ₽",
  },
  {
    name: "Energolux Lausanne SAS24AR1-A/SAU24AR1-A",
    series: "Lausanne",
    image: IMAGE_AC,
    description: "Не инвертор · до 70 м² · 7.038 кВт",
    price: "87 700 ₽",
  },
  // Lausanne LT (высокотемпературные)
  {
    name: "Energolux Lausanne LT SAS07AR1-A-LT/SAU07AR1-A-LT",
    series: "Lausanne LT",
    image: IMAGE_AC2,
    description: "Высокотемп. установка · камера до 20 м³ · +2...+15°C · настенный",
    price: "106 700 ₽",
  },
  {
    name: "Energolux Lausanne LT SAS07AR1-A-LT/SAU07AR1-A-LT-WS30",
    series: "Lausanne LT",
    image: IMAGE_AC,
    description: "Высокотемп. установка · камера до 20 м³ · +2...+15°C · настенный",
    price: "116 600 ₽",
  },
  {
    name: "Energolux Lausanne LT SAS09AR1-A-LT/SAU09AR1-A-LT-WS40",
    series: "Lausanne LT",
    image: IMAGE_AC2,
    description: "Высокотемп. установка · камера до 20 м³ · +2...+15°C · настенный",
    price: "125 300 ₽",
  },
  {
    name: "Energolux Lausanne LT SAS09AR1-A-LT/SAU09AR1-A-LT-WS30",
    series: "Lausanne LT",
    image: IMAGE_AC,
    description: "Высокотемп. установка · камера до 20 м³ · +2...+15°C · настенный",
    price: "118 700 ₽",
  },
  {
    name: "Energolux Lausanne LT SAS12AR1-A-LT/SAU12AR1-A-LT",
    series: "Lausanne LT",
    image: IMAGE_AC2,
    description: "Высокотемп. установка · камера до 20 м³ · +2...+15°C · настенный",
    price: "119 500 ₽",
  },
  {
    name: "Energolux Lausanne LT SAS12AR1-A-LT/SAU12AR1-A-LT-WS40",
    series: "Lausanne LT",
    image: IMAGE_AC,
    description: "Высокотемп. установка · камера до 20 м³ · +2...+15°C · настенный",
    price: "136 000 ₽",
  },
  {
    name: "Energolux Lausanne LT SAS18AR1-A-LT/SAU18AR1-A-LT-WS30",
    series: "Lausanne LT",
    image: IMAGE_AC2,
    description: "Высокотемп. установка · камера 21–30 м³ · +2...+15°C · настенный",
    price: "156 600 ₽",
  },
  // Lausanne PRO
  {
    name: "Energolux Lausanne PRO SAS12AR2-A/SAU12AR2-A",
    series: "Lausanne PRO",
    image: IMAGE_AC,
    description: "Не инвертор · до 35 м² · 3.51 кВт",
    price: "45 400 ₽",
  },
  {
    name: "Energolux Lausanne Pro SAS07AR2-A/SAU07AR2-A-WS30",
    series: "Lausanne PRO",
    image: IMAGE_AC2,
    description: "Не инвертор · до 20 м² · 2.35 кВт",
    price: "43 500 ₽",
  },
  {
    name: "Energolux Lausanne Pro SAS09AR2-A/SAU09AR2-A-WS30",
    series: "Lausanne PRO",
    image: IMAGE_AC,
    description: "Не инвертор · до 25 м² · 2.63 кВт",
    price: "46 000 ₽",
  },
]

const SERIES_FILTERS = ["Все", "Lausanne", "Lausanne LT", "Lausanne PRO"]
const INITIAL_COUNT = 6

export function FeaturedDestinations() {
  const [activeFilter, setActiveFilter] = useState("Все")
  const [showAll, setShowAll] = useState(false)

  const filtered = activeFilter === "Все"
    ? models
    : models.filter((m) => m.series === activeFilter)

  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)

  return (
    <section id="catalog" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Каталог <span className="font-semibold">кондиционеров</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Официальный дилер Energolux — широкий выбор моделей для квартир, домов и коммерческих объектов
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {SERIES_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => { setActiveFilter(f); setShowAll(false) }}
              className={`px-5 py-2 rounded-full text-sm font-medium border-2 transition-all ${
                activeFilter === f
                  ? "bg-primary text-primary-foreground border-primary"
                  : "bg-transparent border-border text-foreground/70 hover:border-primary hover:text-primary"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {visible.map((model, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={model.image || "/placeholder.svg"}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Series Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Thermometer className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium">{model.series}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-base font-semibold mb-2 leading-snug">{model.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{model.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Заказать
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Show More / Less */}
        {filtered.length > INITIAL_COUNT && (
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="rounded-full px-8 border-2 bg-transparent"
              onClick={() => setShowAll(!showAll)}
            >
              {showAll ? "Свернуть" : `Показать все (${filtered.length})`}
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
