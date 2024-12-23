import exp from "constants";

export interface ITeam {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const teams: ITeam[] = [
  {
    id: 1,
    name: "Syahri",
    description: "CEO and Jagal",
    image: "/teams/pudge.png",
  },
  {
    id: 2,
    name: "Ajat",
    description: "COO and Delivery Manager",
    image: "/teams/centaur.png",
  },
  {
    id: 3,
    name: "Bayu",
    description: "Pro Angler Section",
    image: "/teams/slark.png",
  },
  {
    id: 4,
    name: "Radea",
    description: "Veg and Leaf Section",
    image: "/teams/np.png",
  },
  {
    id: 5,
    name: "Ikul",
    description: "Warehouse and Cooler Section",
    image: "/teams/cm.png",
  },
  {
    id: 6,
    name: "Tito",
    description: "The Hash Slinging Slasher Section",
    image: "/Teams/pa.png",
  },
];
