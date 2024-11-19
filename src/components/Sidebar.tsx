import React from 'react';
import { Menu } from 'lucide-react';
import { Section } from '../data/sections';

interface SidebarProps {
  sections: Section[];
  currentSection: string;
  onSectionClick: (id: string) => void;
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({
  sections,
  currentSection,
  onSectionClick,
  isSidebarOpen,
  toggleSidebar,
}: SidebarProps) {
  return (
    <>
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 lg:hidden bg-white p-2 rounded-md shadow-md"
      >
        <Menu className="w-6 h-6 text-gray-700" />
      </button>
      <nav
        className={`fixed top-0 left-0 h-full bg-white w-64 transform transition-transform duration-300 ease-in-out shadow-lg z-40 
          ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}`}
      >
        <div className="p-6">
          <h1 className="text-2xl font-bold text-gray-800 mb-8">Plan Estratégico</h1>
          <ul className="space-y-4">
            {sections.map((section) => (
              <li key={section.id}>
                <button
                  onClick={() => onSectionClick(section.id)}
                  className={`w-full text-left px-4 py-2 rounded-lg transition-colors duration-200
                    ${currentSection === section.id
                      ? 'bg-blue-50 text-blue-600 font-medium'
                      : 'text-gray-600 hover:bg-gray-50'
                    }`}
                >
                  {section.title}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </>
  );
}