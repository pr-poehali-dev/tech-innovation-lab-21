import { useState } from "react"

interface PriceItem {
  article: string
  service: string
  price: string
}

interface PriceSection {
  title: string
  items: PriceItem[]
}

interface PriceCategory {
  category: string
  sections: PriceSection[]
}

const data: PriceCategory[] = [
  {
    category: "Настенные кондиционеры",
    sections: [
      {
        title: "Премиум монтаж настенных сплит-систем",
        items: [
          { article: "М752", service: "Премиум монтаж сплит-системы 07-09 BTU", price: "19 990 ₽" },
          { article: "М214", service: "Премиум монтаж сплит-системы 12 BTU", price: "20 990 ₽" },
          { article: "М738", service: "Премиум монтаж сплит-системы 15-18 BTU", price: "23 490 ₽" },
          { article: "М217", service: "Премиум монтаж сплит-системы 24 BTU", price: "25 990 ₽" },
          { article: "М218", service: "Премиум монтаж сплит-системы 30 BTU", price: "30 990 ₽" },
          { article: "М219", service: "Премиум монтаж сплит-системы 36 BTU", price: "32 990 ₽" },
        ],
      },
      {
        title: "Первые этапы монтажа настенных сплит-систем",
        items: [
          { article: "М206", service: "Первый этап премиум монтажа сплит-системы 07-09 BTU", price: "19 990 ₽" },
          { article: "М207", service: "Первый этап премиум монтажа сплит-системы 12 BTU", price: "20 990 ₽" },
          { article: "М208", service: "Первый этап премиум монтажа сплит-системы 15-18 BTU", price: "23 490 ₽" },
          { article: "М209", service: "Первый этап премиум монтажа сплит-системы 24 BTU", price: "25 990 ₽" },
          { article: "М210", service: "Первый этап премиум монтажа сплит-системы 30 BTU", price: "30 990 ₽" },
          { article: "М211", service: "Первый этап премиум монтажа сплит-системы 36 BTU", price: "32 990 ₽" },
        ],
      },
      {
        title: "Вторые этапы монтажа настенных сплит-систем",
        items: [
          { article: "М171", service: "Второй этап монтажа настенной сплит-системы", price: "1 990 ₽" },
        ],
      },
      {
        title: "Демонтажи настенных сплит-систем",
        items: [
          { article: "М172", service: "Демонтаж сплит-системы 07-09 BTU", price: "6 990 ₽" },
          { article: "М173", service: "Демонтаж сплит-системы 12 BTU", price: "7 390 ₽" },
          { article: "М174", service: "Демонтаж сплит-системы 15-18 BTU", price: "8 390 ₽" },
          { article: "М175", service: "Демонтаж сплит-системы 24 BTU", price: "9 390 ₽" },
          { article: "М176", service: "Демонтаж сплит-системы 30 BTU", price: "11 190 ₽" },
          { article: "М177", service: "Демонтаж сплит-системы 36 BTU", price: "11 990 ₽" },
        ],
      },
      {
        title: "Дополнительные услуги",
        items: [
          { article: "М1481", service: "Миркли Премиум сервис", price: "100% к стоимости монтажа" },
          { article: "М1482", service: "Монтаж оборудования, приобретённого не в компании Миркли", price: "50% к стоимости монтажа" },
        ],
      },
    ],
  },
  {
    category: "Полупромышленные кондиционеры",
    sections: [
      {
        title: "Премиум монтаж полупромышленных сплит-систем",
        items: [
          { article: "М260", service: "Премиум монтаж полупромышленного кондиционера 09 BTU", price: "21 990 ₽" },
          { article: "М261", service: "Премиум монтаж полупромышленного кондиционера 12 BTU", price: "22 990 ₽" },
          { article: "М262", service: "Премиум монтаж полупромышленного кондиционера 18 BTU", price: "24 990 ₽" },
          { article: "М263", service: "Премиум монтаж полупромышленного кондиционера 24 BTU", price: "26 990 ₽" },
          { article: "М265", service: "Премиум монтаж полупромышленного кондиционера 36 BTU", price: "30 990 ₽" },
          { article: "М1650", service: "Премиум монтаж полупромышленного кондиционера 42 BTU", price: "33 990 ₽" },
          { article: "М266", service: "Премиум монтаж полупромышленного кондиционера 48 BTU", price: "34 490 ₽" },
          { article: "М267", service: "Премиум монтаж полупромышленного кондиционера 60 BTU", price: "36 490 ₽" },
          { article: "М1651", service: "Премиум монтаж полупромышленного кондиционера 76 BTU", price: "39 790 ₽" },
          { article: "М1652", service: "Премиум монтаж полупромышленного кондиционера 90 BTU", price: "41 390 ₽" },
          { article: "М1679", service: "Премиум монтаж полупромышленного кондиционера 100 BTU", price: "46 290 ₽" },
        ],
      },
      {
        title: "Первые этапы монтажа полупромышленных сплит-систем",
        items: [
          { article: "М253", service: "Первый этап монтажа полупромышленного кондиционера 09 BTU", price: "21 990 ₽" },
          { article: "М254", service: "Первый этап монтажа полупромышленного кондиционера 12 BTU", price: "22 990 ₽" },
          { article: "М255", service: "Первый этап монтажа полупромышленного кондиционера 18 BTU", price: "24 990 ₽" },
          { article: "М256", service: "Первый этап монтажа полупромышленного кондиционера 24 BTU", price: "26 990 ₽" },
          { article: "М257", service: "Первый этап монтажа полупромышленного кондиционера 36 BTU", price: "30 990 ₽" },
        ],
      },
      {
        title: "Вторые этапы монтажа полупромышленных сплит-систем",
        items: [
          { article: "М220", service: "Второй этап монтажа полупромышленного кондиционера", price: "1 990 ₽" },
        ],
      },
      {
        title: "Демонтажи полупромышленных сплит-систем",
        items: [
          { article: "М222", service: "Демонтаж полупромышленного кондиционера 09 BTU", price: "7 990 ₽" },
          { article: "М223", service: "Демонтаж полупромышленного кондиционера 12 BTU", price: "8 790 ₽" },
          { article: "М224", service: "Демонтаж полупромышленного кондиционера 18 BTU", price: "9 190 ₽" },
          { article: "М225", service: "Демонтаж полупромышленного кондиционера 24 BTU", price: "10 190 ₽" },
          { article: "М226", service: "Демонтаж полупромышленного кондиционера 36 BTU", price: "11 790 ₽" },
          { article: "М227", service: "Демонтаж полупромышленного кондиционера 48 BTU", price: "13 250 ₽" },
          { article: "М228", service: "Демонтаж полупромышленного кондиционера 60 BTU", price: "14 950 ₽" },
        ],
      },
    ],
  },
  {
    category: "Мульти сплит-системы",
    sections: [
      {
        title: "Наружные блоки (кронштейн + питание)",
        items: [
          { article: "М322", service: "Монтаж наружного блока 15 BTU", price: "8 590 ₽" },
          { article: "М328", service: "Монтаж наружного блока 18 BTU", price: "8 790 ₽" },
          { article: "М327", service: "Монтаж наружного блока 24 BTU", price: "9 590 ₽" },
          { article: "М326", service: "Монтаж наружного блока 30 BTU", price: "11 390 ₽" },
          { article: "М325", service: "Монтаж наружного блока 36 BTU", price: "12 390 ₽" },
          { article: "М324", service: "Монтаж наружного блока 48 BTU", price: "13 490 ₽" },
          { article: "М323", service: "Монтаж BP/BS блока", price: "7 990 ₽" },
        ],
      },
      {
        title: "Внутренние настенные блоки с коммуникациями до 5 м",
        items: [
          { article: "М144", service: "Монтаж внутреннего блока с коммуникациями 07-09 BTU", price: "11 790 ₽" },
          { article: "М145", service: "Монтаж внутреннего блока с коммуникациями 12 BTU", price: "12 490 ₽" },
          { article: "М146", service: "Монтаж внутреннего блока с коммуникациями 15-18 BTU", price: "13 790 ₽" },
          { article: "М147", service: "Монтаж внутреннего блока с коммуникациями 24 BTU", price: "15 790 ₽" },
          { article: "М148", service: "Монтаж внутреннего блока с коммуникациями 30 BTU", price: "17 690 ₽" },
          { article: "М149", service: "Монтаж внутреннего блока с коммуникациями 36 BTU", price: "18 190 ₽" },
        ],
      },
      {
        title: "Внутренние полупромышленные блоки с коммуникациями до 5 м",
        items: [
          { article: "М239", service: "Монтаж внутреннего блока полупромышленного 09 BTU", price: "13 590 ₽" },
          { article: "М240", service: "Монтаж внутреннего блока полупромышленного 12 BTU", price: "14 490 ₽" },
          { article: "М241", service: "Монтаж внутреннего блока полупромышленного 18 BTU", price: "17 090 ₽" },
          { article: "М242", service: "Монтаж внутреннего блока полупромышленного 24 BTU", price: "19 090 ₽" },
          { article: "М243", service: "Монтаж внутреннего блока полупромышленного 36 BTU", price: "21 590 ₽" },
        ],
      },
    ],
  },
  {
    category: "Дополнительные работы",
    sections: [
      {
        title: "Закладка трассы",
        items: [
          { article: "М288", service: "Закладка коммуникаций без навески блоков 07-09 BTU", price: "11 890 ₽" },
          { article: "М301", service: "Закладка коммуникаций без навески блоков 12 BTU", price: "12 690 ₽" },
          { article: "М300", service: "Закладка коммуникаций без навески блоков 15-18 BTU", price: "13 490 ₽" },
          { article: "М299", service: "Закладка коммуникаций без навески блоков 24 BTU", price: "14 990 ₽" },
          { article: "М298", service: "Закладка коммуникаций без навески блоков 30 BTU", price: "17 090 ₽" },
          { article: "М297", service: "Закладка коммуникаций без навески блоков 36 BTU", price: "17 490 ₽" },
          { article: "М292", service: "Закладка коммуникаций мультисплит 07-09 BTU", price: "11 890 ₽" },
          { article: "М291", service: "Закладка коммуникаций мультисплит 12 BTU", price: "12 690 ₽" },
          { article: "М306", service: "Закладка коммуникаций мультисплит 15-18 BTU", price: "13 490 ₽" },
          { article: "М305", service: "Закладка коммуникаций мультисплит 24 BTU", price: "14 990 ₽" },
          { article: "М304", service: "Закладка коммуникаций мультисплит 30 BTU", price: "17 090 ₽" },
          { article: "М303", service: "Закладка коммуникаций мультисплит 36 BTU", price: "17 490 ₽" },
        ],
      },
      {
        title: "Выезды",
        items: [
          { article: "М15", service: "Выезд бригады в пределах МКАД до 3 внут. блоков", price: "1 000 ₽" },
          { article: "М1479", service: "Выезд бригады в пределах МКАД до 6 внут. блоков", price: "2 000 ₽" },
          { article: "М1480", service: "Выезд бригады в пределах МКАД более 6 внут. блоков", price: "3 000 ₽" },
          { article: "М757", service: "Выезд за МКАД, за км", price: "15 ₽" },
          { article: "М989", service: "Выезд инженера по ВиК в пределах МКАД", price: "1 500 ₽" },
          { article: "М1471", service: "Выезд инженера по ВиК, за км", price: "25 ₽" },
          { article: "М17", service: "Выезд по гарантии", price: "по запросу" },
          { article: "М19", service: "Диагностика неисправного кондиционера до 5 кВт", price: "1 500 ₽" },
          { article: "М18", service: "Диагностика неисправного кондиционера от 5 до 15 кВт", price: "3 000 ₽" },
          { article: "М20", service: "Ложный выезд монтажной бригады", price: "990 ₽" },
          { article: "М21", service: "Простой бригады 1 час", price: "500 ₽" },
          { article: "М1562", service: "Доставка кондиционера монтажниками", price: "400 ₽" },
        ],
      },
      {
        title: "Трасса",
        items: [
          { article: "М296", service: "Монтаж дополнительной трассы с материалом до 09 BTU", price: "1 590 ₽" },
          { article: "М295", service: "Монтаж дополнительной трассы с материалом до 12 BTU", price: "1 990 ₽" },
          { article: "М294", service: "Монтаж дополнительной трассы с материалом до 18 BTU", price: "2 190 ₽" },
          { article: "М308", service: "Монтаж дополнительной трассы с материалом до 24 BTU", price: "2 690 ₽" },
          { article: "М293", service: "Монтаж дополнительной трассы с материалом до 36 BTU", price: "2 990 ₽" },
          { article: "М307", service: "Монтаж дополнительной трассы с материалом до 48 BTU", price: "2 990 ₽" },
          { article: "М289", service: "Монтаж приточного воздуховода для сплит-систем", price: "1 990 ₽" },
          { article: "М290", service: "Демонтаж трассы до 5 м", price: "900 ₽" },
          { article: "М1603", service: "Демонтаж трассы за последующий 1 м", price: "180 ₽" },
        ],
      },
      {
        title: "Дренаж",
        items: [
          { article: "М40", service: "Монтаж дополнительной трассы дренажа", price: "350 ₽" },
          { article: "М41", service: "Монтаж помпы", price: "1 990 ₽" },
          { article: "М39", service: "Демонтаж помпы", price: "990 ₽" },
          { article: "М43", service: "Установка сухого гидрозатвора (без материала)", price: "1 690 ₽" },
          { article: "М921", service: "Монтаж системы распыления уличного конденсата", price: "2 800 ₽" },
        ],
      },
      {
        title: "Электрика",
        items: [
          { article: "М316", service: "Монтаж электрокабеля 3×1,5 в кабель-канале (с материалом), м", price: "290 ₽" },
          { article: "М1169", service: "Монтаж электрокабеля 3×2,5 в кабель-канале (с материалом), м", price: "390 ₽" },
          { article: "М1170", service: "Монтаж электрокабеля 5×1,5 в кабель-канале (с материалом), м", price: "490 ₽" },
          { article: "М1171", service: "Монтаж электрокабеля 5×2,5 в кабель-канале (с материалом), м", price: "790 ₽" },
          { article: "М1172", service: "Монтаж электрокабеля 3×4 в кабель-канале (с материалом), м", price: "690 ₽" },
          { article: "М1173", service: "Монтаж электрокабеля 5×4 в кабель-канале (с материалом), м", price: "1 090 ₽" },
          { article: "М318", service: "Подключение к автомату", price: "760 ₽" },
        ],
      },
      {
        title: "Короб",
        items: [
          { article: "М270", service: "Монтаж короба с материалом 16×16", price: "330 ₽" },
          { article: "М272", service: "Монтаж короба с материалом 74×55", price: "790 ₽" },
          { article: "М271", service: "Монтаж короба с материалом 100×60", price: "1 190 ₽" },
        ],
      },
      {
        title: "Отверстия",
        items: [
          { article: "М280", service: "Бурение отверстия Ø 60 мм; L < 50 см", price: "990 ₽" },
          { article: "М1476", service: "Бурение отверстия Ø 60 мм; L > 50 см", price: "1 890 ₽" },
          { article: "М279", service: "Бурение отверстия Ø 100 мм; L < 50 см алмазной коронкой", price: "4 090 ₽" },
          { article: "М1477", service: "Бурение отверстия Ø 100 мм; L > 50 см алмазной коронкой", price: "7 990 ₽" },
          { article: "М278", service: "Бурение отверстия Ø 120 мм; L < 50 см алмазной коронкой", price: "4 490 ₽" },
          { article: "М1478", service: "Бурение отверстия Ø 120 мм; L > 50 см алмазной коронкой", price: "8 890 ₽" },
        ],
      },
      {
        title: "Штробы",
        items: [
          { article: "М314", service: "Штроба под дренаж 35×35 (Бетон)", price: "1 490 ₽" },
          { article: "М315", service: "Штроба под дренаж 35×35 (Кирпич)", price: "990 ₽" },
          { article: "М312", service: "Штроба под коммуникации 60×60 (Бетон)", price: "1 990 ₽" },
          { article: "М313", service: "Штроба под коммуникации 60×60 (Кирпич)", price: "1 390 ₽" },
          { article: "М311", service: "Штроба под электрокабель", price: "630 ₽" },
        ],
      },
      {
        title: "Фреон",
        items: [
          { article: "М309", service: "Дозаправка фреоном (R410/R32/R22), до 500 гр.", price: "3 390 ₽" },
          { article: "М310", service: "Полная заправка фреоном (R410/R32), до 1500 гр.", price: "4 890 ₽" },
        ],
      },
      {
        title: "Зимняя эксплуатация",
        items: [
          { article: "М46", service: "Установка комплекта зимней эксплуатации", price: "2 390 ₽" },
          { article: "М45", service: "Установка замедлителя вентилятора наружного блока", price: "990 ₽" },
          { article: "М47", service: "Установка обогрева дренажа", price: "690 ₽" },
          { article: "М48", service: "Установка обогрева картера", price: "990 ₽" },
          { article: "М44", service: "Демонтаж комплекта зимней эксплуатации", price: "1 890 ₽" },
          { article: "М1396", service: "Монтаж подогрева дренажного поддона", price: "1 990 ₽" },
        ],
      },
      {
        title: "Козырьки и защиты",
        items: [
          { article: "М52", service: "Установка козырька", price: "2 290 ₽" },
          { article: "М51", service: "Установка защиты наружного блока", price: "3 290 ₽" },
          { article: "М50", service: "Демонтаж козырька", price: "1 690 ₽" },
          { article: "М49", service: "Демонтаж защиты наружного блока", price: "2 290 ₽" },
        ],
      },
      {
        title: "Нестандартное крепление наружного блока",
        items: [
          { article: "М319", service: "Демонтаж/монтаж вентилируемого фасада, м²", price: "1 790 ₽" },
          { article: "М274", service: "Монтаж наружного блока на вентилируемый фасад", price: "2 990 ₽" },
          { article: "М275", service: "Монтаж наружного блока на утеплённый фасад", price: "1 490 ₽" },
          { article: "М276", service: "Монтаж наружного блока на шпильки/траверсы", price: "2 550 ₽" },
          { article: "М983", service: "Монтаж виброопор с материалом", price: "2 290 ₽" },
          { article: "М984", service: "Монтаж виброопор клиента", price: "1 790 ₽" },
        ],
      },
      {
        title: "Промывка магистрали",
        items: [
          { article: "М998", service: "Продувка азотом фреоновой магистрали до 3 м", price: "3 460 ₽" },
          { article: "М999", service: "Продувка азотом за последующий 1 м", price: "870 ₽" },
          { article: "М1000", service: "Промывка фреоном (R410/R32) магистрали до 3 м", price: "6 330 ₽" },
          { article: "М1001", service: "Промывка фреоном (R410/R32) за последующий 1 м", price: "1 450 ₽" },
          { article: "М1002", service: "Промывка промывочной станцией (R141/R22) до 3 м", price: "6 900 ₽" },
          { article: "М1003", service: "Промывка промывочной станцией (R141/R22) за 1 м", price: "1 700 ₽" },
        ],
      },
      {
        title: "Разное",
        items: [
          { article: "М286", service: "Демонтаж/монтаж стеклопакета", price: "2 860 ₽" },
          { article: "М282", service: "Монтаж блока согласования (блок ратации)", price: "7 460 ₽" },
          { article: "М1394", service: "Демонтаж блока согласования (блок ратации)", price: "3 745 ₽" },
          { article: "М1469", service: "Опрессовка трассы при закладке коммуникаций", price: "2 490 ₽" },
          { article: "М522", service: "Опрессовка трассы экспресс (60 минут)", price: "2 490 ₽" },
          { article: "М521", service: "Опрессовка трассы в 2 выезда (24 часа)", price: "4 190 ₽" },
          { article: "М283", service: "Пайка, стык", price: "690 ₽" },
          { article: "М285", service: "Перевальцовка соединений (одно соединение)", price: "590 ₽" },
          { article: "М284", service: "Сборка/разборка подвесного потолка", price: "600 ₽" },
          { article: "М1474", service: "Монтаж экрана-отражателя для настенного кондиционера", price: "1 750 ₽" },
          { article: "М1475", service: "Монтаж экрана-отражателя для кассетного кондиционера", price: "2 300 ₽" },
        ],
      },
    ],
  },
  {
    category: "Высотные работы",
    sections: [
      {
        title: "Автовышки",
        items: [
          { article: "М1568", service: "Автовышка 16 м (7 ч + 1 ч подачи)", price: "18 000 ₽" },
          { article: "М1569", service: "Автовышка 16 м Платформа (7 ч + 1 ч подачи)", price: "21 000 ₽" },
          { article: "М1570", service: "Автовышка 22 м (7 ч + 1 ч подачи)", price: "21 000 ₽" },
          { article: "М1571", service: "Автовышка 22 м Платформа (7 ч + 1 ч подачи)", price: "24 000 ₽" },
          { article: "М1572", service: "Автовышка 28 м (7 ч + 1 ч подачи)", price: "23 000 ₽" },
          { article: "М1573", service: "Автовышка 28 м коленчатая (7 ч + 1 ч подачи)", price: "25 000 ₽" },
          { article: "М1574", service: "Автовышка 32 м (7 ч + 1 ч подачи)", price: "26 000 ₽" },
          { article: "М1575", service: "Автовышка 32 м коленчатая (7 ч + 1 ч подачи)", price: "28 000 ₽" },
          { article: "М1576", service: "Автовышка 40 м (7 ч + 1 ч подачи)", price: "29 000 ₽" },
          { article: "М1577", service: "Автовышка 45 м (7 ч + 1 ч подачи)", price: "33 000 ₽" },
          { article: "М1578", service: "Автовышка 50 м (7 ч + 1 ч подачи)", price: "50 000 ₽" },
          { article: "М1604", service: "Автовышка 22 м коленчатая (7 ч + 1 ч подачи)", price: "27 000 ₽" },
          { article: "М1580", service: "Выезд автовышки за МКАД, за км", price: "50 ₽" },
        ],
      },
      {
        title: "Высотные работы",
        items: [
          { article: "М25", service: "Высотные работы с лестницы до 5 м", price: "1 790 ₽" },
          { article: "М919", service: "Монтаж внутреннего блока на высоте свыше 3 м", price: "1 140 ₽" },
          { article: "М920", service: "Монтаж наружного блока с выходом из окна", price: "2 890 ₽" },
          { article: "М30", service: "Доставка, сборка, разборка туры", price: "2 890 ₽" },
          { article: "М1545", service: "Услуги альпиниста при монтаже/демонтаже наружного блока 07-09 BTU", price: "9 790 ₽" },
          { article: "М1546", service: "Услуги альпиниста при монтаже/демонтаже наружного блока 12 BTU", price: "9 790 ₽" },
          { article: "М32", service: "Услуги альпиниста при монтаже/демонтаже наружного блока 15-18 BTU", price: "10 990 ₽" },
          { article: "М33", service: "Услуги альпиниста при монтаже/демонтаже наружного блока 24 BTU", price: "12 090 ₽" },
          { article: "М34", service: "Услуги альпиниста при монтаже/демонтаже наружного блока 36 BTU", price: "14 390 ₽" },
          { article: "М1547", service: "Услуги альпиниста при монтаже/демонтаже наружного блока 48-60 BTU", price: "14 990 ₽" },
          { article: "М1548", service: "Услуги альпиниста при запуске наружного блока", price: "5 490 ₽" },
          { article: "М1549", service: "Услуги альпиниста при обслуживании наружного блока", price: "5 490 ₽" },
        ],
      },
    ],
  },
  {
    category: "Блоки",
    sections: [
      {
        title: "Монтаж наружных блоков (только кронштейн)",
        items: [
          { article: "М199", service: "Монтаж наружного блока сплит-системы 07-09 BTU", price: "5 990 ₽" },
          { article: "М200", service: "Монтаж наружного блока сплит-системы 12 BTU", price: "6 490 ₽" },
          { article: "М201", service: "Монтаж наружного блока сплит-системы 15-18 BTU", price: "7 090 ₽" },
          { article: "М202", service: "Монтаж наружного блока сплит-системы 24 BTU", price: "7 690 ₽" },
          { article: "М203", service: "Монтаж наружного блока сплит-системы 30 BTU", price: "9 390 ₽" },
          { article: "М204", service: "Монтаж наружного блока сплит-системы 36 BTU", price: "10 390 ₽" },
          { article: "М1551", service: "Монтаж наружного блока сплит-системы 48-60 BTU", price: "11 090 ₽" },
        ],
      },
      {
        title: "Монтаж внутренних настенных блоков",
        items: [
          { article: "М193", service: "Монтаж внутреннего настенного блока 07-09 BTU", price: "4 890 ₽" },
          { article: "М194", service: "Монтаж внутреннего настенного блока 12 BTU", price: "5 190 ₽" },
          { article: "М195", service: "Монтаж внутреннего настенного блока 15-18 BTU", price: "5 590 ₽" },
          { article: "М196", service: "Монтаж внутреннего настенного блока 24 BTU", price: "6 290 ₽" },
          { article: "М197", service: "Монтаж внутреннего настенного блока 30 BTU", price: "6 590 ₽" },
          { article: "М198", service: "Монтаж внутреннего настенного блока 36 BTU", price: "6 890 ₽" },
        ],
      },
      {
        title: "Демонтаж наружных блоков",
        items: [
          { article: "М187", service: "Демонтаж наружного блока сплит-системы 07-09 BTU", price: "3 490 ₽" },
          { article: "М188", service: "Демонтаж наружного блока сплит-системы 12 BTU", price: "3 690 ₽" },
          { article: "М189", service: "Демонтаж наружного блока сплит-системы 15-18 BTU", price: "3 870 ₽" },
          { article: "М190", service: "Демонтаж наружного блока сплит-системы 24 BTU", price: "4 200 ₽" },
          { article: "М191", service: "Демонтаж наружного блока сплит-системы 30 BTU", price: "4 400 ₽" },
          { article: "М192", service: "Демонтаж наружного блока сплит-системы 36 BTU", price: "4 650 ₽" },
          { article: "М1552", service: "Демонтаж наружного блока сплит-системы 48-60 BTU", price: "4 990 ₽" },
        ],
      },
      {
        title: "Демонтаж внутренних настенных блоков",
        items: [
          { article: "М181", service: "Демонтаж внутреннего настенного блока 07-09 BTU", price: "2 490 ₽" },
          { article: "М182", service: "Демонтаж внутреннего настенного блока 12 BTU", price: "2 690 ₽" },
          { article: "М183", service: "Демонтаж внутреннего настенного блока 15-18 BTU", price: "2 870 ₽" },
          { article: "М184", service: "Демонтаж внутреннего настенного блока 24 BTU", price: "3 200 ₽" },
          { article: "М185", service: "Демонтаж внутреннего настенного блока 30 BTU", price: "3 400 ₽" },
          { article: "М186", service: "Демонтаж внутреннего настенного блока 36 BTU", price: "3 650 ₽" },
        ],
      },
      {
        title: "Монтаж внутренних полупромышленных блоков",
        items: [
          { article: "М721", service: "Монтаж внутреннего блока полупромышленного 09 BTU", price: "5 890 ₽" },
          { article: "М722", service: "Монтаж внутреннего блока полупромышленного 12 BTU", price: "6 390 ₽" },
          { article: "М723", service: "Монтаж внутреннего блока полупромышленного 18 BTU", price: "7 390 ₽" },
          { article: "М725", service: "Монтаж внутреннего блока полупромышленного 24 BTU", price: "8 390 ₽" },
          { article: "М724", service: "Монтаж внутреннего блока полупромышленного 36 BTU", price: "9 890 ₽" },
        ],
      },
      {
        title: "Демонтаж внутренних полупромышленных блоков",
        items: [
          { article: "М229", service: "Демонтаж внутреннего блока полупромышленного 09 BTU", price: "3 150 ₽" },
          { article: "М230", service: "Демонтаж внутреннего блока полупромышленного 12 BTU", price: "3 410 ₽" },
          { article: "М231", service: "Демонтаж внутреннего блока полупромышленного 18 BTU", price: "3 630 ₽" },
          { article: "М232", service: "Демонтаж внутреннего блока полупромышленного 24 BTU", price: "4 060 ₽" },
          { article: "М233", service: "Демонтаж внутреннего блока полупромышленного 36 BTU", price: "4 645 ₽" },
        ],
      },
    ],
  },
  {
    category: "Монтаж на готовую трассу",
    sections: [
      {
        title: "Настенные сплит-системы на готовую трассу",
        items: [
          { article: "М782", service: "Монтаж сплит-системы на готовую трассу 07-09 BTU", price: "14 390 ₽" },
          { article: "М783", service: "Монтаж сплит-системы на готовую трассу 12 BTU", price: "15 590 ₽" },
          { article: "М784", service: "Монтаж сплит-системы на готовую трассу 15-18 BTU", price: "16 890 ₽" },
          { article: "М785", service: "Монтаж сплит-системы на готовую трассу 24 BTU", price: "17 790 ₽" },
          { article: "М786", service: "Монтаж сплит-системы на готовую трассу 30 BTU", price: "19 990 ₽" },
          { article: "М787", service: "Монтаж сплит-системы на готовую трассу 36 BTU", price: "21 090 ₽" },
          { article: "М908", service: "Монтаж фильтров осушителей (с материалом — 2 фильтра)", price: "3 990 ₽" },
          { article: "М909", service: "Демонтаж фильтров осушителей (за 2 шт)", price: "1 990 ₽" },
        ],
      },
      {
        title: "Полупромышленные сплит-системы на готовую трассу",
        items: [
          { article: "М793", service: "Монтаж полупромышленного кондиционера на готовую трассу 09 BTU", price: "15 990 ₽" },
          { article: "М792", service: "Монтаж полупромышленного кондиционера на готовую трассу 12 BTU", price: "16 890 ₽" },
          { article: "М791", service: "Монтаж полупромышленного кондиционера на готовую трассу 18 BTU", price: "17 690 ₽" },
          { article: "М790", service: "Монтаж полупромышленного кондиционера на готовую трассу 24 BTU", price: "19 290 ₽" },
          { article: "М789", service: "Монтаж полупромышленного кондиционера на готовую трассу 36 BTU", price: "21 690 ₽" },
          { article: "М788", service: "Монтаж полупромышленного кондиционера на готовую трассу 48 BTU", price: "22 590 ₽" },
          { article: "М794", service: "Монтаж полупромышленного кондиционера на готовую трассу 60 BTU", price: "23 590 ₽" },
        ],
      },
    ],
  },
]

