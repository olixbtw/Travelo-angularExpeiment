export class User {

  // tslint:disable-next-line: variable-name
  _id: string;
  password: string;
  firstname: string;
  lastname: string;
  country: string;
  gender: string;
  dateOfBirth: 'dd/mm/yyyy';
  passport: {
    ID: string;
    expire: 'dd/mm/yyyy'
  };
  trips: [
    { from: string, to: string },
    { from: string, to: string }
  ];

}
