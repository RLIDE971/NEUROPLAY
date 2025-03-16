import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Target, Clock, Zap } from 'lucide-react';

const Games = () => {
  const games = [
    {
      title: "Mémoire Magique",
      description: "Entraîne ta mémoire en trouvant les paires de cartes !",
      icon: Brain,
      color: "text-blue-500",
      bgColor: "bg-blue-100",
      comingSoon: false
    },
    {
      title: "Focus Fighter",
      description: "Améliore ta concentration en relevant des défis chronométrés !",
      icon: Target,
      color: "text-green-500",
      bgColor: "bg-green-100",
      comingSoon: true
    },
    {
      title: "Time Master",
      description: "Apprends à gérer ton temps de façon amusante !",
      icon: Clock,
      color: "text-purple-500",
      bgColor: "bg-purple-100",
      comingSoon: true
    },
    {
      title: "Super Focus",
      description: "Développe ta capacité à ignorer les distractions !",
      icon: Zap,
      color: "text-yellow-500",
      bgColor: "bg-yellow-100",
      comingSoon: true
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <h1 className="text-3xl font-bold text-purple-700 mb-8">Nos Jeux Éducatifs</h1>

      <div className="grid md:grid-cols-2 gap-6">
        {games.map((game, index) => {
          const Icon = game.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className={`relative p-6 rounded-xl shadow-md ${
                game.comingSoon ? 'bg-gray-50' : 'bg-white'
              }`}
            >
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-full ${game.bgColor}`}>
                  <Icon className={`w-8 h-8 ${game.color}`} />
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-2">{game.title}</h2>
                  <p className="text-gray-600">{game.description}</p>
                </div>
              </div>
              {game.comingSoon && (
                <div className="absolute top-4 right-4">
                  <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                    Bientôt disponible
                  </span>
                </div>
              )}
              {!game.comingSoon && (
                <button className="mt-4 bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition-colors">
                  Jouer maintenant
                </button>
              )}
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Games;