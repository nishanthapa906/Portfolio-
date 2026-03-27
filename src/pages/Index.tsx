import { Nav } from '@/components/portfolio/Nav';
import { Hero } from '@/components/portfolio/Hero';
import { Ticker } from '@/components/portfolio/Ticker';
import { About } from '@/components/portfolio/About';
import { Work } from '@/components/portfolio/Work';
import { Experience } from '@/components/portfolio/Experience';
import { Contact } from '@/components/portfolio/Contact';

const Index = () => (
  <>
    <Nav />
    <Hero />
    <Ticker />
    <About />
    <Work />
    <Experience />
    <Contact />
  </>
);

export default Index;
