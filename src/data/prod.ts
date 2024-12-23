import exp from "constants";

export interface IProduct {
  id: number;
  name: string;
  description: string;
  image: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    name: "Wortel",
    description: "Wortel sayuran sehat",
    image: "/product/wortel.jpg",
  },
  {
    id: 2,
    name: "Cabe",
    description: "Ini cabe merah, bukan cabe cabean",
    image: "/product/cabe.jpg",
  },
  {
    id: 3,
    name: "Tomat",
    description: "Tomat, Tobat Maksiat",
    image: "/product/tomat.jpg",
  },
  {
    id: 4,
    name: "Pakcoy",
    description: "Ketika dunia sedang jahat padamu, Fakcoy",
    image: "/product/pakcoy.webp",
  },
  {
    id: 5,
    name: "Bawang",
    description: "Bawang selalu dikaitkan dengan wibu, kasihan bawang",
    image: "/product/bawang.jpg",
  },
  {
    id: 6,
    name: "Bawang Bombai",
    description: "Boombayah Boombayah",
    image: "/product/bomai.jpg",
  },
  {
    id: 7,
    name: "Enoki",
    description:
      "Jamur langka yang membuat kita pusing jika dimakan bersamaan dengan daging sapi 12kg",
    image: "/product/enoki.jpg",
  },
  {
    id: 8,
    name: "Ikan",
    description: "Berbagai macam ikan tersedia disini, kecuali ikan ini",
    image: "/product/ikan.jpg",
  },
  {
    id: 9,
    name: "Daging",
    description: "Daging sapi berkualitas yang diberi makan lele juga tersedia",
    image: "/product/dagingsapi.jpg",
  },
];
