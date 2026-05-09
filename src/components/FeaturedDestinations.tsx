import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Thermometer, ArrowRight } from "lucide-react"

const IMAGE_AC = "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/785fdd13-b414-4725-af6f-99b52a6e858b.jpg"
const IMAGE_AC2 = "https://cdn.poehali.dev/projects/f7739e63-295a-4d81-92d6-a734901b7e1c/files/ea65e94e-9c2f-40dc-8328-d061f5312676.jpg"

interface Model {
  name: string
  series: string
  image: string
  description: string
  price: string
}

const models: Model[] = [
  { name: "Energolux Lausanne PRO SAS07AR2-A/SAU07AR2-A", series: "Lausanne PRO", image: IMAGE_AC, description: "Не инвертор · до 20 м² · 2.35 кВт", price: "30 800 ₽" },
  { name: "Energolux Lausanne PRO SAS09AR2-A/SAU09AR2-A", series: "Lausanne PRO", image: IMAGE_AC2, description: "Не инвертор · до 25 м² · 2.63 кВт", price: "33 300 ₽" },
  { name: "Energolux Lausanne SAS09AR1-A/SAU09AR1-A", series: "Lausanne", image: IMAGE_AC, description: "Не инвертор · до 25 м² · 2.639 кВт", price: "31 300 ₽" },
  { name: "Energolux Lausanne SAS12AR1-A/SAU12AR1-A", series: "Lausanne", image: IMAGE_AC2, description: "Не инвертор · до 35 м² · 3.519 кВт", price: "42 000 ₽" },
  { name: "Energolux Lausanne SAS18AR1-A/SAU18AR1-A", series: "Lausanne", image: IMAGE_AC, description: "Не инвертор · до 50 м² · 5.279 кВт", price: "67 900 ₽" },
  { name: "Energolux Lausanne SAS18L4-A/SAU18L4-A", series: "Lausanne", image: IMAGE_AC2, description: "Не инвертор · до 53 м² · 5.3 кВт", price: "50 200 ₽" },
  { name: "Energolux Champery SAS07CH1-AI/SAU07CH1-AI", series: "Champery", image: IMAGE_AC, description: "Инвертор · до 22 м² · 2.2 кВт", price: "46 700 ₽" },
  { name: "Energolux Champery SAS24CH1-AI/SAU24CH1-AI", series: "Champery", image: IMAGE_AC2, description: "Инвертор · до 60 м² · 6.2 кВт", price: "122 800 ₽" },
  { name: "Energolux Champery 2 SAS24CH2-AI/SAU24CH2-AI", series: "Champery", image: IMAGE_AC, description: "Инвертор · до 70 м² · 7.1 кВт", price: "135 900 ₽" },
  { name: "Energolux Glarus DC ESAS07GL1_HDC/ESAU07GL1_HDC", series: "Glarus", image: IMAGE_AC2, description: "Инвертор · до 20 м² · 2.3 кВт", price: "36 700 ₽" },
  { name: "Energolux Glarus DC ESAS09GL1_HDC/ESAU09GL1_HDC", series: "Glarus", image: IMAGE_AC, description: "Инвертор · до 25 м² · 2.7 кВт", price: "40 000 ₽" },
  { name: "Energolux Glarus DC ESAS18GL1_HDC/ESAU18GL1_HDC", series: "Glarus", image: IMAGE_AC2, description: "Инвертор · до 50 м² · 5.7 кВт", price: "82 700 ₽" },
  { name: "Energolux Glarus DC ESAS24GL1_HDC/ESAU24GL1_HDC", series: "Glarus", image: IMAGE_AC, description: "Инвертор · до 70 м² · 7.6 кВт", price: "97 500 ₽" },
  { name: "Energolux Glarus ESAS09GL1_H/ESAU09GL1_H", series: "Glarus", image: IMAGE_AC2, description: "Не инвертор · до 25 м² · 2.6 кВт", price: "31 000 ₽" },
  { name: "Energolux Glarus ESAS12GL1_H/ESAU12GL1_H", series: "Glarus", image: IMAGE_AC, description: "Не инвертор · до 35 м² · 3.4 кВт", price: "42 200 ₽" },
  { name: "Energolux Glarus ESAS18GL1_H/ESAU18GL1_H", series: "Glarus", image: IMAGE_AC2, description: "Не инвертор · до 50 м² · 5.5 кВт", price: "70 700 ₽" },
  { name: "Energolux Murren SAS09M1-AIB/SAU09M1-AIB", series: "Murren", image: IMAGE_AC, description: "Инвертор · до 25 м² · 2.6 кВт", price: "47 700 ₽" },
  { name: "Energolux Murren SAS12M1-AIB/SAU12M1-AIB", series: "Murren", image: IMAGE_AC2, description: "Инвертор · до 35 м² · 3.4 кВт", price: "52 800 ₽" },
  { name: "Energolux Murren SAS18M1-AIB/SAU18M1-AIB", series: "Murren", image: IMAGE_AC, description: "Инвертор · до 50 м² · 5.1 кВт", price: "91 900 ₽" },
  { name: "Energolux Murren SAS24M1-AIB/SAU24M1-AIB", series: "Murren", image: IMAGE_AC2, description: "Инвертор · до 70 м² · 6.84 кВт", price: "110 400 ₽" },
  { name: "Energolux Murren white SAS12MR1-A/SAU12MR1-A", series: "Murren", image: IMAGE_AC, description: "Не инвертор · до 35 м² · 3.52 кВт", price: "38 400 ₽" },
  { name: "Energolux Murren white SAS18MR1-A/SAU18MR1-A", series: "Murren", image: IMAGE_AC2, description: "Не инвертор · до 50 м² · 5.28 кВт", price: "64 600 ₽" },
  { name: "Energolux Baden SAS07BD1-A/SAU07BD1-A", series: "Baden", image: IMAGE_AC, description: "Не инвертор · до 22 м² · 2.2 кВт", price: "31 300 ₽" },
  { name: "Energolux Baden SAS18BD1-A/SAU18BD1-A", series: "Baden", image: IMAGE_AC2, description: "Не инвертор · до 50 м² · 4.8 кВт", price: "75 000 ₽" },
  { name: "Energolux Baden SAS28BD1-A/SAU28BD1-A", series: "Baden", image: IMAGE_AC, description: "Не инвертор · до 80 м² · 8 кВт", price: "93 800 ₽" },
  { name: "Energolux Geneva 4 SAS07G4-AI/SAU07G4-AI", series: "Geneva", image: IMAGE_AC2, description: "Инвертор · до 20 м² · 2.2 кВт", price: "47 000 ₽" },
  { name: "Energolux Geneva 4 SAS09G4-AI/SAU09G4-AI", series: "Geneva", image: IMAGE_AC, description: "Инвертор · до 25 м² · 2.65 кВт", price: "50 000 ₽" },
  { name: "Energolux Geneva 4 SAS12G4-AI/SAU12G4-AI", series: "Geneva", image: IMAGE_AC2, description: "Инвертор · до 35 м² · 3.5 кВт", price: "53 300 ₽" },
  { name: "Energolux Geneva 4 SAS24G4-AI/SAU24G4-AI", series: "Geneva", image: IMAGE_AC, description: "Инвертор · до 70 м² · 7.3 кВт", price: "114 600 ₽" },
  { name: "Energolux Geneva LE SAS07G5-AI/SAU07G5-AI", series: "Geneva", image: IMAGE_AC2, description: "Инвертор · до 20 м² · 2.2 кВт", price: "51 200 ₽" },
  { name: "Energolux Geneva LE SAS12G5-AI/SAU12G5-AI", series: "Geneva", image: IMAGE_AC, description: "Инвертор · до 35 м² · 3.5 кВт", price: "56 200 ₽" },
  { name: "Energolux Winterthur HP SAS09EW1-AI/SAU09EW1-AI", series: "Winterthur", image: IMAGE_AC2, description: "Инвертор · до 25 м² · 2.7 кВт", price: "56 700 ₽" },
  { name: "Energolux Winterthur HP SAS12EW1-AI/SAU12EW1-AI", series: "Winterthur", image: IMAGE_AC, description: "Инвертор · до 35 м² · 3.5 кВт", price: "63 000 ₽" },
  { name: "Energolux Winterthur HP SAS18EW1-AI/SAU18EW1-AI", series: "Winterthur", image: IMAGE_AC2, description: "Инвертор · до 50 м² · 5.4 кВт", price: "103 400 ₽" },
  { name: "Energolux Winterthur HP SAS24EW1-AI/SAU24EW1-AI", series: "Winterthur", image: IMAGE_AC, description: "Инвертор · до 70 м² · 7.3 кВт", price: "125 200 ₽" },
  { name: "Energolux Zurich 5 SAS07Z5-AI/SAU07Z5-AI", series: "Zurich", image: IMAGE_AC2, description: "Инвертор · до 20 м² · 2.35 кВт", price: "33 800 ₽" },
  { name: "Energolux Zurich 5 SAS09Z5-AI/SAU09Z5-AI", series: "Zurich", image: IMAGE_AC, description: "Инвертор · до 25 м² · 2.7 кВт", price: "37 400 ₽" },
  { name: "Energolux Zurich 5 SAS12Z5-AI/SAU12Z5-AI", series: "Zurich", image: IMAGE_AC2, description: "Инвертор · до 35 м² · 3.55 кВт", price: "43 800 ₽" },
  { name: "Energolux Zurich 5 SAS18Z5-AI/SAU18Z5-AI", series: "Zurich", image: IMAGE_AC, description: "Инвертор · до 50 м² · 5.3 кВт", price: "77 200 ₽" },
  { name: "Energolux Zurich 5 SAS24Z5-AI/SAU24Z5-AI", series: "Zurich", image: IMAGE_AC2, description: "Инвертор · до 70 м² · 7.03 кВт", price: "96 500 ₽" },
  { name: "Energolux Zurich 6 SAS07Z6-AI/SAU07Z6-AI", series: "Zurich", image: IMAGE_AC, description: "Инвертор · до 20 м² · 2.1 кВт", price: "33 800 ₽" },
  { name: "Energolux Zurich 6 SAS09Z6-AI/SAU09Z6-AI", series: "Zurich", image: IMAGE_AC2, description: "Инвертор · до 25 м² · 2.7 кВт", price: "37 400 ₽" },
  { name: "Energolux Lugano Pro Line SAS09DL2-AI/SAU09DL2-AI", series: "Lugano", image: IMAGE_AC, description: "Инвертор · до 25 м² · 2.727 кВт", price: "73 500 ₽" },
  { name: "Energolux Basel 4 SAS07B4-A/SAU07B4-A", series: "Basel", image: IMAGE_AC2, description: "Не инвертор · до 20 м² · 2.05 кВт", price: "24 000 ₽" },
  { name: "Energolux Basel 4 SAS09B4-A/SAU09B4-A", series: "Basel", image: IMAGE_AC, description: "Не инвертор · до 25 м² · 2.68 кВт", price: "26 400 ₽" },
  { name: "Energolux Basel 4 SAS12B4-A/SAU12B4-A", series: "Basel", image: IMAGE_AC2, description: "Не инвертор · до 35 м² · 3.55 кВт", price: "36 500 ₽" },
  { name: "Energolux Basel 4 SAS18B4-A/SAU18B4-A", series: "Basel", image: IMAGE_AC, description: "Не инвертор · до 50 м² · 5.25 кВт", price: "59 300 ₽" },
  { name: "Energolux Basel 4 SAS30B4-A/SAU30B4-A", series: "Basel", image: IMAGE_AC2, description: "Не инвертор · до 80 м² · 7.9 кВт", price: "97 400 ₽" },
  { name: "Energolux Basel 5 SAS07B5-A/SAU07B5-A", series: "Basel", image: IMAGE_AC, description: "Не инвертор · до 20 м² · 2.35 кВт", price: "24 900 ₽" },
  { name: "Energolux Basel 5 SAS09B5-A/SAU09B5-A", series: "Basel", image: IMAGE_AC2, description: "Не инвертор · до 25 м² · 2.68 кВт", price: "26 900 ₽" },
  { name: "Energolux Davos SAS07R1-AI/SAU07R1-AI", series: "Davos", image: IMAGE_AC, description: "Инвертор · до 20 м² · 2.346 кВт", price: "37 100 ₽" },
  { name: "Energolux Davos PRO SAS07R2-AI/SAU07R2-AI", series: "Davos", image: IMAGE_AC2, description: "Инвертор · до 20 м² · 2.63 кВт", price: "39 200 ₽" },
  { name: "Energolux Davos PRO SAS09R2-AI/SAU09R2-AI", series: "Davos", image: IMAGE_AC, description: "Инвертор · до 25 м² · 2.93 кВт", price: "43 300 ₽" },
  { name: "Energolux Davos PRO SAS12R2-AI/SAU12R2-AI", series: "Davos", image: IMAGE_AC2, description: "Инвертор · до 35 м² · 3.51 кВт", price: "51 300 ₽" },
  { name: "Energolux Bern Le SAS07BN2-AI/SAU07BN2-AI-LE", series: "Bern", image: IMAGE_AC, description: "Инвертор · до 23 м² · 2.35 кВт", price: "40 700 ₽" },
  { name: "Energolux Bern Le SAS18BN3-AI/SAU18BN3-AI-LE", series: "Bern", image: IMAGE_AC2, description: "Инвертор · до 50 м² · 5.3 кВт", price: "81 100 ₽" },
  { name: "Energolux Bern Le SAS24BN3-AI/SAU24BN3-AI LE", series: "Bern", image: IMAGE_AC, description: "Инвертор · до 70 м² · 7.2 кВт", price: "85 900 ₽" },
  { name: "Energolux Nyon SAS07IL1-AI/SAU07IL1-AI", series: "Nyon", image: IMAGE_AC2, description: "Инвертор · до 20 м² · 2.5 кВт", price: "35 600 ₽" },
  { name: "Energolux Nyon SAS18IL1-AI/SAU18IL1-AI", series: "Nyon", image: IMAGE_AC, description: "Инвертор · до 50 м² · 5.2 кВт", price: "82 600 ₽" },
  { name: "Energolux Nyon SAS24IL1-AI/SAU24IL1-AI", series: "Nyon", image: IMAGE_AC2, description: "Инвертор · до 70 м² · 7 кВт", price: "102 400 ₽" },
]

