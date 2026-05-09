import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Star } from "lucide-react"
import Icon from "@/components/ui/icon"

const packages = [
  {
    title: "Замер",
    duration: "1–2 часа",
    area: "любая площадь",
    rating: "5.0",
    reviews: "143",
    image: "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/13879f03-d861-482b-a712-750aff8fa5fa.jpg",
    highlights: ["Выезд специалиста", "Оценка объекта", "Подбор оборудования", "Смета бесплатно"],
    price: "Бесплатно",
  },
  {
    title: "Продажа и монтаж",
    duration: "1 день",
    area: "до 25 м²",
    rating: "5.0",
    reviews: "312",
    image: "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/13879f03-d861-482b-a712-750aff8fa5fa.jpg",
    highlights: ["Выбор модели", "Монтаж трассы", "Заправка фреоном", "Проверка работы"],
    price: "от 46 900 ₽",
  },
  {
    title: "Техническое обслуживание",
    duration: "2–3 часа",
    area: "любая площадь",
    rating: "4.8",
    reviews: "198",
    image: "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/8e392be2-2fb6-4621-a9d4-4b237512d5e3.jpg",
    highlights: ["Чистка фильтров", "Промывка дренажа", "Проверка давления", "Антибактериальная обработка"],
    price: "от 6 500 ₽",
  },
]

export function PopularPackages() {
  return (
    <section id="services" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Наши <span className="font-semibold">услуги</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Полный цикл: от выбора модели до регулярного обслуживания — всё в одном месте
          </p>
        </div>

        {/* Packages Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-0 bg-card hover:shadow-2xl transition-all duration-500"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={pkg.image || "/placeholder.svg"}
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />

                {/* Rating Badge */}
                <div className="absolute top-4 right-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                  <span className="text-xs font-semibold">{pkg.rating}</span>
                  <span className="text-xs text-muted-foreground">({pkg.reviews})</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">{pkg.title}</h3>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1.5">
                      <Clock className="h-4 w-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Icon name="Maximize2" size={16} />
                      <span>{pkg.area}</span>
                    </div>
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2">
                    {pkg.highlights.map((highlight, i) => (
                      <span key={i} className="text-xs px-3 py-1 bg-muted rounded-full">
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Price & CTA */}
                <div className="flex items-center justify-between pt-6 border-t border-border">
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Цена</div>
                    <div className="text-2xl font-semibold text-primary">{pkg.price}</div>
                  </div>
                  <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full">
                    Заказать
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}