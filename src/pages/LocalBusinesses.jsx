import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Phone, ArrowRight, ArrowLeft, BedDouble, UtensilsCrossed, Wrench, Store } from 'lucide-react';
import { businessData } from '../data/businessData';
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'

export default function LocalBusinesses() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = [
    { name: 'Todos', icon: Store },
    { name: 'Hospedagem', icon: BedDouble },
    { name: 'Restaurantes', icon: UtensilsCrossed },
    { name: 'Serviços', icon: Wrench },
  ];

  const filteredItems = businessData.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.shortDescription.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          item.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div>
        <NavBar />
        
       <div className="min-h-screen bg-[#FAF8F5] py-12 pb-20 pt-28 px-6 lg:px-12">
        
        <div className="max-w-7xl mx-auto space-y-10">
            
            <div className="space-y-6">

                <div className="mb-6">
                    <button 
                        onClick={() => navigate('/')}
                        className="inline-flex items-center space-x-2 text-stone-600 hover:text-stone-900 bg-white border border-stone-200 px-4 py-2 rounded-full transition-colors text-sm font-medium shadow-sm cursor-pointer"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        <span>Voltar ao Início</span>
                    </button>
                </div>

            <div className="space-y-3">
                <span className="text-emerald-800 font-semibold uppercase tracking-widest text-xs sm:text-sm block">
                Economia Local
                </span>
                <h1 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900">
                Todos os Negócios Locais
                </h1>
                <p className="text-stone-600 text-base sm:text-lg max-w-2xl">
                Explore o diretório completo de hospedagens, restaurantes e prestadores de serviços de Calandula.
                </p>
            </div>
            </div>

            {/* Barra de Pesquisa e Filtros */}
            <div className="flex flex-col md:flex-row gap-4 items-stretch md:items-center justify-between">
            <div className="relative flex-1 max-w-md">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
                <input 
                type="text"
                placeholder="Pesquisar por nome, descrição ou localização..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full bg-white border border-stone-200/80 rounded-2xl pl-12 pr-4 py-3.5 text-stone-800 placeholder-stone-400 focus:outline-none focus:border-emerald-800 text-sm shadow-sm"
                />
            </div>

            <div className="flex flex-wrap gap-2">
                {categories.map((cat) => {
                const Icon = cat.icon;
                const isSelected = selectedCategory === cat.name;
                return (
                    <button
                    key={cat.name}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`flex items-center space-x-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
                        isSelected 
                        ? 'bg-emerald-800 text-white shadow-sm' 
                        : 'bg-white text-stone-700 border border-stone-200/80 hover:border-emerald-800'
                    }`}
                    >
                    <Icon className={`w-3.5 h-3.5 ${isSelected ? 'text-white' : 'text-emerald-800'}`} />
                    <span>{cat.name}</span>
                    </button>
                );
                })}
            </div>
            </div>

            {/* Grelha de Cards */}
            {filteredItems.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl border border-stone-200/80 p-8 space-y-3">
                <p className="font-serif text-xl font-bold text-stone-800">Nenhum negócio encontrado</p>
                <p className="text-stone-600 text-sm">Tente pesquisar por outros termos ou alterar os filtros.</p>
            </div>
            ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredItems.map((item) => (
                <div 
                    key={item.id} 
                    className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
                >
                    <div>
                    <div className="relative h-64 overflow-hidden">
                        <img 
                        src={item.image} 
                        alt={item.title} 
                        className="w-full h-full object-cover"
                        />
                        <div className="absolute top-4 left-4 bg-emerald-800/90 backdrop-blur-sm text-white px-3.5 py-1 rounded-full text-xs font-medium">
                        {item.category}
                        </div>
                    </div>

                    <div className="p-6 space-y-3">
                        <h3 className="font-serif text-xl font-bold text-stone-900">
                        {item.title}
                        </h3>
                        <p className="text-stone-600 text-sm leading-relaxed line-clamp-2">
                        {item.shortDescription}
                        </p>
                    </div>
                    </div>

                    <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-stone-100 mt-4">
                    <div className="flex items-center space-x-2 text-stone-600 text-xs sm:text-sm">
                        <Phone className="w-4 h-4 text-emerald-800 flex-shrink-0" />
                        <span>{item.phone}</span>
                    </div>
                    <button 
                        onClick={() => navigate(`/negocios/${item.id}`)}
                        className="inline-flex items-center space-x-1 text-emerald-800 font-semibold text-sm hover:text-emerald-950 transition-colors cursor-pointer"
                    >
                        <span>Ver</span>
                        <ArrowRight className="w-4 h-4" />
                    </button>
                    </div>
                </div>
                ))}
            </div>
            )}

        </div>

        </div>
        
        <Footer />
    </div>
  );
}