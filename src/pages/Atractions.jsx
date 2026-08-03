import React, { useState } from 'react';
import { Search, MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { attractionsData } from '../data/atractionsData';
import Navbar  from '../components/NavBar'

export default function AttractionsPage() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', 'Natural', 'Histórico', 'Cultural'];

  // Filtragem em tempo real
  const filteredAttractions = attractionsData.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-20 pt-28 px-6">
      
      <Navbar />

      <div className="max-w-7xl mx-auto">
        
        {/* Botão para voltar ao Início */}
        <div className="mb-6">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center space-x-2 text-stone-600 hover:text-stone-900 bg-white border border-stone-200 px-4 py-2 rounded-full transition-colors text-sm font-medium shadow-sm cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar ao Início</span>
          </button>
        </div>

        {/* Topo da Página */}
        <div className="mb-8 border-b border-stone-200 pb-6">
          <span className="text-emerald-700 font-semibold uppercase tracking-widest text-xs">
            Património
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-stone-900 mt-1">
            Atrativos Turísticos
          </h1>
          <p className='text-stone-600 text-md line-clamp-2 mt-4'>
            Descubra os tesouros naturais, culturais e históricos que tornam Calandula um destino único em Angola.
          </p>
        </div>

        {/* Barra de Pesquisa e Filtros */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-center justify-between">
          
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-3.5 w-5 h-5 text-stone-400" />
            <input 
              type="text"
              placeholder="Pesquisar por nome ou local..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white pl-12 pr-4 py-3 rounded-2xl border border-stone-200 text-stone-800 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-700 shadow-sm text-sm"
            />
          </div>

          <div className="flex flex-wrap gap-2 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  selectedCategory === cat 
                    ? 'bg-emerald-800 text-white shadow-sm'
                    : 'bg-white text-stone-600 border border-stone-200 hover:bg-stone-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Grid de Resultados */}
        {filteredAttractions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAttractions.map((item) => (
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
        ) : (
          <div className="text-center py-20">
            <p className="text-stone-500 text-lg">Nenhum património encontrado para "{searchTerm}".</p>
          </div>
        )}

      </div>
    </div>
  );
}