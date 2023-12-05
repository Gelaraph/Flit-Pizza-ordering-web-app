import Navbar from "./component/navbar/Navbar";
import Footer from "./component/Footer";
import HeroSection from "./component/HeroSection";
import Menu from "./component/Menu";
import Best from "./component/Best";
import Testimonial from "./component/Testimonial";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  justify-between">
      <Navbar />
      <HeroSection />
      <Menu />
      <Best />
      <Testimonial />
      <Footer />
    </main>
  );
}
