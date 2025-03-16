import React from 'react';
import { motion } from 'framer-motion';
import { Star, Brain, Heart } from 'lucide-react';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="space-y-8"
    >
      <section className="text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-4">
          Bienvenue sur TDAH Kids !
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Un espace amusant et éducatif pour t'aider à développer tes super-pouvoirs !
        </p>
      </section>

      <div className="grid md:grid-cols-3 gap-6 mt-12">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <Star className="w-12 h-12 text-yellow-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Jeux Amusants</h2>
          <p className="text-gray-600">
            Découvre des jeux qui t'aident à te concentrer tout en t'amusant !
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <Brain className="w-12 h-12 text-blue-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Exercices Stimulants</h2>
          <p className="text-gray-600">
            Entraîne ton cerveau avec des activités adaptées à tes besoins.
          </p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          className="bg-white p-6 rounded-xl shadow-md"
        >
          <Heart className="w-12 h-12 text-red-500 mb-4" />
          <h2 className="text-xl font-semibold mb-2">Conseils et Astuces</h2>
          <p className="text-gray-600">
            Apprends des stratégies pour mieux gérer ton quotidien.
          </p>
        </motion.div>
      </div>

      <section className="mt-12 bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold text-purple-700 mb-4">
          Parents et Éducateurs
        </h2>
        <p className="text-gray-600">
          Découvrez nos ressources gratuites et nos guides pour accompagner votre enfant.
          Nous proposons des outils pratiques et des conseils d'experts pour soutenir
          le développement et l'apprentissage.
        </p>
      </section>
    </motion.div>
  );
};

export default Home;