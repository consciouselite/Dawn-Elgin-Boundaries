import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';

interface ConfidenceTipsProps {
  tips: string[];
}

export const ConfidenceTips: React.FC<ConfidenceTipsProps> = ({ tips }) => {
  const tipContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const tipVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <motion.div
      className="bg-white rounded-xl shadow-sm p-6 sm:p-8 border border-secondary-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.ul 
        className="space-y-5"
        variants={tipContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {tips.map((tip, index) => (
          <motion.li
            key={index}
            className="flex items-start gap-4 text-secondary-950 font-body"
            variants={tipVariants}
          >
            <CheckCircle className="text-primary-600 w-6 h-6 mt-0.5 flex-shrink-0" strokeWidth={2.5} />
            <span className="text-base sm:text-lg">{tip}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};