const ALL_SERIES = ["Все", ...Array.from(new Set(models.map((m) => m.series)))]
const INITIAL_COUNT = 6

export function FeaturedDestinations() {
  const [activeFilter, setActiveFilter] = useState("Все")
  const [showAll, setShowAll] = useState(false)

  const filtered = activeFilter === "Все" ? models : models.filter((m) => m.series === activeFilter)
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_COUNT)

  return (
    <section id="catalog" className="py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Каталог <span className="font-semibold">кондиционеров</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Официальный дилер Energolux — широкий выбор моделей для квартир, домов и коммерческих объектов
          </p>
        </div>

        {/* Series Filters */}
        <div className="flex flex-wrap gap-3 mb-12">
          {ALL_SERIES.map((f) => (
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
              <div className="relative h-64 overflow-hidden">
                <img
                  src={model.image}
                  alt={model.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
                <div className="absolute top-4 left-4 flex items-center gap-1.5 bg-white/95 backdrop-blur-sm px-3 py-1.5 rounded-full">
                  <Thermometer className="h-3.5 w-3.5 text-primary" />
                  <span className="text-xs font-medium">{model.series}</span>
                </div>
              </div>

              <div className="p-6 space-y-4">
                <div>
                  <h3 className="text-sm font-semibold mb-2 leading-snug">{model.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{model.description}</p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <span className="text-base font-semibold text-primary">{model.price}</span>
                  <Button variant="ghost" size="sm" className="group/btn text-foreground hover:text-primary">
                    Заказать
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

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
