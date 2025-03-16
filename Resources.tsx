import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, Video, Download, Users } from 'lucide-react';

const Resources = () => {
  const resources = [
    {
      title: "Guides et Articles",
      icon: BookOpen,
      items: [
        "Comment mieux s'organiser à l'école",
        "Astuces pour rester concentré",
        "Gérer ses émotions"
      ]
    },
    {
      title: "Vidéos Éducatives",
      icon: Video,
      items: [
        "Comprendre le TDAH",
        "Exercices de respiration",
        "Techniques de relaxation"
      ]
    },
    {
      title: "Ressources à Télécharger",
      icon: Download,
      items: [
        "Planificateur hebdomadaire",
        "Checklist quotidienne",
        "Calendrier des objectifs"
      ]
    },
    {
      title: "Pour les Parents",
      icon: Users,
      items: [
        "Guide d'accompagnement",
        "Communiquer avec l'école",
        "Activités parent-enfant"
      ]
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold text-purple-700 mb-8">
        Ressources Utiles
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {resources.map((section, index) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Icon className="w-6 h-6 text-purple-600" />
                <h2 className="text-xl font-semibold">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-purple-400 rounded-full" />
                    <span className="text-gray-600">{item}</span>
                  </li>
                ))}
              </ul>
              <button className="mt-4 text-purple-600 hover:text-purple-700 font-medium">
                En savoir plus →
              </button>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Resources;