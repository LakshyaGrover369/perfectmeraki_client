import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "@/components/common/ProductCard";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store"; // Adjust the import path to your store

type Product = {
  _id: string;
  image: string;
  type: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
};

const NameplatesPage: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Get token from user slice
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post(
          "http://localhost:5000/api/admin/getProductsByType",
          {
            type: "",
          },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setProducts(response.data.data || []);
      } catch (err: any) {
        setError("Failed to fetch products.");
      } finally {
        setLoading(false);
      }
    };
    if (token) {
      fetchProducts();
    }
  }, [token]);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: 16,
          marginTop: 24,
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product._id}
            image={product.image}
            type={product.type}
            description={product.description}
            originalPrice={product.originalPrice}
            discountedPrice={product.discountedPrice}
          />
        ))}
      </div>
      {!loading && products.length === 0 && <p>No products found.</p>}
    </div>
  );
};

export default NameplatesPage;
