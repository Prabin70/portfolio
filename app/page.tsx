import { ContactPageLayout } from "@/components/common/ContactForm";
import Hero from "@/components/common/Hero";
import { Skills } from "@/components/common/Skills";
import { Testimonials } from "@/components/common/Testimonials";
import { Tools } from "@/components/common/Tools";
import { Footer } from "@/layout/Footer";
import Navbar from "@/layout/Navbar";

const page = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Skills/>
      <Testimonials/>
      <Tools/>
      <ContactPageLayout/>
      <Footer/>
    </div>
  );
};

export default page;