export function PriceList() {
  const [activeCategory, setActiveCategory] = useState(0)
  const [openSections, setOpenSections] = useState<Record<string, boolean>>({})

  const toggleSection = (key: string) => {
    setOpenSections((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const cat = data[activeCategory]

  return (
    <section id="price" className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-6 text-balance">
            Прайс-<span className="font-semibold">монтаж</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Все цены на монтаж кондиционеров. Артикул указан по каталогу 1С.
          </p>
        </div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-10">
          {data.map((cat, i) => (
            <button
              key={i}
              onClick={() => setActiveCategory(i)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeCategory === i
                  ? "bg-primary text-primary-foreground"
                  : "bg-background border border-border text-foreground/70 hover:text-foreground"
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Sections */}
        <div className="space-y-3">
          {cat.sections.map((section, si) => {
            const key = `${activeCategory}-${si}`
            const isOpen = openSections[key] !== false
            return (
              <div key={si} className="bg-background rounded-2xl border border-border overflow-hidden">
                <button
                  onClick={() => toggleSection(key)}
                  className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-muted/30 transition-colors"
                >
                  <span className="font-medium">{section.title}</span>
                  <span className="text-muted-foreground text-sm ml-4">{isOpen ? "▲" : "▼"}</span>
                </button>
                {isOpen && (
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm">
                      <thead>
                        <tr className="border-t border-border bg-muted/30">
                          <th className="text-left px-6 py-3 text-muted-foreground font-medium w-24">Артикул</th>
                          <th className="text-left px-6 py-3 text-muted-foreground font-medium">Услуга</th>
                          <th className="text-right px-6 py-3 text-muted-foreground font-medium whitespace-nowrap">Цена</th>
                        </tr>
                      </thead>
                      <tbody>
                        {section.items.map((item, ii) => (
                          <tr key={ii} className="border-t border-border/50 hover:bg-muted/20 transition-colors">
                            <td className="px-6 py-3 text-muted-foreground font-mono text-xs">{item.article}</td>
                            <td className="px-6 py-3">{item.service}</td>
                            <td className="px-6 py-3 text-right font-semibold text-primary whitespace-nowrap">{item.price}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
