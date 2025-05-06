import MenuItemAddOn from "./MenuItemAddOn";

type MenuItem = {
  _id?: string;
  name: string;
  image: string;
  description: string;
  category: string | { _id: string; name: string };
  basePrice: string | number;
  sizes: MenuItemAddOn[];
  extraIngredientsPrices: MenuItemAddOn[];
};

export default MenuItem;
