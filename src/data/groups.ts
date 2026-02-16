export interface Member {
  name: string;
  points: number;
  attendance: {
    monday: boolean;
    tuesday: boolean;
    wednesday: boolean;
    thursday: boolean;
    friday: boolean;
  };
}

export interface Group {
  name: string;
  members: Member[];
}

export const groups: Group[] = [
  {
    name: "Grupo 1",
    members: [
      {
        name: "Juan Pérez",
        points: 50,
        attendance: { monday: true, tuesday: true, wednesday: false, thursday: true, friday: true }
      },
      {
        name: "María Gómez",
        points: 45,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: true, friday: true }
      },
      {
        name: "Carlos Ruiz",
        points: 30,
        attendance: { monday: false, tuesday: true, wednesday: true, thursday: false, friday: true }
      }
    ]
  },
  {
    name: "Grupo 2",
    members: [
      {
        name: "Ana López",
        points: 60,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: true, friday: true }
      },
      {
        name: "Luis Torres",
        points: 40,
        attendance: { monday: true, tuesday: false, wednesday: true, thursday: true, friday: false }
      }
    ]
  },
  {
    name: "Grupo 3",
    members: [
      {
        name: "Sofia Diaz",
        points: 55,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: true, friday: true }
      },
      {
        name: "Pedro Sanchez",
        points: 35,
        attendance: { monday: false, tuesday: false, wednesday: true, thursday: true, friday: true }
      }
    ]
  }
];
