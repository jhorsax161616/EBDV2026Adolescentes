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
  color: string;
  totalPoints: number;
  members: Member[];
}

export const groups: Group[] = [
  {
    name: "STARS",
    color: "red",
    totalPoints: 0,
    members: [
      {
        name: "Grace Ayma Poma",
        points: 0,
        attendance: { monday: true, tuesday: true, wednesday: false, thursday: false, friday: false }
      },
      {
        name: "Angela Quiliche Sosa",
        points: 20,
        attendance: { monday: true, tuesday: true, wednesday: false, thursday: false, friday: false }
      },
      {
        name: "Angela Vargas Lopez",
        points: 0,
        attendance: { monday: true, tuesday: true, wednesday: false, thursday: false, friday: false }
      },
      {
        name: "Cielo Felices Rojas",
        points: 0,
        attendance: { monday: true, tuesday: false, wednesday: false, thursday: false, friday: false }
      }
    ]
  },
  {
    name: "DIAMANTES",
    color: "skyblue",
    totalPoints: 50,
    members: [
      {
        name: "Denis Caceres Venegas",
        points: 0,
        attendance: { monday: true, tuesday: false, wednesday: false, thursday: false, friday: false }
      },
      {
        name: "Luz Maricielo Icanaque Serna",
        points: 0,
        attendance: { monday: true, tuesday: true, wednesday: false, thursday: false, friday: false }
      },
      {
        name: "Pricila Pachary Tapullima",
        points: 0,
        attendance: { monday: true, tuesday: false, wednesday: false, thursday: false, friday: false }
      },
      {
        name: "Camila Gomez Vera",
        points: 0,
        attendance: { monday: true, tuesday: false, wednesday: false, thursday: false, friday: false }
      }
    ]
  },
  {
    name: "CORALES",
    color: "lilac",
    totalPoints: 0,
    members: [
      {
        name: "Luz",
        points: 0,
        attendance: { monday: true, tuesday: false, wednesday: false, thursday: false, friday: false }
      },
      {
        name: "Sarai Albinagorta Gutierrez",
        points: 0,
        attendance: { monday: true, tuesday: false, wednesday: false, thursday: false, friday: false }
      },
      {
        name: "Sefora Valladolid Huanay",
        points: 0,
        attendance: { monday: true, tuesday: false, wednesday: false, thursday: false, friday: false }
      },
      {
        name: "Sarai Duran Araujo",
        points: 0,
        attendance: { monday: true, tuesday: true, wednesday: false, thursday: false, friday: false }
      }
    ]
  },
  {
    name: "NEW",
    color: "default",
    totalPoints: 0,
    members: [
      {
        name: "Abigail Ñañes",
        points: 0,
        attendance: { monday: false, tuesday: true, wednesday: false, thursday: false, friday: false }
      },
      {
        name: "Aracely Abigail Pariona",
        points: 0,
        attendance: { monday: false, tuesday: true, wednesday: false, thursday: false, friday: false }
      }
    ]
  }
];
