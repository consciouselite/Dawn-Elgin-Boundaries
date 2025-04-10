import { motion } from 'framer-motion';

interface QuizProgressProps {
  currentQuestion: number;
  totalQuestions: number;
}

export const QuizProgress: React.FC<QuizProgressProps> = ({ currentQuestion, totalQuestions }) => {
  const progress = (currentQuestion / totalQuestions) * 100;

  return (
    <div className="mb-6 sm:mb-8">
      <div className="flex justify-between items-center text-xs sm:text-sm mb-2 font-medium">
        <span className="text-secondary-900 font-body">Question {currentQuestion} of {totalQuestions}</span>
        <span className="text-primary-700 font-body">{Math.round(progress)}% Complete</span>
      </div>
      <div className="h-2 sm:h-3 bg-secondary-100 rounded-full overflow-hidden shadow-inner">
        <motion.div
          className="h-full bg-gradient-to-r from-primary-600 to-primary-500 rounded-full"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        />
      </div>
    </div>
  );
};