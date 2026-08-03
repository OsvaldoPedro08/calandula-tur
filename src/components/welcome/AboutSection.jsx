import React from 'react';
import { motion } from 'framer-motion';

export default function AboutSection() {
  return (
    <section className="bg-[#1B5E3A] text-white py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-16">
        
        <div className="max-w-4xl space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[#E2C08A] font-semibold uppercase tracking-widest text-xs sm:text-sm block">
              Calandula Conecta Tur
            </span>
            
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold leading-tight">
              Turismo que valoriza o território e fortalece as comunidades
            </h2>
            
            <p className="text-emerald-50/90 text-base sm:text-lg lg:text-xl leading-relaxed font-light">
              Somos uma iniciativa de turismo sustentável que promove o património natural, cultural e histórico do município de Calandula. Conectamos turistas a guias locais, empreendedores e prestadores de serviços, gerando emprego, renda e oportunidades para quem vive e preserva este destino único.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-6 border-t border-emerald-800/60">
          
          <div className="space-y-1">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#E2C08A] block">
                3
              </span>
              <span className="text-emerald-100 text-sm sm:text-base font-medium">
                Tipos de atrativos
              </span>
            </motion.div>
          </div>

          <div className="space-y-1">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#E2C08A] block">
                100%
              </span>
              <span className="text-emerald-100 text-sm sm:text-base font-medium">
                Foco local
              </span>
            </motion.div>
          </div>

          <div className="space-y-1">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
              <span className="font-serif text-4xl sm:text-5xl font-bold text-[#E2C08A] block">
                ∞
              </span>
              <span className="text-emerald-100 text-sm sm:text-base font-medium">
                Experiências
              </span>
            </motion.div>
          </div>

        </div>

        <div className="w-full h-[300px] sm:h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="/02.JPG" 
              alt="Paisagem montanhosa de Calandula" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

      </div>
    </section>
  );
}