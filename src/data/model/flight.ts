export interface Flight {
  from: string;
  to: string;
  totalDuration: string;
  totalCost: string;
  flights: [
    {
      departure: {
        city: string;
        time: string; // 'HH:MM'
      };
      date: string;
      provider: {
        logo: string;
        name: string;
      };
    }
  ];
}
