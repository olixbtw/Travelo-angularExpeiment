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
        departure: { city: 'Kyiv', time: '11:45' },
        arrival: { city: 'Paris', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }, {
        departure: { city: 'Paris', time: '11:45' },
        arrival: { city: 'Kyiv', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Lufthansa International Airlines'
        }
      }
    ]
  },
  {
    from: 'Athens',
    to: 'Riga',
    totalDuration: '13h',
    totalCost: '$200',
    flights: [
      {
        departure: { city: 'Athens', time: '11:45' },
        arrival: { city: 'Riga', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }, {
        departure: { city: 'Riga', time: '11:45' },
        arrival: { city: 'Athens', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }
    ]
  },
  {
    from: 'Athens',
    to: 'Riga',
    totalDuration: '5h',
    totalCost: '$100',
    flights: [
      {
        departure: { city: 'Athens', time: '11:45' },
        arrival: { city: 'Riga', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }
    ]
  },
  {
    from: 'Kyiv',
    to: 'Paris',
    totalDuration: '10h',
    totalCost: '$300',
    flights: [
      {
        departure: { city: 'Kyiv', time: '11:45' },
        arrival: { city: 'Paris', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }, {
        departure: { city: 'Paris', time: '11:45' },
        arrival: { city: 'Kyiv', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Lufthansa International Airlines'
        }
      }
    ]
  },
  {
    from: 'Athens',
    to: 'Riga',
    totalDuration: '13h',
    totalCost: '$200',
    flights: [
      {
        departure: { city: 'Athens', time: '11:45' },
        arrival: { city: 'Riga', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }, {
        departure: { city: 'Riga', time: '11:45' },
        arrival: { city: 'Athens', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }
    ]
  },
  {
    from: 'Athens',
    to: 'Riga',
    totalDuration: '5h',
    totalCost: '$100',
    flights: [
      {
        departure: { city: 'Athens', time: '11:45' },
        arrival: { city: 'Riga', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }
    ]
  },
  {
    from: 'Kyiv',
    to: 'Paris',
    totalDuration: '10h',
    totalCost: '$300',
    flights: [
      {
        departure: { city: 'Kyiv', time: '11:45' },
        arrival: { city: 'Paris', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }, {
        departure: { city: 'Paris', time: '11:45' },
        arrival: { city: 'Kyiv', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Lufthansa International Airlines'
        }
      }
    ]
  },
  {
    from: 'Athens',
    to: 'Riga',
    totalDuration: '13h',
    totalCost: '$200',
    flights: [
      {
        departure: { city: 'Athens', time: '11:45' },
        arrival: { city: 'Riga', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }, {
        departure: { city: 'Riga', time: '11:45' },
        arrival: { city: 'Athens', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }
    ]
  },
  {
    from: 'Athens',
    to: 'Riga',
    totalDuration: '5h',
    totalCost: '$100',
    flights: [
      {
        departure: { city: 'Athens', time: '11:45' },
        arrival: { city: 'Riga', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }
    ]
  },
  {
    from: 'Kyiv',
    to: 'Paris',
    totalDuration: '10h',
    totalCost: '$300',
    flights: [
      {
        departure: { city: 'Kyiv', time: '11:45' },
        arrival: { city: 'Paris', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }, {
        departure: { city: 'Paris', time: '11:45' },
        arrival: { city: 'Kyiv', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Lufthansa International Airlines'
        }
      }
    ]
  },
  {
    from: 'Athens',
    to: 'Riga',
    totalDuration: '13h',
    totalCost: '$200',
    flights: [
      {
        departure: { city: 'Athens', time: '11:45' },
        arrival: { city: 'Riga', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }, {
        departure: { city: 'Riga', time: '11:45' },
        arrival: { city: 'Athens', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }
    ]
  },
  {
    from: 'Athens',
    to: 'Riga',
    totalDuration: '5h',
    totalCost: '$100',
    flights: [
      {
        departure: { city: 'Athens', time: '11:45' },
        arrival: { city: 'Riga', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }
    ]
  },
  {
    from: 'Kyiv',
    to: 'Paris',
    totalDuration: '10h',
    totalCost: '$300',
    flights: [
      {
        departure: { city: 'Kyiv', time: '11:45' },
        arrival: { city: 'Paris', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }, {
        departure: { city: 'Paris', time: '11:45' },
        arrival: { city: 'Kyiv', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Lufthansa International Airlines'
        }
      }
    ]
  },
  {
    from: 'Athens',
    to: 'Riga',
    totalDuration: '13h',
    totalCost: '$200',
    flights: [
      {
        departure: { city: 'Athens', time: '11:45' },
        arrival: { city: 'Riga', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }, {
        departure: { city: 'Riga', time: '11:45' },
        arrival: { city: 'Athens', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }
    ]
  },
  {
    from: 'Athens',
    to: 'Riga',
    totalDuration: '5h',
    totalCost: '$100',
    flights: [
      {
        departure: { city: 'Athens', time: '11:45' },
        arrival: { city: 'Riga', time: '17:45' },
        date: 'Wed, Sept 21',
        provider: {
          logo: 'companies/lufthansa.png',
          name: 'Air France'
        }
      }
    ]
  },
]
