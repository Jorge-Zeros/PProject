import React, { useState, useEffect } from 'react';
import { Building2 } from 'lucide-react';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import { sections } from './data/sections';

function App() {
  const [currentSection, setCurrentSection] = useState(sections[0].id);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setCurrentSection(id);
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setCurrentSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-30 lg:pl-64">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <Building2 className="h-6 w-6 text-blue-600 mr-2" />
          <h1 className="text-xl font-bold text-gray-900">Empresa CoolBox</h1>
        </div>
      </header>

      <Sidebar
        sections={sections}
        currentSection={currentSection}
        onSectionClick={scrollToSection}
        isSidebarOpen={isSidebarOpen}
        toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
      />

      <main className="lg:pl-64 pt-16">
        <div className="container mx-auto px-4 py-8">
          <Content sections={sections} />
        </div>
      </main>
    </div>
  );
}

export default App;