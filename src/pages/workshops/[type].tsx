"use client";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import paintingLoader from "../../../public/assets/gifs/paint_loader.gif";
import { API_ROUTES } from "@/api/APIRoutes";
import { useSelector } from "react-redux";
import type { RootState } from "@/store/store";

const WORKSHOP_TYPES = [
  "corperate team building",
  "festival themed",
  "fridge magnets",
  "kids",
  "lipan art",
  "mandala",
  "nameplate",
];

interface Workshop {
  _id: string;
  image1: string;
  image2: string;
  image3: string;
  name: string;
  type: string;
  description: string;
}

export default function WorkshopTypePage() {
  const router = useRouter();
  const { type } = router.query; // dynamic param
  const [workshops, setWorkshops] = useState<Workshop[]>([]);
  const [loading, setLoading] = useState(true);
  const token = useSelector((state: RootState) => state.auth.token);

  useEffect(() => {
    if (!router.isReady) return;

    const fetchData = async () => {
      try {
        const url = type
          ? `${API_ROUTES.WORKSHOPS.GET_BY_TYPE(type as string)}`
          : `${API_ROUTES.WORKSHOPS.GET_BY_TYPE()}`;
        const response = await axios.get(url, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setWorkshops(response.data.data || []);
      } catch (err) {
        console.error("Error fetching workshops:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [type, router.isReady, token]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-[300px]">
        <Image
          src={paintingLoader.src}
          width={28}
          height={28}
          alt="Loading..."
        />
      </div>
    );
  }

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold mb-6 capitalize">
        {type ? `${type} Workshops` : "All Workshops"}
      </h1>

      {workshops.length === 0 ? (
        <p className="text-gray-500">No workshops found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {workshops.map((w) => (
            <div
              key={w._id}
              className="border rounded-lg shadow hover:shadow-lg transition p-4"
            >
              <div className="flex gap-2 mb-3">
                {[w.image1, w.image2, w.image3].map(
                  (img, idx) =>
                    img && (
                      <Image
                        key={idx}
                        src={img}
                        alt={`${w.name} image ${idx + 1}`}
                        width={60}
                        height={60}
                        className="rounded object-cover border"
                      />
                    )
                )}
              </div>
              <h2 className="text-lg font-semibold">{w.name}</h2>
              <p className="text-sm text-gray-600">{w.type}</p>
              <p className="text-gray-700 mt-2">{w.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
