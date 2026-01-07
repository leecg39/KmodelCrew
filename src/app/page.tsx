import Header from '@/components/layout/Header';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Academy from '@/components/sections/Academy';
import Portfolio from '@/components/sections/Portfolio';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/layout/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-white selection:bg-accent selection:text-primary">
      <Header />
      <main>
        <Hero />
        <About />
        <Academy />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
