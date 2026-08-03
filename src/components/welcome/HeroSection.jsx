import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] flex flex-col justify-between text-white overflow-hidden bg-slate-900 px-6 py-10">
      {/* Imagem de Fundo */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/03.WEBP" 
          alt="Quedas de Calandula" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50 backdrop-blur-[1px]"></div>
      </div>

      <div className="relative z-10 pt-12"></div>

      <div className="relative z-10 max-w-xl mx-auto text-center my-auto space-y-6">
        
        <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1.5 rounded-full text-xs font-medium tracking-wider uppercase shadow-sm">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          <span>Malanje — Angola</span>
        </div>

        <h1 className="text-4xl sm:text-5xl font-serif font-bold tracking-tight leading-tight">
          Descubra Calandula
        </h1>

        <p className="text-sm sm:text-base text-slate-200 leading-relaxed font-light">
          O destino onde as águas encontram a natureza. Conecte-se com atrativos naturais, culturais e históricos, guiado por quem vive e preserva este território.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button className="w-full sm:w-auto bg-[#D4A373] hover:bg-[#c29263] text-slate-900 font-medium px-6 py-3 rounded-full transition-all shadow-md flex items-center justify-center space-x-2">
            <span>Explorar Atrativos</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border border-white/30 font-medium px-6 py-3 rounded-full backdrop-blur-sm transition-all flex items-center justify-center">
            <span>Conhecer Guias</span>
          </button>
        </div>
      </div>

      <div className="relative z-10 flex justify-center pb-2">
        <div className="w-5 h-9 border-2 border-white/40 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}