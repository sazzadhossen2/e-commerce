import {z} from 'zod';

export type ProductsType = {
  id: number | string;
  name: string;
  shortDescription: string;
  description: string;
  price: number;
  sizes: string[];
  colors: string[];
  images: Record<string, string>;
};


export type ProductsListType = ProductsType[];

export type CartItemType = ProductsType & {
  quantity: number;
  selectedSize: string;
  selectedColor: string;
};
export type CartItemsType = CartItemType[];


export const ShippingFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email"),
  phone: z.string().min(1, "Phone number is required").regex(/^\+?[0-9]\d{1,14}$/, "Invalid phone number")  ,
  address: z.string().min(1, "Address is required"),
  city: z.string().min(1, "City is required"),
 
});

export type ShippingFormType = z.infer<typeof ShippingFormSchema>;

export const paymentFormMethods = z.object({
  cardNumber: z.string().min(16, "Card number must be at least 16 digits").max(16, "Card number must be at most 16 digits"),
  cardName: z.string().min(1, "Name on card is required"),
  expiryDate: z.string().min(5, "Expiry date is required").regex(/^(0[1-9]|1[0-2])\/?([0-9]{2})$/, "Invalid expiry date format"),
  cvv: z.string().min(3, "CVV must be at least 3 digits").max(4, "CVV must be at most 4 digits"),
}); 

export type PaymentFormType = z.infer<typeof paymentFormMethods>;

export type CartStoreStatusType = {
  cart: CartItemsType,
  hasHydrated: boolean,
}

export type CartStoreActionsType ={
  addToCart: (product: CartItemType) => void;
  removeFromCart: (productId:CartItemType) => void;
  clearCart: () => void;
}