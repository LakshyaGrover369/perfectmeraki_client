import React from "react";

interface ProductCardProps {
  image: string;
  type: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  type,
  description,
  originalPrice,
  discountedPrice,
}) => {
  return (
    <div className="max-w-xs bg-white rounded-xl shadow-md border border-gray-100 overflow-hidden font-sans">
      <img src={image} alt={type} className="w-full h-44 object-cover" />
      <div className="p-4">
        <div className="text-lg font-semibold text-gray-800 mb-1">{type}</div>
        <div className="text-sm text-gray-600 mb-3 min-h-[40px]">
          {description}
        </div>
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-red-600">
            ₹{discountedPrice}
          </span>
          <span className="line-through text-gray-400 text-sm">
            ₹{originalPrice}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
