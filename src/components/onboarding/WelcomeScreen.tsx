import React from 'react';
import { motion } from 'framer-motion';
import { OnboardingData } from '../../types/quiz';
import { Clock, CheckSquare, Award } from 'lucide-react';

// Reuse the same coach profile image URL from App.tsx
const COACH_PROFILE_IMAGE = "https://nrojbwxcqochzwhmmkql.supabase.co/storage/v1/object/sign/coaches-profile-images/Dawn%20Elgin%20PP.png?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjb2FjaGVzLXByb2ZpbGUtaW1hZ2VzL0Rhd24gRWxnaW4gUFAucG5nIiwiaWF0IjoxNzQzNTE2MjkzLCJleHAiOjE3NzUwNTIyOTN9.ZnB8ZrwEO2kpyvgdAydIl-kEvjFdZgtwk6iBmsGu2rg";

// Quiz illustration images by gender
const QUIZ_IMAGES = {
  female: "https://images.unsplash.com/photo-1573878737226-4f9572c22b69?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
  male: "https://images.unsplash.com/photo-1553907725-c3d2e2ccc00e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
};

interface WelcomeScreenProps {
  onStart: () => void;
  userData: OnboardingData;
  setUserData: (data: Partial<OnboardingData>) => void;
}

export const WelcomeScreen: React.FC<WelcomeScreenProps> = ({ onStart, userData, setUserData }) => {
  // Choose the appropriate image based on gender, defaulting to female
  const quizImage = userData && userData.gender === 'male' ? QUIZ_IMAGES.male : QUIZ_IMAGES.female;
  
  return (
    <motion.div
      className="welcome-screen p-8 sm:p-10 rounded-xl bg-white shadow-md max-w-2xl mx-auto border border-secondary-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex flex-col items-center mb-4">
        <div className="relative rounded-full p-1 bg-gradient-to-r from-primary-500 to-primary-600 shadow-lg mb-6">
          <img
            src={COACH_PROFILE_IMAGE}
            alt="Coach Dawn Elgin"
            className="w-28 h-28 sm:w-32 sm:h-32 rounded-full object-cover"
          />
        </div>
        
        <h1 className="text-3xl sm:text-4xl font-bold text-center mb-3 text-secondary-950 font-heading">
          Discover Your Boundary Style
        </h1>
        
        <div className="w-20 h-1 bg-primary-500 rounded mb-4"></div>
        
        <p className="text-center text-secondary-900 mb-2 font-body max-w-xl text-base sm:text-lg">
          This 90-second quiz reveals why you struggle to say "no" and how to finally set boundaries that stick (even with difficult people).
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="flex flex-col items-center p-4 bg-secondary-50 rounded-lg border border-secondary-100 shadow-sm hover:shadow transition-shadow">
          <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-2">
            <Clock className="w-6 h-6 text-primary-600" />
          </div>
          <p className="text-secondary-950 text-center font-medium font-body">
            <span className="text-primary-600 font-bold">90 seconds</span> to complete
          </p>
        </div>
        <div className="flex flex-col items-center p-4 bg-secondary-50 rounded-lg border border-secondary-100 shadow-sm hover:shadow transition-shadow">
          <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-2">
            <CheckSquare className="w-6 h-6 text-primary-600" />
          </div>
          <p className="text-secondary-950 text-center font-medium font-body">
            <span className="text-primary-600 font-bold">9 questions</span> to answer
          </p>
        </div>
        <div className="flex flex-col items-center p-4 bg-secondary-50 rounded-lg border border-secondary-100 shadow-sm hover:shadow transition-shadow">
          <div className="w-12 h-12 rounded-full bg-primary-50 flex items-center justify-center mb-2">
            <Award className="w-6 h-6 text-primary-600" />
          </div>
          <p className="text-secondary-950 text-center font-medium font-body">
            <span className="text-primary-600 font-bold">Personalized</span> boundary tips
          </p>
        </div>
      </div>
      
      <button
        onClick={onStart}
        className="w-full py-4 px-6 bg-primary-600 hover:bg-primary-700 text-white font-semibold rounded-lg shadow-sm hover:shadow-md transition-all duration-300 font-body text-lg"
      >
        Start Quiz
      </button>
      
      <p className="text-xs sm:text-sm text-center text-secondary-800 mt-6 font-body">
        Get ready to transform your relationships and strengthen your boundaries with Dawn Elgin
      </p>
    </motion.div>
  );
}; 