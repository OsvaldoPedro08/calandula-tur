import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Store, BedDouble, UtensilsCrossed, Wrench, ArrowRight, Phone } from 'lucide-react';
import { businessData } from '../../data/businessData';
import { motion } from 'framer-motion';

export default function LocalBusinessSection() {
  const navigate = useNavigate();

  return (
    <section className="bg-[#FAF8F5] py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
              <span className="text-emerald-800 font-semibold uppercase tracking-widest text-xs sm:text-sm block">
                Economia Local
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl font-bold text-stone-900 tracking-tight">
                Negócios Locais
              </h2>
              <p className="text-stone-600 text-base sm:text-lg leading-relaxed">
                Apoie o empreendedorismo de Calandula. Encontre hospedagem, restaurantes e serviços turísticos geridos pela comunidade.
              </p>
            </motion.div>
          </div>

          <button 
            onClick={() => navigate('/negocios')}
            className="inline-flex items-center space-x-2 text-emerald-800 font-semibold hover:text-emerald-950 transition-colors group cursor-pointer self-start md:self-auto"
          >
            <span>Ver todos</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* Grelha de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {businessData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-3xl overflow-hidden border border-stone-200/80 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
            >
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
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
                </motion.div>
              </div>

              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-stone-100 mt-4">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
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
                </motion.div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}