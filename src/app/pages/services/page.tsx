"use client";
import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { RoundedCTAButton } from "@/components/common/RoundedCTAButton";

// Mock service data with image URLs
const services = [
  {
    id: 1,
    title: "Handcrafted Mandala Art",
    description:
      "Intricately carved wooden mandalas that bring harmony and positive energy to your space.",
    image:
      "https://images.unsplash.com/photo-1584735422184-959c2788c455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 2,
    title: "Lippan Art Revival",
    description:
      "Traditional mud relief work reimagined in wood for modern interiors.",
    image:
      "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
  },
  {
    id: 3,
    title: "Custom Wooden Nameplates",
    description:
      "Personalized nameplates carved with precision for homes, offices, and gifts.",
    image:
      "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 4,
    title: "Themed Home Décor",
    description:
      "Bespoke wooden décor pieces designed to match your aesthetic.",
    image:
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
  },
  {
    id: 5,
    title: "Creative Art Workshops",
    description:
      "Interactive sessions on mandala painting, wood carving, and Lippan art.",
    image:
      "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    title: "Corporate & Event Décor",
    description:
      "Custom wood installations for weddings, offices, and special events.",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
  },
];

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const floatingShapesRef = useRef<(HTMLDivElement | null)[]>([]);
  const serviceCardsRef = useRef<(HTMLDivElement | null)[]>([]);

  // Register GSAP plugins
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    // Floating shapes animation
    floatingShapesRef.current.forEach((shape, i) => {
      if (shape) {
        gsap.to(shape, {
          y: i % 2 === 0 ? -20 : 20,
          duration: 4 + i,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }
    });

    // Service cards animation on scroll
    serviceCardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 0.8,
          delay: i * 0.1,
          ease: "back.out(1.2)",
        });
      }
    });

    // Background pulse effect on scroll
    if (containerRef.current) {
      gsap.to(containerRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top center",
          toggleActions: "play none none none",
        },
        backgroundColor: "rgba(236, 253, 245, 0.9)",
        duration: 2,
      });
    }
  }, []);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden relative"
    >
      {/* Floating decorative elements */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            floatingShapesRef.current[i] = el;
          }}
          className={`absolute hidden md:block ${
            i % 2 === 0 ? "text-emerald-300" : "text-green-400"
          }`}
          style={{
            top: `${10 + i * 10}%`,
            left: i < 4 ? `${5 + i * 5}%` : "auto",
            right: i >= 4 ? `${5 + (i - 4) * 5}%` : "auto",
            fontSize: `${1 + (i % 3)}rem`,
            opacity: 0.7,
          }}
        >
          {i % 2 === 0 ? "🍃" : "✨"}
        </div>
      ))}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-green-800 mb-4">
            Our Craftsmanship
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Each piece is a labor of love, blending tradition with contemporary
            artistry.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.id}
              ref={(el) => {
                serviceCardsRef.current[i] = el;
              }}
              whileHover={{ y: -10 }}
              className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-emerald-800 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <RoundedCTAButton href="/">Explore More</RoundedCTAButton>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Let’s create something extraordinary together. Book a consultation
            today!
          </p>
          <RoundedCTAButton href="/">Get Started</RoundedCTAButton>
        </motion.div>
      </div>
    </div>
  );
};

export default Services;
