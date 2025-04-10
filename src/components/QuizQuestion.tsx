import { motion } from 'framer-motion';
import { Question } from '../types';

interface QuizQuestionProps {
  question: Question;
  selectedAnswer: number | null;
  onSelectAnswer: (score: number) => void;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  question,
  selectedAnswer,
  onSelectAnswer,
}) => {
  // Format text to handle markdown-style formatting
  const formatText = (text: string) => {
    // Replace markdown-style formatting with HTML tags
    return text
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
      className="w-full max-w-2xl mx-auto px-4"
    >
      <div className="mb-2 sm:mb-3">
        <div className="w-16 h-1 bg-primary-500 rounded mx-auto mb-6"></div>
        <motion.h2 
          className="text-xl sm:text-2xl font-bold mb-8 text-secondary-950 font-heading text-center leading-relaxed"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          <span className="rich-text" dangerouslySetInnerHTML={{ __html: formatText(question.text) }} />
        </motion.h2>
      </div>
      
      <motion.div 
        className="space-y-3 sm:space-y-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {question.options.map((option, index) => (
          <motion.button
            key={index}
            variants={itemVariants}
            whileHover={{ scale: 1.02, boxShadow: '0 4px 12px rgba(0,0,0,0.05)', transition: { duration: 0.2 } }}
            whileTap={{ scale: 0.98 }}
            className={`w-full flex items-center gap-4 p-4 sm:p-5 rounded-xl border ${
              selectedAnswer === option.score
                ? 'border-primary-500 bg-primary-50/80 shadow-md'
                : 'border-secondary-200 bg-white hover:border-secondary-300 hover:bg-secondary-50/70'
            } transition-all duration-300 font-body`}
            onClick={() => onSelectAnswer(option.score)}
          >
            <div className={`flex-shrink-0 w-12 h-12 rounded-full ${
              selectedAnswer === option.score
                ? 'bg-primary-600 text-white shadow-sm'
                : 'bg-secondary-100 text-secondary-800'
            } flex items-center justify-center transition-colors duration-300`}>
              <span className="text-xl">{option.icon}</span>
            </div>
            <span 
              className={`text-left text-sm sm:text-base rich-text ${
                selectedAnswer === option.score
                  ? 'text-secondary-950 font-semibold'
                  : 'text-secondary-950'
              }`} 
              dangerouslySetInnerHTML={{ __html: formatText(option.text) }} 
            />
          </motion.button>
        ))}
      </motion.div>
    </motion.div>
  );
};