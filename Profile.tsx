import React from 'react';
import { motion } from 'framer-motion';
import { Trophy, Star, Award, Medal } from 'lucide-react';

const Profile = () => {
  const achievements = [
    {
      icon: Trophy,
      title: "Super Concentré",
      description: "Tu as complété 5 exercices de concentration !",
      progress: 80
    },
    {
      icon: Star,
      title: "Maître du Temps",
      description: "Tu as utilisé le planificateur pendant 7 jours !",
      progress: 60
    },
    {
      icon: Award,
      title: "Expert en Mémoire",
      description: "Tu as gagné 3 parties de Mémoire Magique !",
      progress: 40
    },
    {
      icon: Medal,
      title: "Champion du Calme",
      description: "Tu as pratiqué la respiration 5 fois !",
      progress: 20
    }
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-8"
    >
      <div className="bg-white p-6 rounded-xl shadow-md">
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
            <span className="text-3xl">👋</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold text-purple-700">Mon Profil</h1>
            <p className="text-gray-600">Super Héros en Formation</p>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {achievements.map((achievement, index) => {
          const Icon = achievement.icon;
          return (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <div className="flex items-center space-x-3 mb-4">
                <Icon className="w-8 h-8 text-purple-600" />
                <h2 className="text-xl font-semibold">{achievement.title}</h2>
              </div>
              <p className="text-gray-600 mb-4">{achievement.description}</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-purple-600 h-2.5 rounded-full"
                  style={{ width: `${achievement.progress}%` }}
                ></div>
              </div>
              <p className="text-sm text-gray-500 mt-2">
                Progression : {achievement.progress}%
              </p>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default Profile;