import React, { useState } from "react";

type Props = object;

const PRODUCT_TYPES = [
  "nameplates",
  "spiritual hangings",
  "kitchen decor",
  "fridge magnets",
  "danglers",
  "evil eye",
  "jarokha",
  "mandala mirrors",
  "kids special",
  "key holders",
];

const AddProduct = () => {
  const [form, setForm] = useState({
    image: "",
    type: "",
    name: "",
    description: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const target = e.target as
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement;
    const { name, value } = target;
    if (target instanceof HTMLInputElement && target.type === "file") {
      setForm((prev) => ({
        ...prev,
        [name]: target.files && target.files[0] ? target.files[0] : "",
      }));
    } else {
      setForm((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(form);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f8fafc 0%, #e0e7ff 100%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "Inter, sans-serif",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          background: "#fff",
          padding: "2.5rem 2rem",
          borderRadius: "1.25rem",
          boxShadow: "0 8px 32px rgba(60, 72, 100, 0.15)",
          width: "100%",
          maxWidth: "420px",
          display: "flex",
          flexDirection: "column",
          gap: "1.5rem",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "0.5rem",
            color: "#4f46e5",
            letterSpacing: "0.02em",
            fontWeight: 700,
          }}
        >
          Add New Product
        </h2>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label
            htmlFor="image"
            style={{
              fontWeight: 500,
              color: "#374151",
              marginBottom: "0.2rem",
            }}
          >
            Product Image
          </label>
          <input
            type="file"
            name="image"
            id="image"
            accept="image/*"
            onChange={handleChange}
            style={{
              padding: "0.5rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
              background: "#f3f4f6",
            }}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label
            htmlFor="type"
            style={{
              fontWeight: 500,
              color: "#374151",
              marginBottom: "0.2rem",
            }}
          >
            Product Type
          </label>
          <select
            name="type"
            id="type"
            value={form.type}
            onChange={handleChange}
            required
            style={{
              padding: "0.75rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
              background: "#f9fafb",
              fontSize: "1rem",
            }}
          >
            <option value="" disabled>
              Select product type
            </option>
            {PRODUCT_TYPES.map((type) => (
              <option key={type} value={type}>
                {type.charAt(0).toUpperCase() + type.slice(1)}
              </option>
            ))}
          </select>
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label
            htmlFor="name"
            style={{
              fontWeight: 500,
              color: "#374151",
              marginBottom: "0.2rem",
            }}
          >
            Product Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Enter product name"
            style={{
              padding: "0.75rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
              background: "#f9fafb",
              fontSize: "1rem",
            }}
          />
        </div>
        <div
          style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}
        >
          <label
            htmlFor="description"
            style={{
              fontWeight: 500,
              color: "#374151",
              marginBottom: "0.2rem",
            }}
          >
            Product Description
          </label>
          <textarea
            name="description"
            id="description"
            value={form.description}
            onChange={handleChange}
            required
            placeholder="Describe your product..."
            rows={4}
            style={{
              padding: "0.75rem",
              border: "1px solid #d1d5db",
              borderRadius: "0.5rem",
              background: "#f9fafb",
              fontSize: "1rem",
              resize: "vertical",
            }}
          />
        </div>
        <button
          type="submit"
          style={{
            marginTop: "0.5rem",
            padding: "0.85rem",
            background: "linear-gradient(90deg, #6366f1 0%, #818cf8 100%)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1.1rem",
            border: "none",
            borderRadius: "0.75rem",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(99, 102, 241, 0.12)",
            transition: "background 0.2s",
          }}
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
