import { Facebook, Instagram, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Energolux</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Официальный дилер кондиционеров Energolux. Продажа, монтаж и обслуживание с 2015 года
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div>
            <h4 className="font-semibold mb-4">Каталог</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Серия Comfort
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Серия Premium
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Серия Inverter
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Серия Ultra
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Полупромышленные
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Услуги</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Монтаж кондиционеров
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Техническое обслуживание
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Ремонт и диагностика
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Заправка фреоном
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Договор на обслуживание
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Контакты</h4>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <a href="tel:+79855379933" className="hover:text-foreground transition-colors">
                  +7 985 537 99 33
                </a>
              </li>
              <li>
                <a href="mailto:info@energolux-serv.ru" className="hover:text-foreground transition-colors">
                  info@energolux-serv.ru
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Политика конфиденциальности
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-foreground transition-colors">
                  Условия использования
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>© 2025 Energolux. Все права защищены.</p>
        </div>
      </div>
    </footer>
  )
}