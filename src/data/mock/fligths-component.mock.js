// Сервис полетов должен собирать полеты по путешествиям туда-обратно. (путешествие\trip)
// Инфа про путешествие считается сервисом
// + в него включаются все полеты которые входят (в поле полеты пушатся объекты каждого полет)
/*
массив путешествий [
  {
    from
    to
    total cost
    total dur
    ..
    flights: [
      {полет туда} - объект по шаблону
      {полет обратно}
    ]
  }
]
*/
// минимальный вывод для списка (обновляется по ходу дела) ниже:

// пока только для точка а - точка б

module.exports = [
  {
    from: 'Kyiv',
    to: 'Paris',
    totalDuration: '10h',
    totalCost: '$300',
    flights: [
      {
        departure: 'Kyiv',
        arrival: 'Paris'
      }, {
        departure: 'Paris',
        arrival: 'Kyiv'
      }
    ]
  }, {
    from: 'Athens',
    to: 'Riga',
    totalDuration: '13h',
    totalCost: '$200',
    flights: [
      {
        departure: 'Athens',
        arrival: 'Riga'
      }, {
        departure: 'Riga',
        arrival: 'Athens'
      }
    ]
  }, {
    from: 'Athens',
    to: 'Riga',
    totalDuration: '5h',
    totalCost: '$100',
    flights: [
      {
        departure: 'Athens',
        arrival: 'Riga'
      }
    ]
  }
]
