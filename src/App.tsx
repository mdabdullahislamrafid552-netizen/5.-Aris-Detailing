import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className="min-h-screen bg-obsidian text-[#e0e0e0]">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
      </main>
      <Contact />
    </div>
  );
}
