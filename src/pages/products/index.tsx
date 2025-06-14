import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { motion } from "framer-motion";
import mandalaImg from "@/../public/assets/images/mandala.jpg";
import lippanImg from "@/../public/assets/images/lippan.jpg";
import nameplateImg from "@/../public/assets/images/nameplate.jpg";
import { OutlineCTAButton } from "@/components/common/OutlineCTAButton";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};
const Products = () => {
  const router = useRouter();
  return (
    <section id="offerings" className="mt-32 px-6 md:px-16">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        className="text-center"
      >
        <h2 className="text-3xl font-bold text-[#2d2926]">
          Our Handcrafted Collections
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600">
          Explore our signature pieces that blend tradition with contemporary
          design
        </p>
      </motion.div>

      <div className="mt-16 grid gap-12 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            title: "Mandala Wall Art",
            img: mandalaImg,
            description:
              "Intricate geometric patterns that bring harmony to your space",
            link: "/collections/mandalas",
          },
          {
            title: "Lippan-Inspired Designs",
            img: lippanImg,
            description:
              "Traditional mud relief work adapted to wood craftsmanship",
            link: "/collections/lippan",
          },
          {
            title: "Personalized Nameplates",
            img: nameplateImg,
            description: "Custom wooden nameplates for homes and businesses",
            link: "/collections/nameplates",
          },
        ].map((item, idx) => (
          <motion.div
            key={idx}
            className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-xl transition-all duration-300"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            variants={fadeInUp}
            transition={{ delay: 0.1 * idx }}
          >
            <div className="relative h-80 overflow-hidden">
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <div className="text-white">
                  <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                    <button
                      type="button"
                      onClick={() => router.push(item.link)}
                      className="mt-3 inline-block text-sm font-medium text-white underline opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200"
                    >
                      View Collection →
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-bold text-[#2d2926]">{item.title}</h3>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
      >
        <button
          type="button"
          onClick={() => router.push("/workshops")}
          className="inline-block"
        >
          <OutlineCTAButton href="/workshops">
            View All Collections →
          </OutlineCTAButton>
        </button>
      </motion.div>
    </section>
  );
};

export default Products;
