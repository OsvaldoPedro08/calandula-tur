import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Mail, Facebook, Instagram, Compass } from 'lucide-react';

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer className="bg-[#F5EFEB] border-t border-stone-200/80 text-stone-700 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Coluna 1: Logo e Descrição */}
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <div className="bg-emerald-700 text-white p-2 rounded-xl shadow-sm flex items-center justify-center">
                <Compass className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-xl font-bold tracking-wider text-stone-900 block">CALANDULA</span>
              <span className="text-xs uppercase tracking-widest text-emerald-800 font-semibold block">Conecta Tur</span>
            </div>
          </div>
          <p className="text-stone-600 text-sm leading-relaxed max-w-sm">
            Plataforma de turismo sustentável que valoriza o património natural, cultural e histórico do município de Calandula, Malanje.
          </p>
        </div>

        {/* Coluna 2: Navegação */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-stone-900 tracking-wider text-sm uppercase">
            Navegação
          </h3>
          <ul className="space-y-2.5 text-sm">
            <li>
              <button 
                onClick={() => navigate('/atractions')} 
                className="text-stone-600 hover:text-emerald-800 transition-colors cursor-pointer text-left"
              >
                Atrativos Turísticos
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate('/negocios')} 
                className="text-stone-600 hover:text-emerald-800 transition-colors cursor-pointer text-left"
              >
                Negócios Locais
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate('/guias')} 
                className="text-stone-600 hover:text-emerald-800 transition-colors cursor-pointer text-left"
              >
                Guias Locais
              </button>
            </li>
            <li>
              <button 
                onClick={() => navigate('/parceiros')} 
                className="text-stone-600 hover:text-emerald-800 transition-colors cursor-pointer text-left"
              >
                Parceiros
              </button>
            </li>
          </ul>
        </div>

        {/* Coluna 3: Contacto */}
        <div className="space-y-4">
          <h3 className="font-serif font-bold text-stone-900 tracking-wider text-sm uppercase">
            Contacto
          </h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start space-x-3 text-stone-600">
              <MapPin className="w-5 h-5 text-emerald-800 flex-shrink-0 mt-0.5" />
              <span>Calandula, Malanje — Angola</span>
            </li>
            <li className="flex items-center space-x-3 text-stone-600">
              <Mail className="w-5 h-5 text-emerald-800 flex-shrink-0" />
              <span>contato@calandulatur.ao</span>
            </li>
          </ul>

          {/* Redes Sociais */}
          <div className="flex space-x-3 pt-2">
            <a 
              href="#facebook" 
              className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-emerald-800 hover:text-white transition-colors shadow-sm"
              aria-label="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
            <a 
              href="#instagram" 
              className="w-10 h-10 rounded-full bg-white border border-stone-200 flex items-center justify-center text-stone-700 hover:bg-emerald-800 hover:text-white transition-colors shadow-sm"
              aria-label="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>

      {/* Linha Inferior / Copyright */}
      <div className="max-w-7xl mx-auto border-t border-stone-200 pt-6 text-center text-xs text-stone-500">
        <p>© 2026 Calandula Conecta Tur — Turismo sustentável ao serviço das comunidades.</p>
      </div>
    </footer>
  );
}