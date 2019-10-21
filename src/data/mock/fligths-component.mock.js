// Сервис полетов должен собирать полеты по путешествиям туда-обратно.
/*
массив путешествий [
  [
    {полет туда}
    {полет обратно}
  ]
]
*/
// минимальный вывод для списка (обновляется по ходу дела) ниже:

// пока только для точка а - точка б

module.exports = [
  [
    {
      departure: 'Kyiv',
      arrival: "Paris"
    }, {
      departure: 'Paris',
      arrival: "Kyiv"
    }
  ], [
    {
      departure: 'Athens',
      arrival: "Riga"
    }, {
      departure: 'Riga',
      arrival: "Athens"
    }
  ], [
    {
      departure: 'Athens',
      arrival: "Riga"
    }
  ]
]
