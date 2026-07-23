import Contact from "../components/Contact.jsx";
import Differentials from "../components/Differentials.jsx";
import FloatingActions from "../components/FloatingActions.jsx";
import Footer from "../components/Footer.jsx";
import Hero from "../components/Hero.jsx";
import Navbar from "../components/Navbar.jsx";
import Portfolio from "../components/Portfolio.jsx";
import Process from "../components/Process.jsx";
import QuoteForm from "../components/QuoteForm.jsx";
import Services from "../components/Services.jsx";
import Testimonials from "../components/Testimonials.jsx";

export default function Home() {
  return (
    <div className="site-shell bg-carbon text-white">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <Differentials />
        <Process />
        <QuoteForm />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
      <FloatingActions />
    </div>
  );
}
