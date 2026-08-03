import React, { useState } from 'react';
import { Menu, X, Compass } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); //obtem a localização atual do item clicado do menu

  const menuItems = [
    { name: 'Início', path: '/' },
    { name: 'Atrativos', path: '/atracoes' },
    { name: 'Negócios', path: '' },
    { name: 'Guias', path: '' },
    { name: 'Parceiros', path: '' },
  ];

  // Função auxiliar para verificar se o item está ativo
  const isActive = (path) => location.pathname === path;

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent w-full">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        <div className="flex items-center space-x-2.5">
          <div className="bg-emerald-700 text-white p-2 rounded-xl shadow-sm flex items-center justify-center">
            <Compass className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-white sm:text-slate-900 tracking-wide text-sm sm:text-base drop-shadow-sm">
              CALANDULA
            </span>
            <span className="text-[10px] tracking-widest text-emerald-400 sm:text-emerald-700 font-semibold uppercase drop-shadow-sm">
              Conecta Tur
            </span>
          </div>
        </div>

        <nav className="hidden sm:flex items-center justify-center space-x-2 bg-white/80 backdrop-blur-md px-6 py-2 rounded-full border border-slate-200/60 shadow-sm">
          {menuItems.map((item) => {

            return (
              <Link
                key={item.name}
                to={item.path}
                className={`text-sm font-medium px-5 py-2 rounded-full transition-all ${
                  isActive(item.path)
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/60'
                }`}
              >
                {item.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden sm:block w-[140px]"></div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="sm:hidden p-2.5 bg-white/90 hover:bg-white backdrop-blur-md rounded-xl text-slate-800 shadow-sm transition-colors focus:outline-none"
          aria-label="Abrir Menu"
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isMenuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col animate-in fade-in duration-200 sm:hidden">
          <div className="max-w-7xl mx-auto w-full px-6 h-20 flex items-center justify-between border-b border-slate-100">
            <div className="flex items-center space-x-2.5">
              <div className="bg-emerald-700 text-white p-2 rounded-xl">
                <Compass className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-serif font-bold text-slate-900 text-sm sm:text-base">
                  CALANDULA
                </span>
                <span className="text-[10px] tracking-widest text-emerald-700 font-semibold uppercase">
                  Conecta Tur
                </span>
              </div>
            </div>
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="p-2.5 bg-slate-100 hover:bg-slate-200 rounded-xl text-slate-800 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <nav className="flex flex-col px-6 py-8 space-y-3 max-w-md w-full mx-auto">
            {menuItems.map((item) => {
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`text-lg font-medium px-4 py-3 rounded-xl transition-colors ${
                    isActive(item.path)
                      ? 'bg-emerald-800 text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
