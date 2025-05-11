import type { NavItem } from "@/@types/NavItem";

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
    imgLink: "https://www.svgrepo.com/show/2046/dog.svg",
    name: "Cachorro",
  },
  {
    imgLink: "https://www.svgrepo.com/show/85124/cat.svg",
    name: "Gatos",
  },
];

export const DogGenderOptions = [
  {
    name: "Macho",
  },
  {
    name: "Fêmea",
  },
];

export const DogSizeOptions = [
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
