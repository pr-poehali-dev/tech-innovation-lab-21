import Icon from "@/components/ui/icon"

const features = [
  {
    icon: "BadgeCheck",
    title: "Официальный дилер",
    description: "Продаём только оригинальную технику Energolux с заводской гарантией до 5 лет",
  },
  {
    icon: "Wrench",
    title: "Монтаж за 1 день",
    description: "Выезд мастера в день обращения, установка без сверления несущих конструкций",
  },
  {
    icon: "Headphones",
    title: "Поддержка 7/7",
    description: "Отвечаем на вопросы и принимаем заявки ежедневно, включая выходные и праздники",
  },
  {
    icon: "ShieldCheck",
    title: "Гарантия на работы",
    description: "1 год гарантии на монтаж и 1 год на оборудование. Бесплатный выезд при гарантийных случаях",
  },
]

export function WhyChooseUs() {
  return (
    <section id="about" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Почему выбирают <span className="font-semibold">нас</span>
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            Мы устанавливаем кондиционеры Energolux с 2015 года — более 3 000 довольных клиентов в городе
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary mb-2">
                <Icon name={feature.icon} size={32} />
              </div>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}