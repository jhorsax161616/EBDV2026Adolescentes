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
    totalPoints: 100,
    members: [
      {
        name: "Grace Ayma Poma",
        points: 0,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: false, friday: false }
      },
      {
        name: "Angela Quiliche Sosa",
        points: 10,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: false, friday: false }
      },
      {
        name: "Angela Vargas Lopez",
        points: 0,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: false, friday: false }
      },
      {
        name: "Nicol Cielo Felices Rojas",
        points: 0,
        attendance: { monday: true, tuesday: false, wednesday: true, thursday: false, friday: false }
      }
    ]
  },
  {
    name: "DIAMANTES",
    color: "skyblue",
    totalPoints: 80,
    members: [
      {
        name: "Denis Caceres Venegas",
        points: 0,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: false, friday: false }
      },
      {
        name: "Luz Maricielo Icanaque Serna",
        points: 10,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: false, friday: false }
      },
      {
        name: "Priscila Valentina Pachari Tapullima",
        points: 0,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: false, friday: false }
      },
      {
        name: "Camila Gomez Vera",
        points: 0,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: false, friday: false }
      },
      {
        name: "Abigail Yañez Camarena",
        points: 0,
        attendance: { monday: false, tuesday: true, wednesday: true, thursday: false, friday: false }
      },
      {
        name: "Sebastian Zavaleta Juarez",
        points: 0,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: false, friday: false }
      },
      {
        name: "Luis Fernando Jose Candiotti",
        points: 0,
        attendance: { monday: false, tuesday: false, wednesday: true, thursday: false, friday: false }
      }
    ]
  },
  {
    name: "CORALES",
    color: "lilac",
    totalPoints: 30,
    members: [
      {
        name: "Luz Mantari Ochoa",
        points: 0,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: false, friday: false }
      },
      {
        name: "Sarai Duran Araujo",
        points: 0,
        attendance: { monday: true, tuesday: true, wednesday: true, thursday: false, friday: false }
      },
      {
        name: "Adriano Martinez Rojas",
        points: 0,
        attendance: { monday: false, tuesday: false, wednesday: true, thursday: false, friday: false }
      }
    ]
  },
  {
    name: "NEW",
    color: "default",
    totalPoints: 0,
    members: [
      {
        name: "Aracely Abigail Pariona",
        points: 0,
        attendance: { monday: false, tuesday: true, wednesday: false, thursday: false, friday: false }
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
      }
    ]
  }
];
