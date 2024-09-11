import { productService } from "@/services/productService";
import { Product } from "@/types/Product";
import { useState, useEffect, useCallback } from "react";

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | undefined>();

  const fetchProducts = useCallback(async () => {
    try {
      setProducts([]);
      setLoading(true);
      setError(undefined);
      const data = await productService.getProducts();
      setProducts(data);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
};
