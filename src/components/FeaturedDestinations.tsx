import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Thermometer, ArrowRight } from "lucide-react"

const models = [
  {
    name: "Energolux Lausanne",
    series: "Серия Comfort",
    image: "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/785fdd13-b414-4725-af6f-99b52a6e858b.jpg",
    description: "Надёжный кондиционер для квартиры или офиса. Тихая работа, экономичное энергопотребление",
    price: "от 28 900 ₽",
  },
  {
    name: "Energolux Davos",
    series: "Серия Premium",
    image: "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/ea65e92e-9c2f-40dc-8328-d061f5312676.jpg",
    description: "Инверторная технология для максимального комфорта. Работает при -25°C на обогрев",
    price: "от 39 900 ₽",
  },
  {
    name: "Energolux Bern",
    series: "Серия Inverter",
    image: "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/ea65e94e-9c2f-40dc-8328-d061f5312676.jpg",
    description: "Мощный инвертор с Wi-Fi управлением и умным климат-контролем для больших помещений",
    price: "от 54 900 ₽",
  },
  {
    name: "Energolux Geneva",
    series: "Серия Ultra",
    image: "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/785fdd13-b414-4725-af6f-99b52a6e858b.jpg",
    description: "Флагманская модель с очисткой воздуха, ионизацией и управлением через мобильное приложение",
    price: "от 68 900 ₽",
  },
  {
    name: "Energolux Lugano",
    series: "Серия Economy",
    image: "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/ea65e94e-9c2f-40dc-8328-d061f5312676.jpg",
    description: "Бюджетное решение для небольших помещений до 20 м². Простое управление, надёжная работа",
    price: "от 18 900 ₽",
  },
  {
    name: "Energolux Basel",
    series: "Серия Industrial",
    image: "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/785fdd13-b414-4725-af6f-99b52a6e858b.jpg",
    description: "Полупромышленные системы для торговых залов, офисов и производственных помещений",
    price: "от 89 900 ₽",
  },
]

export function FeaturedDestinations() {
  return (
    <section id="catalog" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Каталог <span className="font-semibold">кондиционеров</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Официальный дилер Energolux — широкий выбор моделей для квартир, домов и коммерческих объектов
          </p>
        </div>

        {/* Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {models.map((model, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-80 overflow-hidden">
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
                  <h3 className="text-2xl font-semibold mb-2">{model.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-sm font-semibold text-primary">{model.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Подробнее
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-16">
          <Button variant="outline" size="lg" className="rounded-full px-8 border-2 bg-transparent">
            Весь каталог
          </Button>
        </div>
      </div>
    </section>
  )
}