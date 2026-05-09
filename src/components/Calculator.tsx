import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

interface CalculatorProps {
  open: boolean
  onClose: () => void
}

const MODELS = [
  { name: "Energolux Basel 4 SAS07B4-A (до 20 м²)", price: 22000 },
  { name: "Energolux Basel 4 SAS09B4-A (до 25 м²)", price: 24400 },
  { name: "Energolux Basel 4 SAS12B4-A (до 35 м²)", price: 34500 },
  { name: "Energolux Basel 4 SAS18B4-A (до 50 м²)", price: 57300 },
  { name: "Energolux Lausanne PRO SAS07AR2-A (до 20 м²)", price: 28800 },
  { name: "Energolux Lausanne PRO SAS09AR2-A (до 25 м²)", price: 31300 },
  { name: "Energolux Lausanne SAS12AR1-A (до 35 м²)", price: 40000 },
  { name: "Energolux Lausanne SAS18AR1-A (до 50 м²)", price: 65900 },
  { name: "Energolux Champery SAS07CH1-AI (до 22 м²)", price: 44700 },
  { name: "Energolux Champery SAS24CH1-AI (до 60 м²)", price: 120800 },
  { name: "Energolux Glarus DC SAS07GL1 (до 20 м²)", price: 34700 },
  { name: "Energolux Glarus DC SAS09GL1 (до 25 м²)", price: 38000 },
  { name: "Energolux Glarus DC SAS18GL1 (до 50 м²)", price: 80700 },
  { name: "Energolux Murren SAS09M1-AIB (до 25 м²)", price: 45700 },
  { name: "Energolux Murren SAS12M1-AIB (до 35 м²)", price: 50800 },
  { name: "Energolux Murren SAS18M1-AIB (до 50 м²)", price: 89900 },
]

const INSTALLATION_PRICE = 18000

export function Calculator({ open, onClose }: CalculatorProps) {
  const [selectedIndex, setSelectedIndex] = useState(0)

  if (!open) return null

  const model = MODELS[selectedIndex]
  const total = model.price + INSTALLATION_PRICE

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
      onClick={onClose}
    >
      <Card
        className="w-full max-w-lg bg-background border-0 shadow-2xl rounded-3xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 pt-8 pb-4">
          <h2 className="text-2xl font-semibold">Рассчитать стоимость</h2>
          <button onClick={onClose} className="text-muted-foreground hover:text-foreground transition-colors">
            <Icon name="X" size={22} />
          </button>
        </div>

        <div className="px-8 pb-8 space-y-6">
          {/* Model select */}
          <div className="space-y-2">
            <label className="text-sm text-muted-foreground">Модель кондиционера</label>
            <select
              value={selectedIndex}
              onChange={(e) => setSelectedIndex(Number(e.target.value))}
              className="w-full border border-border rounded-xl px-4 py-3 bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {MODELS.map((m, i) => (
                <option key={i} value={i}>{m.name}</option>
              ))}
            </select>
          </div>

          {/* Breakdown */}
          <div className="bg-muted/50 rounded-2xl p-5 space-y-3">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Кондиционер</span>
              <span className="font-medium">{model.price.toLocaleString("ru-RU")} ₽</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Стандартный монтаж</span>
              <span className="font-medium">{INSTALLATION_PRICE.toLocaleString("ru-RU")} ₽</span>
            </div>
            <div className="border-t border-border pt-3 flex justify-between">
              <span className="font-semibold">Итого</span>
              <span className="text-2xl font-semibold text-primary">{total.toLocaleString("ru-RU")} ₽</span>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">
            * Итоговая стоимость уточняется при замере. Возможны дополнительные работы в зависимости от сложности монтажа.
          </p>

          <a href="tel:+79855379933" className="block">
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90 rounded-full h-12 text-base">
              Заказать звонок
            </Button>
          </a>
        </div>
      </Card>
    </div>
  )
}
