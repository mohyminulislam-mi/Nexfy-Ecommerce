import Hero from "@/components/pages/Home/Hero";
import Deals from "@/components/pages/Home/Deals";
import Image from "next/image";
import Categories from "@/components/pages/Home/Categories";
import FeaturedProducts from "@/components/pages/Home/FeaturedProducts";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <Deals />
    </main>
  );
}
