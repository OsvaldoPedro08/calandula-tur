import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Calendar, CheckCircle2, Sparkles } from 'lucide-react';
import { attractionsData } from '../../data/atractionsData';

export default function AtractionDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  // Busca o atrativo correspondente através do id vindo dos parâmetros da URL
  const attraction = attractionsData.find((item) => item.id === id);

  if (!attraction) {
    return (
      <div className="min-h-screen bg-[#FDFBF7] flex flex-col items-center justify-center text-center px-6">
        <h2 className="font-serif text-2xl font-bold text-stone-900 mb-2">Património não encontrado</h2>
        <p className="text-stone-600 mb-6">O atrativo que procura não existe ou foi removido.</p>
        <button 
          onClick={() => navigate('/atractions')}
          className="bg-emerald-800 text-white px-6 py-2.5 rounded-full font-medium text-sm"
        >
          Ver todos os atrativos
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDFBF7] pb-20">
      
      {/* Hero com Imagem de Fundo */}
      <div className="relative h-[450px] w-full">
        <img 
          src={attraction.image} 
          alt={attraction.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/40"></div>
        
        {/* Botão Voltar */}
        <div className="absolute top-28 left-6 sm:left-12">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-white bg-black/30 hover:bg-black/50 backdrop-blur-md px-4 py-2 rounded-full transition-all text-sm font-medium cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </button>
        </div>

        {/* Título e Localização */}
        <div className="absolute bottom-8 left-6 right-6 sm:left-12 max-w-4xl">
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white mb-3 drop-shadow-md">
            {attraction.title}
          </h1>
          <div className="flex items-center space-x-2 text-white/90 text-sm sm:text-base">
            <MapPin className="w-4 h-4 text-emerald-400" />
            <span>{attraction.location}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="max-w-4xl mx-auto px-6 mt-8 space-y-8">
        
        <div className="flex items-center">
          <span className="inline-flex items-center space-x-1.5 px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-sm font-medium">
            <Sparkles className="w-4 h-4" />
            <span>{attraction.category}</span>
          </span>
        </div>

        {/* Card de Melhor Época */}
        <div className="bg-[#F5EFEB] border border-stone-200/60 p-6 rounded-2xl shadow-sm">
          <div className="flex items-start space-x-3">
            <Calendar className="w-5 h-5 text-emerald-800 mt-0.5 flex-shrink-0" />
            <div>
              <h3 className="font-serif font-bold text-stone-900 text-base mb-1">Melhor época</h3>
              <p className="text-stone-700 text-sm sm:text-base">{attraction.bestTime}</p>
            </div>
          </div>
        </div>

        {/* Descrição Longa */}
        <div className="prose prose-stone max-w-none text-stone-700 text-base sm:text-lg leading-relaxed">
          <p>{attraction.fullDescription}</p>
        </div>

        {/* Destaques */}
        {attraction.highlights && attraction.highlights.length > 0 && (
          <div className="bg-[#F5EFEB] p-6 sm:p-8 rounded-2xl border border-stone-200/60 space-y-4">
            <h3 className="font-serif text-xl font-bold text-stone-900">Destaques</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {attraction.highlights.map((highlight, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-emerald-700 flex-shrink-0" />
                  <span className="text-stone-800 text-sm sm:text-base font-medium">{highlight}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Informações para Visitantes */}
        {attraction.visitorInfo && (
          <div className="bg-[#F5EFEB] p-6 sm:p-8 rounded-2xl border border-stone-200/60 space-y-3">
            <h3 className="font-serif text-xl font-bold text-stone-900">Informações para visitantes</h3>
            <p className="text-stone-700 text-sm sm:text-base leading-relaxed">
              {attraction.visitorInfo}
            </p>
          </div>
        )}

        {/* Banner de Guia Local */}
        <div className="bg-emerald-800 text-white rounded-2xl p-8 sm:p-10 text-center space-y-4 shadow-md">
          <h3 className="font-serif text-2xl sm:text-3xl font-bold">Quer visitar com um guia local?</h3>
          <p className="text-emerald-100 max-w-xl mx-auto text-sm sm:text-base">
            Conecte-se com guias experientes que conhecem cada cantinho.
          </p>
          <button 
            onClick={() => navigate('/guias')}
            className="inline-block bg-amber-500 hover:bg-amber-600 text-stone-900 font-semibold px-6 py-3 rounded-full transition-colors shadow-sm text-sm sm:text-base cursor-pointer"
          >
            Ver Guias
          </button>
        </div>

      </div>
    </div>
  );
}