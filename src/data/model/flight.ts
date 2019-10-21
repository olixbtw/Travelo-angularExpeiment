export class Flight {
  // tslint:disable-next-line: variable-name
  _id: string;
  duration: string; // '10H20M';
  cost: {
    value: number;
    currency: string; // 'USD'
  };
  destinations: {
    departure: {
      city: string; // 'Kyiv'
      airport: string; // 'KYI'
      terminal: string;
      time: 'date';
    };
    arrival: {
      city: string;
      airport: string;
      terminal: string;
      time: 'date'
    };
  };
  stops: {
    list: [
      {
        city: string;
        airport: string;
        terminal: string;
        duration: string;
        arrival: 'date';
        departure: 'date'
      }
    ];
  };

}
