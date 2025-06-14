import React, { useState } from "react";
import axios from "axios";

const UpdateCatalogue: React.FC = () => {
  const [catalogueLink, setCatalogueLink] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMessage(null);
    try {
      // Replace with your actual API endpoint
      const response = await axios.post("/api/catalogue/upload", {
        link: catalogueLink,
      });
      setMessage("Catalogue link uploaded successfully!");
      setCatalogueLink("");
    } catch (error: any) {
      setMessage(
        error.response?.data?.message || "Failed to upload catalogue link."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto" }}>
      <h2>Upload Catalogue Link</h2>
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: 16 }}>
          <label htmlFor="catalogue-link">Catalogue Link:</label>
          <input
            id="catalogue-link"
            type="url"
            value={catalogueLink}
            onChange={(e) => setCatalogueLink(e.target.value)}
            required
            style={{ width: "100%", padding: 8, marginTop: 4 }}
            placeholder="https://example.com/catalogue.pdf"
          />
        </div>
        <button type="submit" disabled={loading}>
          {loading ? "Uploading..." : "Upload"}
        </button>
      </form>
      {message && (
        <div
          style={{
            marginTop: 16,
            color: message.includes("successfully") ? "green" : "red",
          }}
        >
          {message}
        </div>
      )}
    </div>
  );
};

export default UpdateCatalogue;
