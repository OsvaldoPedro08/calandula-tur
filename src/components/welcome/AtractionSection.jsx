import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { attractionsData } from '../../data/atractionsData';

export default function AtractionSection() {
  const navigate = useNavigate();

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      
      {/* Cabeçalho da Seção */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div>
          <span className="text-emerald-700 font-semibold uppercase tracking-widest text-xs sm:text-sm">
            Património
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-stone-900 mt-2">
            Atrativos em Destaque
          </h2>
          <p className="text-stone-600 text-base sm:text-lg mt-3 max-w-2xl">
            Os tesouros naturais, culturais e históricos que fazem de Calandula um destino imperdível.
          </p>
        </div>
        
        <button 
          onClick={() => navigate('/atracoes')}
          className="inline-flex items-center space-x-2 text-emerald-800 hover:text-emerald-950 font-semibold transition-colors group text-base cursor-pointer"
        >
          <span>Ver todos</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </button>
      </div>

      {/* Grid de Destaque */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {attractionsData.slice(0, 3).map((item) => (
          <div 
            key={item.id}
            className="bg-white rounded-3xl overflow-hidden border border-stone-200/60 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-emerald-100/90 backdrop-blur-sm text-emerald-900 text-xs font-semibold px-3 py-1 rounded-full">
                  {item.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center space-x-1.5 text-stone-500 text-xs sm:text-sm">
                  <MapPin className="w-4 h-4 text-emerald-700" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-stone-900">
                  {item.title}
                </h3>
                <p className="text-stone-600 text-sm line-clamp-2">
                  {item.shortDescription}
                </p>
              </div>
            </div>
            
            <div className="p-6 pt-0">
              <button 
                onClick={() => navigate(`/atracoes/${item.id}`)}
                className="inline-flex items-center space-x-2 text-emerald-800 hover:text-emerald-950 font-semibold text-sm group cursor-pointer"
              >
                <span>Descobrir</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
  );
}