import React from 'react';
import { Leaf, Users, Handshake } from 'lucide-react';
import { motion } from 'framer-motion';

export default function FeaturesSection() {
  const items = [
    {
      icon: Leaf,
      title: "Patrimônio Natural",
      description: "Quedas de Calandula, cavernas e paisagens únicas"
    },
    {
      icon: Leaf,
      title: "Turismo Sustentável",
      description: "Preservamos o que faz de Calandula um destino único"
    },
    {
      icon: Users,
      title: "Comunidades Locais",
      description: "Emprego e renda para quem vive o território"
    },
    {
      icon: Handshake,
      title: "Parcerias",
      description: "Instituições públicas, privadas e comunitárias"
    }
  ];

  return (
    <section className="relative z-20 -mt-10 px-4 sm:px-6 max-w-2xl mx-auto pb-16">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
      <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-10 space-y-8 border border-slate-100">
        {items.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={index} className="flex flex-col items-center text-center group">
              <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-3 shadow-inner group-hover:scale-105 transition-transform">
                <IconComponent className="w-6 h-6" />
              </div>
              <h3 className="font-serif font-bold text-slate-800 text-lg mb-1">{item.title}</h3>
              <p className="text-slate-500 text-sm max-w-xs">{item.description}</p>
            </div>
          );
        })}
      </div>
      </motion.div>
    </section>
  );
}