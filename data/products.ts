import { ProductType } from "@/types/productType";
import { locations } from "./locations";
import { UNITS } from "./units";


export const products: ProductType[]=[
    {
      id: crypto.randomUUID(),
      name: "Toilett paper",
      location: locations[1],
      quantity: 6,
      unit: UNITS[1],
      adjustBy: 1,
      threshold: 5,
      note:"Its probably more then 50.. but its an estimate",
    },
    {
    id: crypto.randomUUID(),
    name: "Coffee beans",
    location: locations[0],
    quantity: 1,
    unit: UNITS[3],
    adjustBy: 1,
    threshold: 1,

    note: "Totally out! Need to buy dark roast before next trip",

  },
  {
    id: crypto.randomUUID(),
    name: "Olive oil",
    location: locations[0], 
    quantity: 1,
    unit: UNITS[4],
    adjustBy: 1,
    threshold: 2,
    note: "Extra virgin",

  },
  {
    id: crypto.randomUUID(),
    name: "Dish soap",
    location: locations[0], 
    quantity: 1,
    unit: UNITS[3],
    adjustBy: 1,
    threshold: 1,
    note: "One half-full bottle left under the sink",

  },
  {
    id: crypto.randomUUID(),
    name: "Wine glasses",
    location: locations[0],
    quantity: 8,
    unit: UNITS[1],
    adjustBy: 1,
    threshold: 6,
    note: "Upper cabinet",

  },
  {
    id:crypto.randomUUID(),
    name: "Coffee filters",
    location: locations[2],
    quantity: 0,
    unit: UNITS[3],
    adjustBy: 1,
    threshold: 1,
    note: "Size 1x4",

  },
  {
    id:crypto.randomUUID(),
    name: "Rice",
    location: locations[2], 
    quantity: 1,
    unit: UNITS[0],
    adjustBy: 1,
    threshold: 2,
    note: "Jasmine rice 1kg",

  },
  {
    id:crypto.randomUUID(),
    name: "Pasta",
    location: locations[2],
    quantity: 4,
    unit: UNITS[0],
    adjustBy: 1,
    threshold: 2,
    note: "Penne and Spaghetti",

  },
  {
    id: crypto.randomUUID(),
    name: "Wood screws 4.5x50mm",
    location: locations[3], 
    quantity: 12,
    unit: UNITS[1],
    adjustBy: 10,
    threshold: 25,
    note: "In the blue plastic container",

  },
  {
    id: crypto.randomUUID(),
    name: "Falu Rödfärg Original",
    location: locations[3], 
    quantity: 3,
    unit: UNITS[4],
    adjustBy: 1,
    threshold: 2,
    note: "Bottom shelf in the back",

  },
  {
    id: crypto.randomUUID(),
    name: "Lighter fluid",
    location: locations[5],
    quantity: 0,
    unit: UNITS[3],
    adjustBy: 1,
    threshold: 2,
    note: "Out of stock! Need for bbq",

  },
  {
    id: crypto.randomUUID(),
    name: "Hand soap refill",
    location: locations[1],
    quantity: 1,
    unit: UNITS[3],
    adjustBy: 1,
    threshold: 2,
    note: "In the cabinet under the sink",

  },
  {
    id: crypto.randomUUID(),
    name: "Shampoo",
    location: locations[1],
    quantity: 0,
    unit: UNITS[1],
    adjustBy: 1,
    threshold: 1,
    note: "Need to buy sensitive skin type",

  },
  {
    id: crypto.randomUUID(),
    name: "Extra duvet & pillow set",
    location: locations[4],
    quantity: 2,
    unit: UNITS[3],
    adjustBy: 1,
    threshold: 1,
    note: "Stored in the wardrobe top shelf",

  },
  {
    id: crypto.randomUUID(),
    name: "Bedsheets 150x200",
    location: locations[4],
    quantity: 4,
    unit: UNITS[1],
    adjustBy: 1,
    threshold: 2,
    note: "Clean and folded in the dresser",

  },
  {
    id: crypto.randomUUID(),
    name: "AA Batteries",
    location: locations[6],
    quantity: 3,
    unit: UNITS[3],
    adjustBy: 1,
    threshold: 5,
    note: "For TV remotes, stored in side-table drawer",

  },
  {
    id: crypto.randomUUID(),
    name: "Fireplace matches",
    location: locations[6],
    quantity: 1,
    unit: UNITS[3],
    adjustBy: 1,
    threshold: 2,
    note: "Long matches on the mantelpiece",
  },
];
