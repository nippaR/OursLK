import { Navbar } from '@/lib/components/Navbar';
import { Hero } from '@/lib/components/Hero';
import { About } from '@/lib/components/About';
import { Services } from '@/lib/components/Services';
import { Portfolio } from '@/lib/components/Portfolio';
import { Pricing } from '@/lib/components/Pricing';
import { Process } from '@/lib/components/Process';
import { Contact } from '@/lib/components/Contact';
import { Footer } from '@/lib/components/Footer';

export default function HomePage() {
  return (
    <main className="w-full overflow-hidden">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Pricing />
      <Process />
      <Contact />
      <Footer />
    </main>
  );
}
