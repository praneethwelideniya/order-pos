import { Product } from "@/types/Product";
import axios from "axios";

const API_BASE_URL = process.env.EXPO_PUBLIC_BASE_API;
export const productService = {
  getProducts: async (): Promise<Product[]> => {
    try {
      const response = await axios.get<Product[]>(`${API_BASE_URL}`);
      return response.data;
    } catch (error) {
      console.error("Error fetching products:", error);
      throw error;
    }
  },
};
