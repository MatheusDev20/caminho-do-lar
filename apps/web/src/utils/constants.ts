import { NavItem } from "../interfaces";

export const NavLinks: NavItem[] = [
  {
    id: 1,
    label: "Quem Somos",
    destination: "#",
  },
  {
    id: 2,
    label: "Como cadastrar um doguinho",
    destination: "#",
  },
  {
    id: 3,
    label: "Como Adotar",
    destination: "#",
  },
];

export const DogSpeciesOptions = [
  {
    name: "Todos",
  },
  {
    imgLink: "https://www.svgrepo.com/show/2046/dog.svg",
    name: "Cães",
  },
  {
    imgLink: "https://www.svgrepo.com/show/85124/cat.svg",
    name: "Gatos",
  },
];

export const DogGenderOptions = [
  {
    name: "Todos",
  },
  {
    name: "Macho",
  },
  {
    name: "Fêmea",
  },
];

export const DogSizeOptions = [
  {
    name: "Todos",
  },
  {
    name: "Grande",
  },
  {
    name: "Médio",
  },
  {
    name: "Pequeno",
  },
];
