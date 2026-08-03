import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, MapPin, Phone, Mail, CheckCircle2 } from 'lucide-react';
import { businessData } from '../../data/businessData';

export default function LocalBusinessDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const item = businessData.find(d => d.id === id);

  if (!item) {
    return (
      <div className="min-h-screen bg-[#FAF8F5] flex flex-col items-center justify-center p-6 text-center space-y-4">
        <h2 className="font-serif text-2xl font-bold text-stone-800">Negócio não encontrado</h2>
        <button 
          onClick={() => navigate(-1)}
          className="bg-emerald-800 text-white px-6 py-3 rounded-2xl text-sm font-medium hover:bg-emerald-900 transition-colors"
        >
          Voltar atrás
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FAF8F5] pb-20">
      
      {/* Banner */}
      <div className="relative h-[400px] sm:h-[500px] w-full">
        <img 
          src={item.image} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-900/80 via-stone-900/30 to-transparent" />
        
        <div className="absolute top-6 left-6 lg:left-12">
          <button 
            onClick={() => navigate(-1)}
            className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm text-stone-800 px-4 py-2.5 rounded-2xl text-sm font-medium shadow-sm hover:bg-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Voltar</span>
          </button>
        </div>

        <div className="absolute bottom-10 left-6 lg:left-12 max-w-4xl space-y-3">
          <span className="bg-amber-500/90 text-stone-900 font-semibold px-3.5 py-1 rounded-full text-xs uppercase tracking-wider inline-block">
            {item.category}
          </span>
          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-white leading-tight">
            {item.title}
          </h1>
          <div className="flex items-center space-x-2 text-stone-200 text-sm sm:text-base pt-1">
            <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0" />
            <span>{item.location}</span>
          </div>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Descrição e Serviços */}
        <div className="lg:col-span-2 space-y-10">
          <div className="space-y-4">
            <h2 className="font-serif text-2xl font-bold text-stone-900">Sobre o local</h2>
            <p className="text-stone-700 text-base sm:text-lg leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Serviços Oferecidos */}
          {item.services && item.services.length > 0 && (
            <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm space-y-6">
              <h3 className="font-serif text-xl font-bold text-stone-900">
                Serviços oferecidos
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {item.services.map((service, index) => (
                  <div key={index} className="flex items-center space-x-3 text-stone-700">
                    <CheckCircle2 className="w-5 h-5 text-emerald-800 flex-shrink-0" />
                    <span className="text-sm font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Contacto */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-8 border border-stone-200/80 shadow-sm space-y-6">
            <h3 className="font-serif text-xl font-bold text-stone-900">
              Contacto
            </h3>
            
            <div className="space-y-4">
              <a 
                href={`tel:${item.phone}`}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-stone-50 hover:bg-emerald-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-900 transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 block">Ligar</span>
                  <span className="text-sm font-semibold text-stone-800">{item.phone}</span>
                </div>
              </a>

              <a 
                href={`mailto:${item.email}`}
                className="flex items-center space-x-4 p-4 rounded-2xl bg-stone-50 hover:bg-emerald-50 transition-colors group"
              >
                <div className="w-12 h-12 rounded-full bg-emerald-800 text-white flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-stone-500 block">E-mail</span>
                  <span className="text-sm font-semibold text-stone-800 break-all">{item.email}</span>
                </div>
              </a>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
}