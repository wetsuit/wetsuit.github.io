// todo: refactor if we add other product types

export interface Wetsuit {
  brand: string;
  category: "Men" | "Women" | "Youth";
  color: string;
  condition: "Like New" | null;
  feature: string;
  hooded: boolean;
  id: string;
  price: number;
  size: string;
  thickness: string;
}
