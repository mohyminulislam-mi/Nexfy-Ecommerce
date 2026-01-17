import Hero from "@/components/pages/Home/Hero";
import Deals from "@/components/pages/Home/Deals";
import Categories from "@/components/pages/Home/Categories";
import FeaturedProducts from "@/components/pages/Home/FeaturedProducts";
import TrendingNow from "@/components/pages/Home/TrendingNow";
import Benefits from "@/components/pages/Home/Benefits";
import Testimonials from "@/components/pages/Home/Testimonials";
import Brands from "@/components/pages/Home/Brands";
import Newsletter from "@/components/pages/Home/Newsletter";

export default function Home() {
  return (
    <main>
      <Hero />
      <Categories />
      <FeaturedProducts />
      <TrendingNow />
      <Deals />
      <Benefits />
      <Testimonials />
      <Brands />
      <Newsletter />
    </main>
  );
}
